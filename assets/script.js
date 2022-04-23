$(document).ready(function() {
    // This posts the current date and 24h clock in the header
    const today = moment().format('MMMM Do YY, H:mm:ss a')
    $("#currentDay").html(today);

    // local Storage function
    loadStorage = () => {
        // create an array for each row parent id
        const id = ["9","10","11","12","13","14","15","16","17"]
        // iterate through entire id list
        for (let i = 0; i < id.length; i++) {
        // creates an id element with a value of each of the id iterations
            const idEl = id[i];
        // sets the value of each description to locally saved data of each corresponding id
            $(`#${idEl} .description`).val(localStorage.getItem(idEl))
        }
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

    loadStorage();
});