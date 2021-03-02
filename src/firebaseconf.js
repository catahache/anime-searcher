import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCq2W52OZy8s5rfN_1KldTkJek8fdFTYTE",
    authDomain: "anime-app-95383.firebaseapp.com",
    projectId: "anime-app-95383",
    storageBucket: "anime-app-95383.appspot.com",
    messagingSenderId: "24296786917",
    appId: "1:24296786917:web:3474364f186efd50a17d0c",
    measurementId: "G-RCFK5EMSTQ",
};
// Initialize Firebase
const fireb = firebase.initializeApp(firebaseConfig);
const store = fireb.firestore(); // servicio de firestore
const auth = fireb.auth(); // el servicio de autenticacion

export { store, auth };
