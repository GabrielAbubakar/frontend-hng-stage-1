var week = [null, 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// Calculate and set the current day of the week
var dt = new Date()
var day = dt.getDay()
document.getElementById('currentDay').innerHTML = week[day]


// Calculate and set UTC time
var time = dt.getTime()
document.getElementById('currentTime').innerHTML = time