import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import dotenv from 'dotenv';
// dotenv.config();

const firebaseConfig = {
    apiKey: "AIzaSyDUFna-6b-B7aP2aRdNW56GlUMHJnhoWl0",
    authDomain: "bit-canteen.firebaseapp.com",
    databaseURL: "https://bit-canteen-default-rtdb.firebaseio.com",
    projectId: "bit-canteen",
    storageBucket: "bit-canteen.appspot.com",
    messagingSenderId: "119692725179",
    appId: "1:119692725179:web:3e05019e52ed8cc909929e",
    measurementId: "G-7X5HW7N0ZY"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };