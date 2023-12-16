import app from "./firebaseConfig.js";
import { getDatabase , set , ref , update} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { getAuth, signInWithEmailAndPassword ,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const database = getDatabase(app);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
    if (user) {
        window.location.href = `index.html`;
    } else {
        console.log("Sign in to continue");
    }
});
 
signin.addEventListener('click',(e)=>{
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const d = new Date();
        const user = userCredential.user;
        update(ref(database , 'users/'+user.uid),{
            last_login:d
        })
        document.getElementById('status').innerHTML = "Signed in";
        window.location.href = `index.html`;
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        document.getElementById('status').innerHTML = errorMessage;
    });
});
const user = auth.currentUser;

