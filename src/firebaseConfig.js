import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvIY4paFB57ppLIdxHVbTp06R2SdkYfTM",
  authDomain: "e-commercecoder39650.firebaseapp.com",
  projectId: "e-commercecoder39650",
  storageBucket: "e-commercecoder39650.appspot.com",
  messagingSenderId: "299172060274",
  appId: "1:299172060274:web:75ff3d82307349791c76eb"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);