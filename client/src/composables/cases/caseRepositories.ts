import { ref, watch, Ref } from 'vue';
import { collection, query, onSnapshot, where, Unsubscribe } from 'firebase/firestore';
import { db } from 'boot/firebase';

import { Case, CaseState } from 'src/components/cases/models';


export enum CaseTypeCategory {
  ACTIVE = 'Activos',
  ARCHIVED = 'Archivados'
}

export default function useCasesRepositories (selectedEmails: Ref<string[]>, caseType: Ref<CaseTypeCategory>) {

  const cases = ref<Case[]>([]);
  const casesUnsubscribe = ref<Unsubscribe>()
  const isLoading = ref(false)


  function handleParamChange () {
    if (casesUnsubscribe.value) {
      casesUnsubscribe.value()
    }

    isLoading.value = true

    const caseTypeWhere = where('state', caseType.value === CaseTypeCategory.ACTIVE ? '!=' : '==', CaseState.RESOLVED)
    const q = selectedEmails.value.length > 0 ? query(collection(db, 'cases'), where('assignee.email', 'in', selectedEmails.value.slice(0, 10)), caseTypeWhere) : query(collection(db, 'cases'), caseTypeWhere);
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
