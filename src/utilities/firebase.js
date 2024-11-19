import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQ8jou2G5sbZJkixID8zAojxUhqrLeXCo",
  authDomain: "cs392-react-tutorial-f1c54.firebaseapp.com",
  databaseURL: "https://cs392-react-tutorial-f1c54-default-rtdb.firebaseio.com",
  projectId: "cs392-react-tutorial-f1c54",
  storageBucket: "cs392-react-tutorial-f1c54.firebasestorage.app",
  messagingSenderId: "283241257120",
  appId: "1:283241257120:web:e48cf12d0a5102c90dd1c5"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };