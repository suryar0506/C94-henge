var firebaseConfig = {
    apiKey: "AIzaSyAgWZYJF9oni69xd1oC3NEI6cddpyT1f00",
    authDomain: "practice-c94-8335b.firebaseapp.com",
    databaseURL: "https://practice-c94-8335b-default-rtdb.firebaseio.com",
    projectId: "practice-c94-8335b",
    storageBucket: "practice-c94-8335b.appspot.com",
    messagingSenderId: "557860120372",
    appId: "1:557860120372:web:ac935dfc792510de9da761"
  };
  firebase.initializeApp(firebaseConfig);
  
function addUser(){
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update ({
        purpose: "adding user"
    });
}