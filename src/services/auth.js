import { navigate } from "gatsby";
import "isomorphic-fetch";

//const SERVER = ``;

// Detect if the app is running in a browser.
export const isBrowser = () => typeof window !== "undefined";

// Get user data from localstorage
export const getUser = () =>
  isBrowser() && window.localStorage.getItem("gatsbyUser")
    ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
    : {};

// Save user data to localstorage
export const setUser = user =>
  window.localStorage.setItem("gatsbyUser", JSON.stringify(user));

// Return true if user is logged in. Otherwise false.
export const isLoggedIn = () => {
  const user = getUser();

  return !!user.status;
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