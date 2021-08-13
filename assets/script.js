var hourEl = $('.hour');
var inputEl = $('textarea');
var saveEl = $('.saveBtn');
var slot1El = $('.slot1')
var timeEl = moment().hour()
var timeslots = ["9", "10", "11", "12","13", "14","15","16","17","18","19","20","21" ];
var slot1 = timeslots[0];
var slot2 = timeslots[1];
var slot3 = timeslots[2];
var slot4 = timeslots[3];
var slot5 = timeslots[4];
var slot6 = timeslots[5];
var slot7 = timeslots[6];
var slot8 = timeslots[7];
var slot9 = timeslots[8];
var slot10 = timeslots[9];
var slot11 = timeslots[10];
var slot12 = timeslots[11];
//displays current day
$('#currentDay').html(moment().format("MMM DD YYYY"));
init();

function init(){
    generateTimes();
    // storeData();
}



console.log(timeEl)
console.log(timeEl > slot1)
// function storeData(){

// }

