var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


// Calculate and set the current day of the week
var dt = new Date()
var day = dt.getDay()
document.getElementById('currentDay').innerHTML = week[day]


// Calculate and set UTC time
var time = dt.getTime()
document.getElementById('currentTime').innerHTML = time
