import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-analytics.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";

var currentPath = window.location.href.replace("index.html", "");

function sign_post() {
    
    const firebaseConfig = {
        apiKey: "AIzaSyBKopaV6A9xnhu0IYxgidd8XMmZiKb0CVc",
        authDomain: "massive-jet-371518.firebaseapp.com",
        projectId: "massive-jet-371518",
        storageBucket: "massive-jet-371518.appspot.com",
        messagingSenderId: "1008582599309",
        appId: "1:1008582599309:web:3c8a84cd1145951773f8c4",
        measurementId: "G-FXW6KBNX2H"
    };
            
    const app = initializeApp(firebaseConfig);
    // const analytics = getAnalytics(app);    

    var name = document.getElementById('name').value;
    var password = document.getElementById('password').value;

    signInWithEmailAndPassword(app.auth(), name, password)
    .then(function(userCredential) {
        alert("Giriş başarılı");
        window.location.href = currentPath + "public/panel.html";
    })
    .catch(function(error) {
        alert("İsim ya da şifre yanlış");
    });
}


// alert(currentPath);