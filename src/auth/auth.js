import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmoeWEj353lfGCsC0ilOLJsxum7_ELEMg",
  authDomain: "github-find-user.firebaseapp.com",
  projectId: "github-find-user",
  storageBucket: "github-find-user.appspot.com",
  messagingSenderId: "569501560094",
  appId: "1:569501560094:web:e2d50913ff1071a2aead0f"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;