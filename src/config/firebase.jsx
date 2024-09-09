
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB2hvQcXDm45lwNTRbl5gMPxhFsOuvEmL4",
    authDomain: "xtreme-mma.firebaseapp.com",
    projectId: "xtreme-mma",
    storageBucket: "xtreme-mma.appspot.com",
    messagingSenderId: "1059578108067",
    appId: "1:1059578108067:web:7d9e8d45535c659c028716",
    measurementId: "G-3MYDVTQ0H2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { analytics, auth, firestore, storage }