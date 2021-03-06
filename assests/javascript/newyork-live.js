var config = {
    apiKey: "AIzaSyCwB3xQ8Jpz0EMRxo-TAqpWB24OXD5B5gY",
    authDomain: "newyork-live.firebaseapp.com",
    databaseURL: "https://newyork-live.firebaseio.com",
    projectId: "newyork-live",
    storageBucket: "newyork-live.appspot.com",
    messagingSenderId: "337287353903"
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
     
    $("<div class='pad has-text-danger has-text-weight-bold is-size-6'>").text(empName),
    $("<div class='pad'>").text(empRole),
    $("<div>").append("<hr>")
    
  );

  // Append the new row to the table
  $("#employee-table > tbody").append(newRow);
});
