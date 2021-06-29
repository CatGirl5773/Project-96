var firebaseConfig = {
    apiKey: "AIzaSyASGrzr5ZzikXAekW4KGoasHJbs6GnPVeg",
    authDomain: "lets-chat-d53b3.firebaseapp.com",
    databaseURL: "https://lets-chat-d53b3-default-rtdb.firebaseio.com",
    projectId: "lets-chat-d53b3",
    storageBucket: "lets-chat-d53b3.appspot.com",
    messagingSenderId: "811384374549",
    appId: "1:811384374549:web:f374a971090a0937fd951c"
  };

  firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("username");
document.getElementById("username").innerHTML = "Welcome, " + username + "!";

function addRoom() {
    roomname = document.getElementById("roomname").value;
    firebase.database().ref("/").child(roomname).update({
        purpose: "adding room name"
    });
    localStorage.setItem("roomname", roomname);
    window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =    childSnapshot.key;
    Room_names = childKey;
    console.log("Room names: " + Room_names)
    row = "<div class='roomname' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
    document.getElementById("output").innerHTML += row;
});});}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("roomname", name);
    window.location = "kwitter_page.html";
}

function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("roomname");
    window.location = "index.html";
}