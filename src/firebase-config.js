import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDKtDyQXKkpuDbpMfRdafU6oNhTibxS0MI",
    authDomain: "shahhassan-f5e39.firebaseapp.com",
    databaseURL: "https://shahhassan-f5e39-default-rtdb.firebaseio.com",
    projectId: "shahhassan-f5e39",
    storageBucket: "shahhassan-f5e39.appspot.com",
    messagingSenderId: "576418885595",
    appId: "1:576418885595:web:1119d6413ce9844b1e41fe",
    measurementId: "G-EDM8Q2V3VT"
  };

  const app = initializeApp(firebaseConfig);

   export const db = getFirestore(app);