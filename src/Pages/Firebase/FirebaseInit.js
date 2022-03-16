import { initializeApp } from "firebase/app";
import FirebaseConfig from "./FirebaseConfig";


const initializationAuth = () => {
    initializeApp(FirebaseConfig);
}

export default initializationAuth;