import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDpd5gWelEnL0Qs8zGFPNFMdOE15nEtcJ8",
  authDomain: "crwn-db-98d6a.firebaseapp.com",
  databaseURL: "https://crwn-db-98d6a.firebaseio.com",
  projectId: "crwn-db-98d6a",
  storageBucket: "crwn-db-98d6a.appspot.com",
  messagingSenderId: "778636508773",
  appId: "1:778636508773:web:c15d6063d6a0c97927d08c",
  measurementId: "G-Y534NLKLDD",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firebase.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  console.log(snapShot);
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//access to the google auth provider
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
