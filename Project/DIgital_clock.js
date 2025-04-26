let timeid;
const days = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];


timeid = setInterval(function(){
    let now = new Date();
    let dayIndex = now.getDay(); 
    let dayName = days[dayIndex];
    let hour = now.getHours();
    let min = String(now.getMinutes()).padStart(2, "0");
    let sec = String(now.getSeconds()).padStart(2, "0");
    
    let period = "AM";
    if (hour >= 12) {
        period = "PM";
    }
    if (hour == 0)
    {
        hour = 12;
    }
    else if (hour >12)
    {
        hour = hour - 12;
    }
    hour = String(hour).padStart(2, "0");
    document.getElementById("Clock").innerText = period + " " + hour + ":" + min + ":" + sec + "(" + dayName + ")";
}, 1000)
