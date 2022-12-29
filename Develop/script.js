// current Date is displayed at the top of the calendar
let currentDay = document.getElementById('currentDay')
currentDay.innerHTML= moment().format("dddd MMMM YYYY")