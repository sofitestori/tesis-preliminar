  import firebase from "firebase";
  import "firebase/firestore";
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAxA9BGS1QpAuReVLVKgHsCMpC5TFcyOvQ",
    authDomain: "check-app-899a7.firebaseapp.com",
    projectId: "check-app-899a7",
    storageBucket: "check-app-899a7.appspot.com",
    messagingSenderId: "517183760800",
    appId: "1:517183760800:web:0c9cf824a9976c3f025cc5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const db = firebase.firestore();
  
  export default {
    firebase,
    db
  };
  
