/**
 * src/firebase.js
 */
 import firebase from "firebase/app";
 import "firebase/auth";
 
 const firebaseConfig = {
   apiKey: "AIzaSyDt3P9nD1BrVSzA99Ra8GfUjTjzY4SU2L0",
   authDomain: "fir-nodejs-server.firebaseapp.com",
   projectId: "fir-nodejs-server",
   storageBucket: "fir-nodejs-server.appspot.com",
   messagingSenderId: "430515651879",
   appId: "1:430515651879:web:86e598982c06939dcad502",
   measurementId: "G-2SS2ZL8EP4"
 };
 
 firebase.initializeApp(firebaseConfig);
 
 const auth = firebase.auth();
 
 export { auth, firebase };
 