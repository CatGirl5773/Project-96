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

  var user_name = localStorage.getItem("username");
  var room_name = localStorage.getItem("roomname");

  function send() {
    var messages = document.getElementById("msgs").value;
    firebase.database().ref("/").child(messages).update({
      message: messages,
      username: user_name,
      likes: 0
    });
    document.getElementById("msgs").value = "";
  }