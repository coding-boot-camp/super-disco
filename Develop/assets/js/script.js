
// displays current date at top of calender

var currentDay = document.querySelector("#currentDay");

currentTime = moment();

currentDay.textContent = currentTime.format("dddd, MMMM Do, YYYY - hh: mm");

// select all time blocks, which will also give us acces to the children 

var timeBlocks = Array.from(document.querySelectorAll(".time-block"));

var textareaArray = Array.from(document.querySelectorAll(".textarea"));

var currentHour = moment().hour();

 var tasks = [];

 var hourUpdater = function(){
    
  
};

hourUpdater();


//Declare a 'tasks' variable that holds the parsed task items retrieved from 'localStorage'
// If there is nothing in 'localStorage', set the 'tasks' to an empty array

var loadTasks = function() {

};

loadTasks();
//  when the user clicks the save icon tasks are saved to local storage  

$(".saveBtn").on("click", function() {

     

});

