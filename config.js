import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAgPxdR1XMCcz1RK4zi2ojVXkZau_0AQFI",
  authDomain: "booksanta-44831.firebaseapp.com",
  projectId: "booksanta-44831",
  storageBucket: "booksanta-44831.appspot.com",
  messagingSenderId: "554346094244",
  appId: "1:554346094244:web:4b2ee7f4d028bf31519031"
};
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
