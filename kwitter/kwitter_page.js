var firebaseConfig = {
      apiKey: "AIzaSyDBO6csCyHh7Pmp8smVHknnzN2OIJKenqw",
      authDomain: "kwitterproject-d775c.firebaseapp.com",
      databaseURL: "https://kwitterproject-d775c-default-rtdb.firebaseio.com",
      projectId: "kwitterproject-d775c",
      storageBucket: "kwitterproject-d775c.appspot.com",
      messagingSenderId: "575648040739",
      appId: "1:575648040739:web:23fcd3e2a21db756e3ee96"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
   msg = document.getElementById("msg").value;
   
   firebase.database().ref(room_name).push({
         name:user_name,
         message:msg,
         like:0

   });
}

function logout()
{
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
   window.location = "index.html";

}
