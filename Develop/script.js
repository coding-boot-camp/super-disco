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
  $(".time-block").each(function () {
    var blockTime = parseInt($(this).attr("id").split("hour")[1]);

    if (blockTime < currentHour) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    } else if (blockTime === currentHour) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past")
      $(this).removeClass("present")
      $(this).addClass("future")
    }
  });
}

function loadEvents() {
  scheduleObj = JSON.parse(localStorage.getItem("schedule")) || {};
  $.each(scheduleObj, function (time, description){
    var scheduleKey.querySelector(".description").textContent = description;
  });

};
