var config = {
    apiKey: "AIzaSyBdCViCbaXKnE-gJuQEK0IMtd7NDZuz8bQ",
    authDomain: "la-livechat.firebaseapp.com",
    databaseURL: "https://la-livechat.firebaseio.com",
    projectId: "la-livechat",
    storageBucket: "la-livechat.appspot.com",
    messagingSenderId: "589658521927"
  };


firebase.initializeApp(config);
  
var database = firebase.database();

//click event to add chat
$("#add-employee-btn").on("click", function(event) {
  event.preventDefault();

  // Grabs user input
  var empName = $("#employee-name-input").val().trim();
  var empRole = $("#role-input").val().trim();
  

  // Creates local "temporary" object for holding employee data
  var newEmp = {
    name: empName,
    role: empRole,
  };

  
  database.ref().push(newEmp);

  // Logs everything to console
  console.log(newEmp.name);
  console.log(newEmp.role);
  

  alert("Your message is now live!");

  // Clears all of the text-boxes
  $("#employee-name-input").val("");
  $("#role-input").val("");
});

// 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot) {
  console.log(childSnapshot.val());

  // Store everything into a variable.
  var empName = childSnapshot.val().name;
  var empRole = childSnapshot.val().role;


  // Employee Info
  console.log(empName);
  console.log(empRole);

  //add current time
  
  // Create the new row
  var newRow = $("<div>").append(
     
    $("<div>").text(empName),
    $("<div>").text(empRole),
    $("<div>").text("**********************************************************************"),
    
  );

  // Append the new row to the table
  $("#employee-table > tbody").append(newRow);
});
