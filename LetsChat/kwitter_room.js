var firebaseConfig = {
      apiKey: "AIzaSyC9s-6VS9w54M0NFzsSpRrxKnS8xziqXr8",
      authDomain: "kwitter-e2b11.firebaseapp.com",
      databaseURL: "https://kwitter-e2b11-default-rtdb.firebaseio.com",
      projectId: "kwitter-e2b11",
      storageBucket: "kwitter-e2b11.appspot.com",
      messagingSenderId: "595362035762",
      appId: "1:595362035762:web:1e065d1b2308559804642b"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";
    function addroom(){
          room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";

    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("roomname-"+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'># "+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirect(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";

}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";

}
