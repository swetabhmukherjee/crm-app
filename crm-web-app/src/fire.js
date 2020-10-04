import firebase from 'firebase';

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAJHMCxE7A1hl4BNnAtam4YtUXPTKYr3Lg",
    authDomain: "crm-login-fe97d.firebaseapp.com",
    databaseURL: "https://crm-login-fe97d.firebaseio.com",
    projectId: "crm-login-fe97d",
    storageBucket: "crm-login-fe97d.appspot.com",
    messagingSenderId: "635645969605",
    appId: "1:635645969605:web:ca100e049e22f318019cac",
    measurementId: "G-93JXRERQMH"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default fire;