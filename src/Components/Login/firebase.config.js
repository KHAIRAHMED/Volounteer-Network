import {initializeApp}  from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAT6TQFc5nlIbw6CHOCnt6ZmFRg1Im2dws",
    authDomain: "volounter-network.firebaseapp.com",
    projectId: "volounter-network",
    storageBucket: "volounter-network.appspot.com",
    messagingSenderId: "831369394148",
    appId: "1:831369394148:web:1349578b925ef983ecf9f1"
  };
   const app = initializeApp(firebaseConfig)

 export const auth = getAuth(app) 
//  project-831369394148