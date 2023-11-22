import process from '../env';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);

export const studentsRef = collection(db, 'students');
