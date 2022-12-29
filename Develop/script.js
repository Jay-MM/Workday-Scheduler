
const saveBtn = $(".saveBtn");
// current Date is displayed at the top of the calendar
let currentDay = document.getElementById('currentDay');
currentDay.innerHTML= moment().format("dddd MMMM YYYY");

// function checks the time and color codes the time blocks its respectivce colors
function colorCode() {
    const currentHour = moment().hours();

$(".time-block").each(function() {
    const timeBlock = parseInt($(this).attr('id'));
    
    if (currentHour === timeBlock){
        $(this).addClass('present');
    }else if (currentHour > timeBlock){
        $(this).removeClass('present');
        $(this).addClass('past');
    }else if (currentHour < timeBlock){
        $(this).removeClass('past');
        $(this).addClass('future');

    }
})
}

// event gets stored in local storage
saveBtn.on('click', function(e) {
    e.preventDefault();
    const hour = $(this).siblings('.hour').text()
    const description = $(this).siblings('.description').val()

    localStorage.setItem(hour, description)
})

// function calls

colorCode();