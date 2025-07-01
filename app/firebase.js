// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiueW0pDv0szqnnO0IUUm2OPY5lfjTl-k",
  authDomain: "unicampus-fb482.firebaseapp.com",
  projectId: "unicampus-fb482",
  storageBucket: "unicampus-fb482.firebasestorage.app",
  messagingSenderId: "957984947371",
  appId: "1:957984947371:web:491f3db77a1cacdb2f4bee",
  measurementId: "G-3ZW1P5MC2R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Analytics'i sadece desteklenen ortamda başlat
// if (await isSupported()) {
//   const analytics = getAnalytics(app);
// }

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const db = getFirestore(app);