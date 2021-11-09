// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getPerformance } from 'firebase/performance';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions';
import { boot } from 'quasar/wrappers';
import { StateInterface } from '../store';
import { AuthStateInterface } from 'src/store/auth/state';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDxz-Ei7BYDMunlwVHrrX1fZTYTDbhJ8Vs',
  authDomain: 'icesi-materno.firebaseapp.com',
  projectId: 'icesi-materno',
  storageBucket: 'icesi-materno.appspot.com',
  messagingSenderId: '292351380464',
  appId: '1:292351380464:web:5df8a45fe640b2b6ae2b35',
  measurementId: 'G-4B36C3KYSH'
};

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const auth = getAuth(app)
const perf = getPerformance(app);
const db = getFirestore();
const storage = getStorage(app);
const functions = getFunctions(app);

if (process.env.NODE_ENV === 'development') {
  connectFirestoreEmulator(db, 'localhost', 8081)
  connectFunctionsEmulator(functions, 'localhost', 5001)
}

export default boot<StateInterface>(({ store }) => {
  auth.onAuthStateChanged((user) => {
    if (!user) {
      store.commit('auth/logUserOut')
      return
    }

    const storeUser: AuthStateInterface = {
      displayName: user?.displayName ?? undefined,
      email: user?.email ?? undefined,
      uid: user?.uid,
      isLoggedIn: true
    }
    store.commit('auth/setUserProps', storeUser)
  })
});


export { analytics, auth, perf, db, storage, functions }
