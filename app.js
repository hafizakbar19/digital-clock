

var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var seconds = document.getElementById("second");
var ampm = document.getElementById("am-pm");

function showTime() {
    var date = new Date();
    var currentHour = date.getHours();
    var currentMinute = date.getMinutes();
    var currentSeconds = date.getSeconds();

    hour.innerText = currentHour;
    minute.innerText = currentMinute;
    seconds.innerText = currentSeconds;

    if (currentHour > 11) {
        ampm.innerText = "pm";
        if (currentHour > 12) {
            currentHour -= 12;
        }
    } else {
        ampm.innerText = "am";
    }
    hour.innerText = currentHour;
}

setInterval(showTime, 1000);

