import *  as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBR7EUkzY3vMihO9gjeBK62KYHM6Qyb2So",
    authDomain: "confab-nextapp.firebaseapp.com",
    databaseURL: "https://confab-nextapp-default-rtdb.firebaseio.com",
    projectId: "confab-nextapp",
    storageBucket: "confab-nextapp.appspot.com",
    messagingSenderId: "319147915322",
    appId: "1:319147915322:web:cd99715b8a22a5ee029d03",
    measurementId: "G-GYEFBSFXHQ"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); // if already initialized, use that one
 }
export default firebase;
