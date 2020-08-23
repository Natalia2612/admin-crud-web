import firebase from 'firebase/app';
import 'firebase/firestore' 
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCp_ZTgVdtarJdwaLzdhcCn8n6sLC5u6Y0",
    authDomain: "admin-crud-web.firebaseapp.com",
    databaseURL: "https://admin-crud-web.firebaseio.com",
    projectId: "admin-crud-web",
    storageBucket: "admin-crud-web.appspot.com",
    messagingSenderId: "481535330512",
    appId: "1:481535330512:web:53f1193d3e6b1fefadf6d5"
  };
  // Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();