import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBet4P_CEpnM2EGp_YxXpZP3F-3d-zNNsE",
    authDomain: "tech-and-gaming-event-63071.firebaseapp.com",
    projectId: "tech-and-gaming-event-63071",
    storageBucket: "tech-and-gaming-event-63071.appspot.com",
    messagingSenderId: "460616105625",
    appId: "1:460616105625:web:a1680352b403d75f690208"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth