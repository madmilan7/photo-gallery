import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

export const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAp9DYfScFzEPeBvROWmIwF5AmbpkIqc64",
    authDomain: "photo-gallery-d906a.firebaseapp.com",
    projectId: "photo-gallery-d906a",
    storageBucket: "photo-gallery-d906a.appspot.com",
    messagingSenderId: "641280019606",
    appId: "1:641280019606:web:ad5291d81a4c8d047c06b7"
});

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };