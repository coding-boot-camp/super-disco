$(document).ready(function() {
    // This posts the current date and 24h clock in the header
    const today = moment().format('MMMM Do YY, H:mm:ss a')
    $("#currentDay").html(today);

    loadLocal = () => {
        // creates an element to run through for each row.id
        let id = ["9","10","11","12","13","14","15","16","17"]
        // iterate through entire id list
        for (let i = 0; i < id.length; i++) {
        // creates an id element with a value of each of the id iterations
            let idEl = id[i];
        // sets the value of each description to locally saved data of each corresponding id
            $(`#${idEl} .description`).val(localStorage.getItem(idEl))
        }
    };
    loadLocal();

    // Saves to local storage on button click
    $(".btn").click(() => {
        // pulls hour from id of .btn parent div
        let hour = $(this).parent().attr("id")
        // pulls description from text value of textarea
        let description = $(this).siblings(".description").val()
        // saves hour and description to localStorage
        localStorage.setItem(hour,description)
    });
    // tracks time and shifts row color
    timeTracker = () => {
        // loops through the .row DOM element activating the function
        $(".row").each(function() {
            // current hour from moment js
            let currentTime = moment().hours();
            // pulls interger from id of each .row looped through
            let timeBlock = parseInt($(this).attr("id"));
            if(timeBlock > currentTime) {
                $(this).addClass("future")
                $(this).removeClass("present")

            }else if(timeBlock == currentTime) {
                $(this).removeClass("future")
                $(this).removeClass("past")
                $(this).addClass("present")
            } else {
                $(this).removeClass("future")
                $(this).removeClass("present")
                $(this).addClass("past")
            }
        })
    }
    timeTracker();
});