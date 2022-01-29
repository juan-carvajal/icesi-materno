import { ref, watch, Ref } from 'vue';
import { collection, query, onSnapshot, where, Unsubscribe, QueryConstraint, orderBy } from 'firebase/firestore';
import { db } from 'boot/firebase';

import { Case, CaseState } from 'src/components/cases/models';


export enum CaseTypeCategory {
  ACTIVE = 'Activos',
  ARCHIVED = 'Archivados'
}

export default function useCasesRepositories (selectedEmails: Ref<string[] | null | undefined>, caseType: Ref<CaseTypeCategory>) {

  const cases = ref<Case[]>([]);
  const casesUnsubscribe = ref<Unsubscribe>()
  const isLoading = ref(false)


  function handleParamChange () {
    if (casesUnsubscribe.value) {
      casesUnsubscribe.value()
    }

    isLoading.value = true

    const constraints: QueryConstraint[] = []
    if (selectedEmails.value && selectedEmails.value.length > 0) {

      const filteredEmails = selectedEmails.value.slice(0, 10).map(i => i === 'Sin asignar' ? null : i)

      if (filteredEmails.includes(null)) {
        constraints.push(where('assignee', '==', null))
      } else {
        constraints.push(where('assignee.email', 'in', filteredEmails))
      }


    }


    constraints.push(where('state', caseType.value === CaseTypeCategory.ACTIVE ? '!=' : '==', CaseState.RESOLVED))

    if (caseType.value === CaseTypeCategory.ACTIVE) {
      constraints.push(orderBy('state', 'asc'))
    }

    constraints.push(orderBy('lastUpdateState', 'asc'))

    const q = query(collection(db, 'cases'), ...constraints)
    casesUnsubscribe.value = onSnapshot(q, (querySnapshot) => {
      cases.value = [] as Array<Case>;
      querySnapshot.forEach((doc) => {
        const docCase = doc.data() as Case;
        docCase.ID = doc.id;
        cases.value.push(docCase);
      });
      isLoading.value = false
    }, (err => {
      console.log(err)
      isLoading.value = false
    }), () => {
      isLoading.value = false
    });
  }

  watch([selectedEmails, caseType], handleParamChange, { immediate: true })

  return { cases, isLoading }
}
