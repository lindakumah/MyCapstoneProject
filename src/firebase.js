import firebase from 'firebase/app';
import "firebase/auth";

// Your web app's Firebase configuration

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  var firebaseConfig = {

    apiKey: "AIzaSyAONv8mZlSvF5Z2cukCEEyz8-8gfj0hlmY",

    authDomain: "project1-6d1bf.firebaseapp.com",

    projectId: "project1-6d1bf",

    storageBucket: "project1-6d1bf.appspot.com",

    messagingSenderId: "787283149224",

    appId: "1:787283149224:web:e6ad7a7b80272700de9d9d",

    measurementId: "G-J8939YN978"

  };

  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  

