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

var clickcounter = 0;

$('#test').on('click', function(){
  clickcounter++;
  database.ref().set({ clickcounter});
});