var firebaseConfig = {
    apiKey: "AIzaSyCbyzqb-iZYu6T3Ct_KB4xgq5a12hZGhkM",
    authDomain: "kendriya-vidyalaya-hamirpur.firebaseapp.com",
    databaseURL: "https://kendriya-vidyalaya-hamirpur-default-rtdb.firebaseio.com",
    projectId: "kendriya-vidyalaya-hamirpur",
    storageBucket: "kendriya-vidyalaya-hamirpur.appspot.com",
    messagingSenderId: "29652148581",
    appId: "1:29652148581:web:6bd64c5327baed6aed018c"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name",user_name);
document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!";

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();

function logout()
{
 localStorage.removeItem("user_name");
 localStorage.removeItem("room_name");
 window.location = "index.html";
}