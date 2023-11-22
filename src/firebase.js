import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {

  apiKey: "AIzaSyBXbIErXzSIXbVw-on5PXU1i9GfJO9h49k",
  authDomain: "egzaminas-f23eb.firebaseapp.com",
  databaseURL: "https://egzaminas-f23eb-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "egzaminas-f23eb",
  storageBucket: "egzaminas-f23eb.appspot.com",
  messagingSenderId: "1088776563885",
  appId: "1:1088776563885:web:699bf37933a9d992fe2a24",
  measurementId: "G-B0E2C5Z5LF"

};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);