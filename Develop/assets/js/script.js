// get the current day and display it on the top of the calendar

var currentDay = document.querySelector("#currentDay");
currentTime = moment();
currentDay.textContent = currentTime.format("dddd, MMMM Do - hh:mm");
// select all time blocks, which will also give us acces to the children 

var timeBlocks = Array.from(document.querySelectorAll(".time-block"))
var textareaArray = Array.from(document.querySelectorAll(".textarea"));
var currentHour = moment().hour();

var tasks = {9: '', 10: '', 11: '', 12: '', 1: '', 2: '', 3: '', 4: '', 5: ''};

var hourUpdater = function(){
    
    // loop over each one timeBlock 

    for (var i = 0; i < timeBlocks.length; i++){


        // select the hour id and loop through 
        var timeBlockId =timeBlocks[i].firstElementChild.id;

        //  loop through the time block id and get the string value of hour (get rid of "hour-" by replacing with an empty string)

        var timeBlockHour = timeBlockId.replace("hour-", '')

        // convert to mility time by adding + 12  when needed and then turn timeBlockHours into integer values  
        if (timeBlockHour < 9) {

            timeBlockHour = parseInt(timeBlockHour) + 12 
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

            var presentTimeBlock = document.getElementById(JSON.stringify(timeBlockHour));
            
            $(presentTimeBlock).addClass("future");

        }
    }
};

hourUpdater();

 //Declare a 'tasks' variable that holds the parsed task items retrieved from 'localStorage'

var loadTasks = function() {

 var tasksFromStorage = localStorage.getItem('tasks')
    
    if(tasksFromStorage === null) {
        return;
    }
    else{
         tasks = JSON.parse(tasksFromStorage);
    }
       
     $(textareaArray[0]).text(tasks[9]);
     $(textareaArray[1]).text(tasks[10]);
     $(textareaArray[2]).text(tasks[11]);
     $(textareaArray[3]).text(tasks[12]);
     $(textareaArray[4]).text(tasks[1]);
     $(textareaArray[5]).text(tasks[2]);
     $(textareaArray[6]).text(tasks[3]);
     $(textareaArray[7]).text(tasks[4]);
     $(textareaArray[8]).text(tasks[5]);

};

loadTasks();

//  when the user clicks the save icon tasks are saved to local storage  

    $(".saveBtn").on("click", function() {

        var userInput = $(this).siblings(".textarea").val()
        var time = $(this).siblings(".textarea").attr('id')
        
        tasks[time]= userInput

        localStorage.setItem('tasks', JSON.stringify(tasks))    

    });
