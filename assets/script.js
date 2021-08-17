var hourEl = $('.hour');
var inputEl = $('textarea');
var saveEl = $('.saveBtn');
var timeEl = moment().hour()


//displays current day
$('#currentDay').html(moment().format("MMM DD YYYY"));

saveEl.on('click', function(){
    let textarea = $(this).siblings().eq(1).attr('id')
})

$('textarea').each(function () {
    var rowHour = parseInt($(this).attr('id').split('-')[1])
    console.log(rowHour)
    var sameId = $(this).attr('id');
    var task = localStorage.getItem(sameId);
    if(timeEl > rowHour){
        console.log("hit")
        $(this).addClass('past')
    } else if (timeEl === rowHour){
        $(this).addClass('present')
    } else {
        $(this).addClass('future')
    }
})



