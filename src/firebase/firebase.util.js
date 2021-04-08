import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCPSGvum4vtBTldjqnfTiijoNlAfEOvjxA',
  authDomain: 'crwn-db-79164.firebaseapp.com',
  projectId: 'crwn-db-79164',
  storageBucket: 'crwn-db-79164.appspot.com',
  messagingSenderId: '1060107421177',
  appId: '1:1060107421177:web:c293118049e2039253e928',
  measurementId: 'G-VPF7KLP1L3',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => firebase.auth().signInWithPopup(provider);

export default firebase;
