var firebaseConfig = {
    apiKey: "AIzaSyChQ8hREP3jUphTY9HO7Xf1zamB921OQD0",
    authDomain: "letschatwebapp-92d65.firebaseapp.com",
    projectId: "letschatwebapp-92d65",
    storageBucket: "letschatwebapp-92d65.appspot.com",
    messagingSenderId: "228187314004",
    appId: "1:228187314004:web:94b7b2be14e8b948af9ac1"
  };

   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   //ADD YOUR FIREBASE LINKS HERE
   
   user_name=localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";
   
   function addRoom() {
        room_name=document.getElementById("room_name").value;
   
        firebase.database().ref("/").child(room_name).update({
         purpose:"adding room name"
        });
   
         localStorage.setItem("room_name", room_name);
   
         window.location="kwitter_page.html";
   
        
   }
   function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
        console.log("room_name - "+Room_names);
        row="<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
        document.getElementById("output").innerHTML +=row;
   //End code
   });});}
getData();
function redirectToroomname(name) {
    console.log(name);
    localStorage.setItem("roomname", name);
    window.location("index.html");
}