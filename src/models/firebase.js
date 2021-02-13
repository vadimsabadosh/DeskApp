import firebase from "firebase/app";

import 'firebase/analytics';
// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional


export const init = () => {
    var firebaseConfig = {
        apiKey: "AIzaSyBexNnElMx6uIs1WPGK0ljnUPNBNH4s74k",
        authDomain: "deskapp-3e13d.firebaseapp.com",
        databaseURL: "https://deskapp-3e13d.firebaseio.com",
        projectId: "deskapp-3e13d",
        storageBucket: "deskapp-3e13d.appspot.com",
        messagingSenderId: "762884887001",
        appId: "1:762884887001:web:a8cbedeea42a097ccc49c8",
        measurementId: "G-BKFCBB4WJQ"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();
}