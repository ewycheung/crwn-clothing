import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDAN5hIp4YYnfeklbgVdo_FqYwi2Q5bBfg",
    authDomain: "crwn-db-2e53f.firebaseapp.com",
    projectId: "crwn-db-2e53f",
    storageBucket: "crwn-db-2e53f.appspot.com",
    messagingSenderId: "972392690139",
    appId: "1:972392690139:web:d1c2fd19555187db60b7fe"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;