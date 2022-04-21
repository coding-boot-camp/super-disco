$("currentTime").text(date.format("LLL"));
$( document ).ready(function() {
  $(".saveBtn").click(function() {
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
