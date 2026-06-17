// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyAtdZiJvZrfKlvr_vbBQpvW-G_-WODA8A4",
    authDomain: "wc2026-dev-3c9d9.firebaseapp.com",
    projectId: "wc2026-dev-3c9d9",
    storageBucket: "wc2026-dev-3c9d9.firebasestorage.app",
    messagingSenderId: "84899128450",
    appId: "1:84899128450:web:f5947a9805a3551abf409b",
    measurementId: "G-5YTPX7Z6HC"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// **** Instance Identifyer ****
const GAME_ID = "WC2026_DEV";
