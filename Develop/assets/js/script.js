
// get the current day and display it on the top of the calendar

var currentDay = document.querySelector("#currentDay");

currentTime = moment();

currentDay.textContent = currentTime.format("dddd, MMMM Do, YYYY, hh: mm");

// select all time blocks, which will also give us acces to the children 

var timeBlocks = Array.from(document.querySelectorAll(".time-block"))

var textareaArray = Array.from(document.querySelectorAll(".textarea"));

var currentHour = moment().hour();

 var tasks = [loadTasks];





   