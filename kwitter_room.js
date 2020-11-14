
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBwuhPacP_3kNDZJ5jz96AidwmCN73-34s",
      authDomain: "classtest-9c701.firebaseapp.com",
      databaseURL: "https://classtest-9c701.firebaseio.com",
      projectId: "classtest-9c701",
      storageBucket: "classtest-9c701.appspot.com",
      messagingSenderId: "203726422473",
      appId: "1:203726422473:web:84e854543f681572a52818"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";

    function addRoom()
    {
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
       purpose : "adding room name"
       });

       localStorage.setItem("room_name",room_name);
       window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names); 
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;


      //End code
      });
      });
      }
getData();

function redirectToRoomName(name) {
 console.log(name); 
 localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
   window.location="index.html"
}
