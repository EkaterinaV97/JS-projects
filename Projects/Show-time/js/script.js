/*  Show time now */
 
 function setClocks() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let session = "AM";

    if(hours > 12) {
        hours = hours - 12;
        session = "PM";
    };

    if(hours == 0) {
        hours = 12;
    };

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    let time = hours + ":" + minutes + ":" + seconds + " " + session;
    document.getElementById("clocks").innerText = time;
    document.getElementById("clocks").textContent = time; 
    setTimeout(setClocks, 1000); 
}
setClocks();


/* Sec-timer */

