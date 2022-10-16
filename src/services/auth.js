import { navigate } from "gatsby";
import "isomorphic-fetch";
// import NextAuth from "next-auth"
// import AppleProvider from "next-auth/providers/apple"
// import GoogleProvider from "next-auth/providers/google"
// import EmailProvider from "next-auth/providers/email"
// import Discord from "next-auth/providers/discord"


// export default NextAuth({
//   secret: process.env.SECRET,
//   providers: [
//     // OAuth authentication providers
//     // AppleProvider({
//     //   clientId: process.env.APPLE_ID,
//     //   clientSecret: process.env.APPLE_SECRET,
//     // }),
//     // GoogleProvider({
//     //   clientId: process.env.GOOGLE_ID,
//     //   clientSecret: process.env.GOOGLE_SECRET,
//     // }),
//     // DiscordProvider({
//     //   clientId: process.env.DISCORD_ID,
//     //   clientSecret: process.env.DISCORD_SECRET,
//     // }),
//     // // Sign in with passwordless email link
//     // EmailProvider({
//     //   server: process.env.MAIL_SERVER,
//     //   from: "<no-reply@example.com>",
//     // }),
//   ],
// })


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