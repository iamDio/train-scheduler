  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC5x_AlcmMJO-E9a2O6HCCaTaDWhZOgZq4",
    authDomain: "train-scheduler-9e284.firebaseapp.com",
    databaseURL: "https://train-scheduler-9e284.firebaseio.com",
    projectId: "train-scheduler-9e284",
    storageBucket: "train-scheduler-9e284.appspot.com",
    messagingSenderId: "488098087514"
  };
  firebase.initializeApp(config);

var database = firebase.database();

//var clickcounter = 0;

$('form').on('click', function(e){
   e.preventDefault();

var destination  = $('#destination').val().trim();
var trainName = $('#train-name').val().trim();
var firstTime = moment($('#first-time').val().trim(), "HHmm").format('X');
var frequency = $('#frequency').val().trim();
 
  /*clickcounter++;
  database.ref().set({clickcounter});*/


//create a local object to store inputted values
  var newTrain = {
  destination: destination,
  train: trainName,
  first: firstTime,
  frequency: frequency
};

//push inputted values to database
database.ref().push(newTrain);

//log values to make sure they're working
console.log(newTrain.destination);
console.log(newTrain.train);
console.log(newTrain.first);
console.log(newTrain.frequency);
});

database.ref().on("child_added", function(childSnapshot, preChildKey){
  console.log(childSnapshot.val());

})