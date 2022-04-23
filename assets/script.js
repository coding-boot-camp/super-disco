$(document).ready(function() {
// This posts the current date and 24h clock in the header
const today = moment().format('MMMM Do YY, H:mm:ss a')
$("#currentDay").html(today);

// local storage
const loadSched = () => {
    sched = JSON.parse(localStorage.getItem("sched"))
   }


// Saves to local storage on button click
$(".btn").click(function() {
    // pulls hour from id of .btn parent div
    let hour = $(this).parent().attr("id")
    // pulls description from text value of textarea
    let description = $(this).siblings(".description").val()
    // saves hour and description to localStorage
    localStorage.setItem(hour,description)
});
});
