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


function addRoom()
{
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });
  localStorage.setItem("room_name",room_name);
  window.location = "chat_room.html";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
 console.log("Room_names-"+Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
 document.getElementById("output").innerHTML+=row;
 //End code
 });});}}
getData();


function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location = "chat_room.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

