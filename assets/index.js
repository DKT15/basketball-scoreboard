const startbtn = document.getElementById("start");
const finishbtn = document.getElementById("finish");
const timerEl = document.getElementById("timer");

const quarterEl = document.getElementById("quarter");
const quarter2btn = document.getElementById("quarter2");
const quarter3btn = document.getElementById("quarter3");
const quarter4btn = document.getElementById("quarter4");

const homeScoreEl = document.getElementById("home-score");
const homePoint1btn = document.getElementById("home-point1");
const homePoint2btn = document.getElementById("home-point2");
const homePoint3btn = document.getElementById("home-point3");

const guestScoreEl = document.getElementById("guest-score");
const guestPoint1btn = document.getElementById("guest-point1");
const guestPoint2btn = document.getElementById("guest-point2");
const guestPoint3btn = document.getElementById("guest-point3");

let time = 12 * 60; //this is equal to 720 which is 12 mins in seconds.
let timer;
let point1 = 0;
let point2 = 0;
let point3 = 0;

// function that allows the timer to start from 12 and countdown.
function updateTimer() {
  let minutes = Math.floor(time / 60); //rounds down to the nearest integer. This gives 12.
  let seconds = time % 60; // there isn't anything remainding here.

  minutes = String(minutes).padStart(2, "0"); //String converts the minutes variable to a string as padStart only works with strings. padStart(2, "0") ensures that the strings length is at least two characters, even if the number is less than 10. A 0 will be the padding at the start e.g. 04. Anything above 10 won't need this.
  seconds = String(seconds).padStart(2, "0");

  timerEl.textContent = minutes + ":" + seconds; //adding onto the timerEl in the DOM.

  // if the timer is up and the the game is in Q4 alert the user that the game is finished. If not tell the user the quarter has ended. otherwise keep taking away a sceond.
  if (time === 0 && quarterEl.textContent === "Q4") {
    alert("The game has finished. Click start for a new one!");
    quarterEl.textContent = "Q1";
    clearInterval(timer);
    timerEl.textContent = "12:00";
    time = 12 * 60;
    startbtn.disabled = false;
  } else if (time === 0) {
    clearInterval(timer);
    alert("End of Quarter!");
    time = 12 * 60;
  } else {
    time--;
  }
}

// changes game to quarter 2.
quarter2btn.addEventListener("click", function () {
  quarterEl.textContent = "Q2";
  startGame();
});

// changes game to quarter 3.
quarter3btn.addEventListener("click", function () {
  quarterEl.textContent = "Q3";
  startGame();
});

//changes game to quarter 4.
quarter4btn.addEventListener("click", function () {
  quarterEl.textContent = "Q4";
  startGame();
});

function startGame() {
  timer = setInterval(updateTimer, 1000); //triggers the timer function above.
  startbtn.disabled = true; // disables the start button after it has been initially clicked.
}

// finishes the game.
finishbtn.addEventListener("click", function () {
  startbtn.disabled = false;
  clearInterval(timer);
  alert("The game has finished. If you want play again click 'Start Game'");
  time = 12 * 60;
  timerEl.textContent = "12:00";
  quarterEl.textContent = "Q1";
  homeScoreEl.textContent = "0";
  guestScoreEl.textContent = "0";
});

// adds to the home score
homePoint1btn.addEventListener("click", function () {
  point1 += 1;
  homeScoreEl.innerText = point1 + point2 + point3;
});

homePoint2btn.addEventListener("click", function () {
  point2 += 2;
  homeScoreEl.innerText = point1 + point2 + point3;
});

homePoint3btn.addEventListener("click", function () {
  point3 += 3;
  homeScoreEl.innerText = point1 + point2 + point3;
});

// adds to the guest score
guestPoint1btn.addEventListener("click", function () {
  point1 += 1;
  guestScoreEl.innerText = point1 + point2 + point3;
});

guestPoint2btn.addEventListener("click", function () {
  point2 += 2;
  guestScoreEl.innerText = point1 + point2 + point3;
});

guestPoint3btn.addEventListener("click", function () {
  point3 += 3;
  guestScoreEl.innerText = point1 + point2 + point3;
});

startbtn.addEventListener("click", startGame); //starts the game when the button has been pressed.
