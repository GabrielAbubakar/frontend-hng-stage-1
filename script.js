var week = [null, 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// Calculate the current day of the week and input it
var dt = new Date()
var day = dt.getDay()
document.getElementById('currentDay').innerHTML = week[day]