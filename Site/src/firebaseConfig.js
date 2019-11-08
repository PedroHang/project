import firebase from 'firebase';
let firebaseConfig = {
    apiKey: "AIzaSyAxfgGK7JYlwi8GDBoYzTdK2Xr8C8O8Sbo",
    authDomain: "projetopl2.firebaseapp.com",
    databaseURL: "https://projetopl2.firebaseio.com",
    projectId: "projetopl2",
    storageBucket: "",
    messagingSenderId: "539943622618",
    appId: "1:539943622618:web:afe24105b98c7c4f"
};
let app = firebase.initializeApp(firebaseConfig);
export default app;