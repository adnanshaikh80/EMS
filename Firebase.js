
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyCx2AMEeTkvrMro5w3nht90ekB9HtQCrAY",
  authDomain: "enquiry-management-syste-296f7.firebaseapp.com",
  databaseURL: "https://enquiry-management-syste-296f7-default-rtdb.firebaseio.com",
  projectId: "enquiry-management-syste-296f7",
  storageBucket: "enquiry-management-syste-296f7.appspot.com",
  messagingSenderId: "866386199739",
  appId: "1:866386199739:web:b235e33752b0c6bb80959e"
};


const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export default db;