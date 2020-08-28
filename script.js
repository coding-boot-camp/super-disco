$(function(){
    var today = new Date();
    $("#currentDay").text(today);
   
});

$(document).ready(function() {
    var currentHour = moment().hour();
    
    $(".time-block").each(function(){
        var timeBlockHour = parseInt($(this).attr("id").split("-")[1]);
       
        if (timeBlockHour < currentHour){
            $(this).children('textarea').addClass("past")

        }else if (timeBlockHour == currentHour){
            $(this).removeClass("past")
            $(this).children('textarea').addClass("present")

        } else if (timeBlockHour > currentHour){ 
            $(this).removeClass("present")
            $(this).children('textarea').addClass("future")


        }
        //else if and else, when 
       // timeBlockHour = currentHour : removeclass, adClass
      // $(this).removeClass("present")

        //timeBlockHour< currentHour
    })
;
    
});
// 