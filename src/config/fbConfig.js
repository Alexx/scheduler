import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBdpUpSD8sDX7Wlj3Vrq90LkaH2ZaNi2IY",
  authDomain: "scheduler-503.firebaseapp.com",
  databaseURL: "https://scheduler-503.firebaseio.com",
  projectId: "scheduler-503",
  storageBucket: "",
  messagingSenderId: "1034932171590",
  appId: "1:1034932171590:web:b2da8a302c6f0affe1eb47",
  measurementId: "G-4B0KL72Y66"
};
firebase.initializeApp(firebaseConfig);

export default firebase;
