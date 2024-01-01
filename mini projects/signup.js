import app from "../firebaseConfig.js"
import { getDatabase , set , ref} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const database = getDatabase(app);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
    if (user) {
        window.location.href = `index.html`;
    } else {
        console.log("Sign up to continue");
    }
});

signup.addEventListener('click', (e) => {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
  // Signed up 
  const user = userCredential.user;
  set(ref(database , 'users/'+user.uid),{
    email:  email
  })
  document.getElementById('status').innerHTML ="User signed up";
  // alert('');
  // ...
  window.location.href = `index.html`;
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  // alert('Error: ' + errorMessage);
  document.getElementById('status').innerHTML ="ERROE:"+errorMessage;
  // ..
});
});
