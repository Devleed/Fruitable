import * as firebase from "firebase/app";

var firebaseConfig = {
  apiKey: "AIzaSyAiCXn57Gs1jix6gZEAEQajqsS271GP-OE",
  authDomain: "fruitable-a8d91.firebaseapp.com",
  databaseURL: "https://fruitable-a8d91.firebaseio.com",
  projectId: "fruitable-a8d91",
  storageBucket: "fruitable-a8d91.appspot.com",
  messagingSenderId: "127545369011",
  appId: "1:127545369011:web:0e59e17d50ca019933ebc6"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
