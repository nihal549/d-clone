import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyA0bp-cOn3MYTgIz5fEha4bjuYIyp8iZJM",
    authDomain: "disneyplus-clone-d0850.firebaseapp.com",
    projectId: "disneyplus-clone-d0850",
    storageBucket: "disneyplus-clone-d0850.appspot.com",
    messagingSenderId: "671337506391",
    appId: "1:671337506391:web:d7d06c306db7b385abe512",
    measurementId: "G-0EBC6SKVC7"
  };
  // Initialize Firebase
 const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore()
  const auth = firebase.auth()
  const provider= new firebase.auth.GoogleAuthProvider()
  const storage = firebase.storage()
  
  export{auth,provider,storage}
  export default db