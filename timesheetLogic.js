// Steps to complete:


var config = {
    apiKey: "AIzaSyA6-pBWvjvApxxrxAj-eoBKgPm1Xu6B-N0",
    authDomain: "denver-18010.firebaseapp.com",
    databaseURL: "https://denver-18010.firebaseio.com",
    projectId: "denver-18010",
    storageBucket: "denver-18010.appspot.com",
    messagingSenderId: "767666019347"
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
  
  