const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");

toggle.addEventListener("click", function toggle() {
  this.classList.toggle("bi-moon-fill");
  if (this.classList.toggle("bi-brightness-high-fill")) {
    localStorage.setItem("theme", "light");
    body.style.background = "white";
    body.style.color = "black";
    body.style.transition = "2s";
  } else {
    localStorage.setItem("theme", "dark");
    body.style.background = "black";
    body.style.color = "white";
    body.style.transition = "2s";
  }
});

function showTime() {
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";

  if (h == 0) {
    h = 12;    
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;

  setTimeout(showTime, 1000);
}

showTime();

function timeOfDay() {
  if (h > 10) {
    body.style.background = "black";
    body.style.color = "white";
  }else {
    body.style.background = 'white';
    body.style.color = 'white';
  }
}

timeOfDay();
