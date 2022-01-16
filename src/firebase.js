import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCNnYCR-lvYXAcIllGFtkQx2vDU26OAWCE",
    authDomain: "ceylonchatapp.firebaseapp.com",
    projectId: "ceylonchatapp",
    storageBucket: "ceylonchatapp.appspot.com",
    messagingSenderId: "19213972288",
    appId: "1:19213972288:web:c35151bc82082927dac0a5",
    measurementId: "G-XDCJ1PH505"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};