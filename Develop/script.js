import moment from 'moment';

$( document ).ready(function() {
    $( ".saveBtn" ).click(function() {
        var value = $( this ).siblings(".description").val();
        var time = $( this ).parent().attr("id");
        localStorage.setItem(time, value)
        console.log(value)
        console.log(time)
        
      });

      
    console.log( "ready!" );
});
