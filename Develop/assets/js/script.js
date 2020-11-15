
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
    
    // loop over each one timeBlock 

    for (var i = 0; i < timeBlocks.length; i++){
        // select the hour id and loop through 
        var timeBlockId =timeBlocks[i].firstElementChild.id;

   //  loop through the time block id and get the string value of hour (get rid of "hour-" by replacing with an empty string)

   var timeBlockHour = timeBlockId.replace("hour-", '')

   // convert to mility time by adding + 12  when needed and then turn timeBlockHours into integer values  
   if (timeBlockHour < currentHour) {

       timeBlockHour = parseInt(timeBlockHour) + 12

       var presentTimeBlock = document.getElementById(JSON.stringify(timeBlockHour));

       $(presentTimeBlock).addClass("past");
   }

   else {
       timeBlockHour = parseInt(timeBlockHour)
   }

   if (timeBlockHour === parseInt(currentHour)){
       // addClass "present" to corresponding text area

       var presentTimeBlock = document.getElementById(JSON.stringify(timeBlockHour));
       
       $(presentTimeBlock).addClass("present");
   }
   else if (timeBlockHour > currentHour) {
   
       // addClass "future" to corresponding text area 

       var presentTimeBlock = document.getElementById(JSON.stringify(timeBlockHour));
       
       $(presentTimeBlock).addClass("future");
   }
}
};

hourUpdater();


//Declare a 'tasks' variable that holds the parsed task items retrieved from 'localStorage'
// If there is nothing in 'localStorage', set the 'tasks' to an empty array

var loadTasks = function() {

tasks = localStorage.getItem('tasks')

if(tasks === null) {
   tasks = [];
}
else{
    tasks = JSON.parse(tasks);
}

// loop through tasks array and render items in local storage to the textarea

for (var i = 0; i < tasks.length; i++){

// grab the textareaArray loop through textarea array and set the text equal to tasks [i]    
$(textareaArray[i]).text(tasks[i]);

}

};

loadTasks();
//  when the user clicks the save icon tasks are saved to local storage  

$(".saveBtn").on("click", function() {

   var userInput = $(this).siblings(".textarea").val()

   tasks.push(userInput);

   localStorage.setItem('tasks', JSON.stringify(tasks))    

});

