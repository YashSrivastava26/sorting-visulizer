    var timer = null;
    var min_txt = document.getElementById("min");
    var min = Number(min_txt.innerHTML);
    var sec_txt = document.getElementById("sec");
    var sec = Number(sec_txt.innerHTML);
    var msec_txt = document.getElementById("msec"); 
    var msec = Number(msec_txt.innerHTML);
    function stopTimeMilliseconds(timer) {
        if (timer) { 
            clearInterval(timer);
            return timer;
        }
        else return timer;
    }
    function startTimeMilliseconds() {
        var currDate = new Date();
        return currDate.getTime();	
    }
    function getElapsedTimeMilliseconds(startMilliseconds) {
        if (startMilliseconds > 0) {
            var currDate = new Date();
            elapsedMilliseconds = (currDate.getTime() - startMilliseconds);
            return elapsedMilliseconds;
        }
     else {
        return elapsedMilliseconds = 0;
        }
    }
    function startWatch() { 
        timer = stopTimeMilliseconds(timer); 
        var startMilliseconds = startTimeMilliseconds();
        timer = setInterval(function() { 
            var elapsedMilliseconds = getElapsedTimeMilliseconds(startMilliseconds); 
            if (msec < 10) {
                msec_txt.innerHTML = "00" + msec; 
            }
            else if (msec < 100) {
                msec_txt.innerHTML = "0" + msec;
            }
            else {
                msec_txt.innerHTML = msec;
            }
            if (sec < 10) {
                sec_txt.innerHTML = "0" + sec;
            }
            else {
                sec_txt.innerHTML = sec; 
            }
            min_txt.innerHTML = min; 
            msec = elapsedMilliseconds;
            if (min >= 59 && sec >=59 && msec > 900) {
                timer = stopTimeMilliseconds(timer);
                return true;
            }
            if (sec > 59) {
                sec = 0;
                min++;
            }
            if (msec > 999) {
                msec = 0;
                sec++;
                startWatch();
            }
        }, 10);
    }
    function stopWatch() {
        timer = stopTimeMilliseconds(timer);
        return true;
    }
    function resetWatch() {
        timer = stopTimeMilliseconds(timer);
        msec_txt.innerHTML = "000"; 
        msec = 0;
        sec_txt.innerHTML = "00"; 
        sec = 0;
        min_txt.innerHTML = "0"; 
        min = 0;
        return true;
    }