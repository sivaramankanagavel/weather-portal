import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import { getFirestore, setDoc, getDoc, doc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDAqEaMCMgwMUsAGvaiJEQ49YPz8Pyw-XQ",
    authDomain: "weather-portal-aa3db.firebaseapp.com",
    projectId: "weather-portal-aa3db",
    storageBucket: "weather-portal-aa3db.appspot.com",
    messagingSenderId: "482408991102",
    appId: "1:482408991102:web:72eb2708f6417545a88b2f"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app)

export const signInWithEmailAndPasswordFunc = async (email, password) => {
    if (email !== undefined && password !== undefined) {
        try{
            return await signInWithEmailAndPassword(auth, email, password)
        }catch(err){
            console.log(err)
        }
    }
    return null
}

export const createUserWithEmailAndPasswordFunc = async (email, password, displayName) => {
    if (email !== undefined && password !== undefined && displayName !== undefined) {
        try{
            return await createUserWithEmailAndPassword(auth, email, password)
        }catch(err){
            console.log(err)
        }
    }
    return null
}

export const signoutFunc = async () => await signOut(auth)

export const onAuthStateChangedFunc = async (callback) => onAuthStateChanged(auth, callback)

export const createUserDetailsDoc = async (userAuth, additionalProps = {}) => {
    const createUserDocument = doc(db, "users", userAuth.uid);
    const getUserDetails = await getDoc(createUserDocument);

    if (!getUserDetails.exists()) {
        const { email, displayName } = userAuth;
        const date = new Date();

        try {
            await setDoc(createUserDocument, {
                displayName,
                email,
                date,
                ...additionalProps
            })
        } catch (error) {
            console.log(error)
        }
    }
}