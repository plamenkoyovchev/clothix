import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDUlA7CZRYZY4YnYRs_yGMbZLkKPEzwiNI",
    authDomain: "clothix-9a176.firebaseapp.com",
    databaseURL: "https://clothix-9a176.firebaseio.com",
    projectId: "clothix-9a176",
    storageBucket: "clothix-9a176.appspot.com",
    messagingSenderId: "1059121015550",
    appId: "1:1059121015550:web:1ce406731674c78cd393af",
    measurementId: "G-BQ1CDT8FRF"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(googleAuthProvider);
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) {
        return;
    }

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshop = await userRef.get();
    if (!snapshop.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (err) {
        }
    }

    return userRef;
}

export default firebase;