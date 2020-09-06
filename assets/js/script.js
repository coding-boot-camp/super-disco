var today = moment().format("dddd, MMMM Do YYYY");
// console.log(today)
var currentDay = $("#currentDay").text(today);
// console.log(currentDay)
var currentHour = moment().format("H A");
console.log(currentHour)

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
    currentHour;
    // console.log(currentHour)
    var eventHour = moment(time, "H A");
    // console.log(eventHour)
    if (currentHour.isBefore(eventHour) === true) {
		return "future";
	} else if (currentHour.isAfter(eventHour) === true) {
		return "past";
	} else {
		return "present";
	}
};

