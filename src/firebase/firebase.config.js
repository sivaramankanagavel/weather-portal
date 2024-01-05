/*
1. Firebase Initialization (initializeApp):
Initializes Firebase using the provided configuration (firebaseConfig).
Creates the app object.

2. Authentication (getAuth):
Retrieves the auth object for authentication operations using the initialized app.

3. Firestore Database (getFirestore):
Retrieves the db object for Firestore database operations using the initialized app.

4. Authentication Functions:

signInWithEmailAndPasswordFunc:
Attempts to sign in a user with the provided email and password.
Returns the result of the authentication operation.

createUserWithEmailAndPasswordFunc:
Attempts to create a new user with the provided email, password, and displayName.
Returns the result of the user creation operation.

signoutFunc:
Signs out the currently authenticated user.
Returns the result of the signout operation.

onAuthStateChangedFunc:
Listens for changes in the user's authentication state.
Calls the provided callback function when the authentication state changes.

5. Firestore Functions:

createUserDetailsDoc:
Creates a user document in Firestore if it doesn't exist.
Initializes the document with user details, 
including email, displayName, date, and an empty array for favorite cities.

getDocFunc:
Retrieves a document from Firestore based on the user's authentication.
Returns the document data if it exists, or null if not. 
*/

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

export const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const db = getFirestore(app)

export const signInWithEmailAndPasswordFunc = async (email, password) => {
    if (email !== undefined && password !== undefined) {
        try {
            return await signInWithEmailAndPassword(auth, email, password)
        } catch (err) {
            console.log(err)
        }
    }
    return null
}

export const createUserWithEmailAndPasswordFunc = async (email, password, displayName) => {
    if (email !== undefined && password !== undefined && displayName !== undefined) {
        try {
            return await createUserWithEmailAndPassword(auth, email, password)
        } catch (err) {
            console.log(err)
        }
    }
    return null
}

export const signoutFunc = async () => await signOut(auth)

export const onAuthStateChangedFunc = async (callback) => onAuthStateChanged(auth, callback)

export const createUserDetailsDoc = async (userAuth) => {
    const createUserDocument = doc(db, "users", userAuth.uid);
    const getUserDetails = await getDoc(createUserDocument);

    if (!getUserDetails.exists()) {
        const { email, displayName } = userAuth;
        const date = new Date();
        const favCities = []

        try {
            await setDoc(createUserDocument, {
                displayName,
                email,
                date,
                favCities
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const getDocFunc = async (userAuth, additionalProps = {}) => {
    const createUserDocument = doc(db, 'users', userAuth.uid);

    try {
        const docSnapshot = await getDoc(createUserDocument);
        if (docSnapshot.exists()) {
            return { id: docSnapshot.id, ...docSnapshot.data() };
        } else {
            return null;
        }
    } catch (error) {
        console.error('Error getting document:', error.message);
        throw new Error('Failed to get user document');
    }
};