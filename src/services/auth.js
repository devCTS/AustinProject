import { navigate } from "gatsby";
import "isomorphic-fetch";
import axios from "axios";
import Cookies from "universal-cookie";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../services/firebase.config";

const cookies = new Cookies();

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const googleProvider = new firebase.auth.GoogleAuthProvider();
// const facebookProvider = new firebase.auth.FacebookAuthProvider();

export const setUser = (user) =>
  window.localStorage.setItem("gatsbyUser", JSON.stringify(user));

export const handleGoogleSignIn = () => {
  firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then((result) => {
      const credential = result.credential;
      const token = credential.accessToken;
      const user = result.user;
      setUser(user);
      navigate("/staging");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
    });
};

export const handleDiscordSignIn = async (code) => {
  try {
    // getting access token from discord
    const data = new URLSearchParams({
      client_id: process.env.DISCORD_CLIENT_ID,
      client_secret: process.env.DISCORD_CLIENT_SECRET,
      grant_type: "authorization_code",
      code: code.toString(),
      redirect_uri: process.env.DISCORD_REDIRECT_URI,
    });
    const response = await axios.post(
      `${process.env.DISCORD_API_URL}/oauth2/token`,
      data.toString(),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    cookies.set("discord_access_token", response?.data?.access_token, {
      path: "/",
      maxAge: response?.data?.expires_in,
    });
    localStorage.setItem(
      "discord_refresh_token",
      JSON.stringify(response?.data?.refresh_token)
    );

    // getting user data from discord
    const userDetails = await axios.get(
      `${process.env.DISCORD_API_URL}/users/@me`,
      {
        headers: {
          Authorization: `Bearer ${cookies.get("discord_access_token")}`,
        },
      }
    );
    setUser(userDetails?.data);
    navigate("/staging");
  } catch (error) {
    console.log("Error: ", error);
  }
};

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
  return !!user.status | !!user.email;
};

export const logout = (callback) => {
  setUser({});
  navigate("/signin");
  cookies.remove("discord_access_token", { path: "/" });
  // callback();
};

export const validateEmail = (email) => {
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return emailReg.test(email);
};
