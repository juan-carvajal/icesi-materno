
import { ref, watch, Ref, onUnmounted } from 'vue';
import { onSnapshot, Unsubscribe, doc, collection, query, orderBy, limit, updateDoc, QueryConstraint } from 'firebase/firestore';
import { db } from 'boot/firebase';
import { Alert } from 'src/models/alerts';
import { User } from 'src/models/auth';




export function useAlerts (resultLimit = 50, ...conditions: QueryConstraint[]) {
  const alerts = ref([] as Array<Alert>);

  const q = query(collection(db, 'alerts'), orderBy('createdAt', 'desc'), limit(resultLimit), ...conditions);
  const listener = onSnapshot(q, (querySnapshot) => {
    alerts.value = [] as Array<Alert>;
    querySnapshot.forEach((doc) => {
      const alert = doc.data() as Alert;
      alert.id = doc.id;
      alerts.value.push(alert);
    });
  });

  onUnmounted(listener)

  return { alerts };
}

export function useAlert (alertID: Ref<string>) {
  const alert = ref<Alert>()

  const alertUnsubscribe = ref<Unsubscribe>()

  const handleChange = () => {
    if (alertUnsubscribe.value) {
      alertUnsubscribe.value()
    }


    if (!alertID.value) {
      alert.value = undefined
      return
    }


    alertUnsubscribe.value = onSnapshot(doc(db, 'alerts', alertID.value), (snapshot) => {
      if (!snapshot.exists) {
        alert.value = undefined
        return
      }

      alert.value = { ...snapshot.data() as Alert, id: snapshot.id }
    });
  }

  watch(alertID, handleChange, { immediate: true })

  return { alert }
}

export function AcknowledgeAlert (alertID: string, user?: User) {
  if (!user) {
    return Promise.reject('User is required to acknowledge an alert')
  }

  return updateDoc(doc(db, 'alerts', alertID), {
    acknowledgedBy: user,
    acknowledgedAt: new Date()
  })
}
