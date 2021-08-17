var hourEl = $('.hour');
var inputEl = $('textarea');
var saveEl = $('.saveBtn');
var timeEl = moment().hour()


//displays current day
$('#currentDay').html(moment().format("MMM DD YYYY"));

saveEl.on('click', function(){
    let textareaID = $(this).siblings().eq(1).attr('id');
    localStorage.setItem(textareaID, $('#' + textareaID).val());
})

$('textarea').each(function () {
    var rowHour = parseInt($(this).attr('id').split('-')[1]);
    var idVal = $(this).attr('id');
    $(this).val(localStorage.getItem(idVal))
    if(timeEl > rowHour){
        console.log("hit")
        $(this).addClass('past')
    } else if (timeEl === rowHour){
        $(this).addClass('present')
    } else {
        $(this).addClass('future')
    }
})


