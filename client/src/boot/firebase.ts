// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getPerformance } from 'firebase/performance';
import {
  getFirestore,
  connectFirestoreEmulator,
  initializeFirestore
} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions';
import { boot } from 'quasar/wrappers';
import { StateInterface } from '../store';

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
  measurementId: 'G-4B36C3KYSH',
};

const app = initializeApp(firebaseConfig);
initializeFirestore(app, {
  ignoreUndefinedProperties: true
});
const analytics = getAnalytics(app);
const auth = getAuth(app);
const perf = getPerformance(app);
const db = getFirestore();
const storage = getStorage(app);
const functions = getFunctions(app);

if (process.env.NODE_ENV === 'development') {
  connectFirestoreEmulator(db, 'localhost', 8081);
  connectFunctionsEmulator(functions, 'localhost', 5001);
}

// async function handlerUserAuth (store: Store<StateInterface>, user: User) {
//   const userRole = await getDoc(doc(db, 'userRoles', user.uid));

//   let permissions: Array<string> = [];
//   let roleName: string | undefined = undefined;

//   if (userRole.exists()) {
//     const roleID = userRole?.data()?.roleID as string;

//     const roleDocument = await getDoc(doc(db, 'roles', roleID));

//     if (roleDocument.exists()) {
//       permissions = roleDocument.data().permissions as Array<string>;
//       roleName = roleDocument.data().name as string;
//     }
//   }

//   const storeUser: AuthStateInterface = {
//     displayName: user?.displayName ?? undefined,
//     email: user?.email ?? undefined,
//     uid: user?.uid,
//     isLoggedIn: true,
//     permissions,
//     roleName,
//   };
//   store.commit('auth/setUserProps', storeUser);
// }

export default boot<StateInterface>(({ router }) => {
  auth.onAuthStateChanged((user) => {
    if (!user) {
      void router.push('/login');
      return;
    }

    // void handlerUserAuth(store, user);
  });
});

export { analytics, auth, perf, db, storage, functions };
