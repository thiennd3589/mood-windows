import firebase from 'firebase/app';

import 'firebase/firestore';

const config = {
    apiKey: "{Your ID}",
    authDomain: "mood-windows.firebaseapp.com",
    databaseURL: "https://mood-windows.firebaseio.com",
    projectId: "mood-windows",
    storageBucket: "mood-windows.appspot.com",
    messagingSenderId: "{...}",
    appId: "{...}",
    measurementId: "{...}"
}

firebase.initializeApp(config);

export const firestore = firebase.firestore();

