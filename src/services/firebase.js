import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

const config = {
  apiKey: "AIzaSyD91fqIv6-jQH1hqBfU-ka6Q1dgIjL03uo",
  authDomain: "chatty-d8a22.firebaseapp.com",
  projectId: "chatty-d8a22",
  storageBucket: "chatty-d8a22.appspot.com",
  messagingSenderId: "1079355239748",
  appId: "1:1079355239748:web:f898b946de45bf3e2abb11",
  measurementId: "G-TTY8K7SMWN"
  };
  firebase.initializeApp(config);
  
  export const auth = firebase.auth;
  export const db = firebase.database();