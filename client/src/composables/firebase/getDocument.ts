import { doc, Unsubscribe, onSnapshot, QueryConstraint, collection, query } from 'firebase/firestore'
import { db } from 'src/boot/firebase'
import { onUnmounted, Ref, ref, watch } from 'vue'



export function GetDocument<T> (collectionID: Ref<string | undefined>, docID: Ref<string | undefined>) {
  const docData = ref<T>()

  const docDataUnsubscribe = ref<Unsubscribe>()

  const error = ref<Error>()

  const handlePropChange = () => {

    if (docDataUnsubscribe.value) {
      docDataUnsubscribe.value()
    }

    if (!collectionID.value || !docID.value) {
      docData.value = undefined
      return
    }

    docDataUnsubscribe.value = onSnapshot(doc(db, collectionID.value, docID.value), (snapshot) => {
      if (!snapshot.exists) {
        docData.value = undefined
        return
      }

      docData.value = { ...snapshot.data() as T, id: snapshot.id, ID: snapshot.id }
    }, (err) => {
      console.log(err)
      error.value = err
    });
  }


  watch([collectionID, docID], handlePropChange, { immediate: true })



  onUnmounted(() => {
    if (docDataUnsubscribe.value) {
      docDataUnsubscribe.value()
    }
  })

  return { docData, error }
}

export function GetDocuments<T> (collectionID: string, ...constraints: QueryConstraint[]) {
  const docs = ref<{ [id: string]: T }>({}) as Ref<{ [id: string]: T }>;

  const q = query(collection(db, collectionID), ...constraints);

  const error = ref<Error>()


  onSnapshot(q, (querySnapshot) => {
    docs.value = {}
    querySnapshot.forEach((doc) => {
      docs.value[doc.id] = doc.data() as T
    });
  }, (err) => {
    console.log(err)
    error.value = err
  });

  return { docs, error };
}
