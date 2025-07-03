const timer = (id, deadline) => {
    function addZero(num) {
        if (num <= 9) {
            return `0${num}`;
        } else {
            return num;
        };
    };

    function getDataTime(endtime) {
        let total = Date.parse(endtime) - Date.parse(new Date()),
            day = Math.floor(total/(1000 * 60 * 60 * 24)),
            hour = Math.floor(total/(1000 * 60 * 60) % 24),
            minute = Math.floor((total/1000 / 60) % 60),
            second = Math.floor((total/1000) % 60);

        return {
            total,
            day, 
            hour, 
            minute, 
            second
        };
    };

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector("#days"),
              hours = timer.querySelector("#hours"),
              minutes = timer.querySelector("#minutes"),
              seconds = timer.querySelector("#seconds"),
              timerInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            let t = getDataTime(endtime);
            
            days.innerHTML = addZero(t.day),
            hours.innerHTML = addZero(t.hour),
            minutes.innerHTML = addZero(t.minute),
            seconds.innerHTML = addZero(t.second);
    
            if (t.total <= 0) {
                days.innerHTML = "00",
                hours.innerHTML = "00",
                minutes.innerHTML = "00",
                seconds.innerHTML = "00";

                clearInterval(timerInterval);
            };
        };
    };

    setClock(id, deadline)
};

export default timer;