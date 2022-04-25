var todaysDate = moment().format("MMMM Do YYYY,h:mm a");
$("#currentDay").text(todaysDate);

var scheduleObj = {};

$( document ).ready(function() {
  timeCheck();
  loadEvents();

  $(".saveBtn").click(function(event) {
    console.log("Here, clicked");
    var localStorageVariable = localStorage.getItem(time);
console.log(localStorageVariable)
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, value)
    console.log(value)
    console.log(time)
    
});

      
    console.log( "ready!" );
});

  function timeCheck() {
    var currentHour = moment().hour();
      console.log(currentHour)
      for (i = 9; i <= 17; i++) {

        if (i < currentHour) {
        $("#hour-" + i).addClass("past");
        }else if (i > currentHour) {
            $("#hour-" + i).addClass("future");
        }else {
            $("#hour-" + i).addClass("present");
        }
    }
    };
    

function loadEvents() {
  scheduleObj = JSON.parse(localStorage.getItem("schedule")) || {};
  $.each(scheduleObj, function (time, description){
    var scheduleKey = document.getElementById(time);
    scheduleKey.querySelector(".description").textContent = description;
  });

};
