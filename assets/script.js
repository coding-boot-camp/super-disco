$(document).ready(function() {
    // This posts the current date and 24h clock in the header
    const today = moment().format('MMMM Do YY, H:mm:ss a')
    $("#currentDay").html(today);


    // Saves to local storage on button click
    $(".btn").click(function() {
        // pulls hour from id of .btn parent div
        let hour = $(this).parent().attr("id")
        // pulls description from text value of textarea
        let description = $(this).siblings(".description").val()
        // saves hour and description to localStorage
        localStorage.setItem(hour,description)
    });
    //   // Load Storage
      $('#9 .description').val(localStorage.getItem(9))
    console.log(localStorage.getItem("9"))

});

 // wip more effecient loadstorage
 // const loadStorage = () => {
    //     const id = ["9","10","11","12","13","14","15","16","17"]
    // }
