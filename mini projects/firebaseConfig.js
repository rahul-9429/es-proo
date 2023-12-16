import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyB0LvKUgugXh3BwqjVrREcwlGgEplSemRU",
authDomain: "es-project-7d0c1.firebaseapp.com",
databaseURL: "https://es-project-7d0c1-default-rtdb.firebaseio.com",
projectId: "es-project-7d0c1",
storageBucket: "es-project-7d0c1.appspot.com",
messagingSenderId: "790953467909",
appId: "1:790953467909:web:3585a505f6f442e455fc6c",
measurementId: "G-WQEDPJVKC9"
};

const app = initializeApp(firebaseConfig);
export default app;