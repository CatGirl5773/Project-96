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

function addUser() {
    username = document.getElementById("user_name").value;
    firebase.database().ref("/").child(username).update({
        purpose: "adding user"
    });

    localStorage.setItem("username", username);
    
    window.location = "kwitter_room.html";
}