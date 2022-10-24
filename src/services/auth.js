import { navigate } from "gatsby";
import "isomorphic-fetch";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../services/firebase.config';

console.log("!!!!!!!!!!!!!234", firebaseConfig);

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const googleProvider = new firebase.auth.GoogleAuthProvider();
// const facebookProvider = new firebase.auth.FacebookAuthProvider();

export const setUser = user =>
  window.localStorage.setItem("gatsbyUser", JSON.stringify(user));

export const handleGoogleSignIn = () => {
  console.log("Here you came");
  firebase.auth()
    .signInWithPopup(googleProvider)
    .then((result) => {
      const credential = result.credential;
      const token = credential.accessToken;
      const user = result.user;
      console.log(token, user);
      setUser(user);
      console.log("!!!!!!!!!", window.localStorage.getItem("gatsbyUser"));
      navigate("/staging");

    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
      console.log(errorCode, errorMessage, email, credential)
    });
}




//const SERVER = ``;

// Detect if the app is running in a browser.
export const isBrowser = () => typeof window !== "undefined";

// Get user data from localstorage
export const getUser = () =>
  isBrowser() && window.localStorage.getItem("gatsbyUser")
    ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
    : {};

// Save user data to localstorage


// Return true if user is logged in. Otherwise false.
export const isLoggedIn = () => {
  const user = getUser();
  console.log("Dammn", (!!user.status | !!user.email));
  return (!!user.status | !!user.email);
};

export const logout = callback => {
  setUser({});
  navigate('/signin');
  // callback();
};

export const validateEmail = email => {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test( email );
}