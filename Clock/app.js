let hrs = document.getElementById('hrs');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
function updateClock() {
    let time = new Date();
    hrs.innerHTML = time.getHours();
    min.innerHTML = time.getMinutes();
    sec.innerHTML = time.getSeconds();
  }
  updateClock();
  setInterval(updateClock, 1000);
  