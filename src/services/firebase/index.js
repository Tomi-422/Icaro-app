import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAK0KqiwCBA1m__JTKrIZ4mAz775xPqU0w",
  authDomain: "icaroapp-5458e.firebaseapp.com",
  projectId: "icaroapp-5458e",
  storageBucket: "icaroapp-5458e.appspot.com",
  messagingSenderId: "1032166500760",
  appId: "1:1032166500760:web:a6961d3c80ef450bec23ed"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app) 