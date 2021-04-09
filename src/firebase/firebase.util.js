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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  console.log('firebase', userAuth);
  console.log('firebase', additionalData);

  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  console.log('firebase', userRef);

  const snapshot = await userRef.get();
  console.log('firebase', snapshot);

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => firebase.auth().signInWithPopup(provider);

export default firebase;
