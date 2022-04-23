let sched = {}
// This posts date/time in the header
const today = moment().format('MMMM Do YY, H:mm:ss a')
$("#currentDay").html(today);

// local storage
const loadSched = () => {
    sched = JSON.parse(localStorage.getItem("sched"))
   }


// save button 
$(".btn").click(function(){
    console.log('CLICK')
    // saveSched();
});
