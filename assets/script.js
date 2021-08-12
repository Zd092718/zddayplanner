var hourEl = $('.hour');
var inputEl = $('textarea');
var saveEl = $('.saveBtn');
var timeEl = moment().format('HA');
var timeslots = ["9AM", "10AM", "11AM", "12PM","1PM", "2PM","3PM","4PM","5PM","6PM","7PM","8PM","9PM" ];
//displays current day
$('#currentDay').html(moment().format("MMM DD YYYY"));
init();

function init(){
    generateTimes();
    storeData();
}


function generateTimes(){


    for (let i = 0; i < timeslots.length; i++) {
        const slotsEl = timeslots[i];
        var time = document.createElement('p');
        time.textContent = slotsEl;
        hourEl[i].appendChild(time);
        if(timeEl > slotsEl){
            
        }
    }
}

function storeData(){

}

console.log(hourEl)