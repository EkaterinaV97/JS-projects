function setClocks() {
    let clock = new Clock();
    let hours = clock.getHours();
    let minutes = clock.getMinutes();
    let seconds = clock.getSeconds();
    let session = "AM";

    if(hours > 12) {
        hours = hours - 12;
        session = "PM";
    };

    if(hours == 0) {
        hours = 12;
    };

    if(hours < 10) {
        "0" + hours;
    } else hours;

    if(minutes < 10) {
        "0" + minutes;
    } else minutes;

    if(seconds < 10) {
        "0" + seconds;
    } else seconds;

    let time = hours + ":" + minutes + ":" + seconds + session;
    document.getElementById("clocks").innerText = time;
    document.getElementById("clocks").textContent = time;
    setTimeout(setClocks, 1000);
}
