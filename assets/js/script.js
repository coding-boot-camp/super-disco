var today = moment().format("dddd, MMMM Do YYYY");
// console.log(today)
var currentDay = $("#currentDay").text(today);
// console.log(currentDay)
var currentHour = moment().format("H A");
// console.log(currentHour)

var events = [
    {time:"9 AM", event:""},
    {time:"10 AM", event:""},
    {time:"11 AM", event:""},
    {time:"12 PM", event:""},
    {time:"1 PM", event:""},
    {time:"2 PM", event:""},
    {time:"3 PM", event:""},
    {time:"4 PM", event:""},
    {time:"5 PM", event:""}
];

var savedEvents = JSON.parse(localStorage.getItem("eventSaved"));
if (savedEvents) {
    events = savedEvents;
    // console.log(savedEvents)
}

function rowColor(time) {
    var timeNow = moment(currentHour, "H A")
    // console.log(currentHour)
    var eventHour = moment(time, "H A");
    // console.log(eventHour)
    if (timeNow.isBefore(eventHour) === true) {
		return "future";
	} else if (timeNow.isAfter(eventHour) === true) {
		return "past";
	} else {
		return "present";
    }
};
// loop through array and create variables from objects
events.forEach(function(hourRow, index) {
    var hourCol = hourRow.time;
    // console.log(hourCol)
    var rowColors = rowColor(hourCol)
    // console.log(rowColor)
    var row = 
        // create a row for each object in the aray
        '<div class="time-block" id="'+index+'">\
            <div class="row input-group no-gutters">\
                <div class="col-sm-2 col-md-2 input-group-prepend hour justify-content-sm-start justify-content-md-end pr-2">'+hourCol+'</div>\
                <textarea class="form-control '+rowColors+'">'+hourRow.event+'</textarea>\
                <div class="col-2 input-group-append">\
                    <button class="saveBtn btn-block" type="submit"><span class="fas fa-save"></span></button>\
                </div>\
            </div>\
        </div>';
    $(".container").append(row);
});
// saves event on button click and writes to localStorge according to timeslot
$(".saveBtn").on("click", function() {
	var rowHourId = parseInt($(this).closest(".time-block").attr("id"));
    // console.log(rowHourId)
	var event = $(this).parent().siblings("textarea").val().trim();
    // console.log(event)
	events[rowHourId].event = event;

	localStorage.setItem("eventSaved", JSON.stringify(events));
});