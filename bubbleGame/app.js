let startBtn = document.querySelector("#startBtn");
let stopBtn = document.querySelector("#stopBtn");
let resetBtn = document.querySelector("#resetBtn");
let box = document.querySelector(".box");
let result = document.querySelector("#score");

let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");

let bubble;
let userScore = 0;
let bubbleInterval;
startBtn.addEventListener("click", function (e) {
  e.preventDefault();
  startBtn.disabled = true;
  stopBtn.disabled = false;

  bubbleInterval = setInterval(function () {
    createBubble();}, 600);

  document.querySelectorAll(".bubble").forEach((b) => {
    b.disabled = false;
  });
});

stopBtn.addEventListener("click", function () {
  startBtn.disabled = false;
  stopBtn.disabled = true;
  clearInterval(bubbleInterval);

  document.querySelectorAll(".bubble").forEach((b) => {
    b.disabled = true;
  });
});

easyBtn.addEventListener("click", function () {
  easyBtn.disabled = false;
  hardBtn.disabled = true;
  bubbleInterval = setInterval(function () {
    createBubble();
  }, 900);
});
hardBtn.addEventListener("click", function () {
  easyBtn.disabled = true;
  hardBtn.disabled = false;
  bubbleInterval = setInterval(function () {
    createBubble();
  }, 200);
});

resetBtn.addEventListener("click", resetGame);
function resetGame() {
  startBtn.disabled = false;
  stopBtn.disabled = false;
  easyBtn.disabled = false;
  hardBtn.disabled = false;
  clearInterval(bubbleInterval);
  box.innerHTML = "";
  userScore = 0;
  result.innerText = userScore;
}
function createBubble() {
  bubble = document.createElement("button");
  bubble.setAttribute("class", "bubble");
  leftPos = Math.floor(Math.random() * (95 - 1) + 1);
  topPos = Math.floor(Math.random() * (95 - 1) + 1);
  bubble.style.width = "25px";
  bubble.style.height = "25px";
  bubble.style.borderRadius = "50%";
  bubble.style.backgroundColor = "darkblue";
  bubble.style.border = "2px solid black";
  bubble.style.cursor = "pointer";
  bubble.style.position = "absolute";
  bubble.style.left = `${leftPos}%`;
  bubble.style.top = `${topPos}%`;

  box.appendChild(bubble);

  if (document.querySelectorAll(".bubble").length == 40) {
    clearInterval(bubbleInterval);
    if (confirm(`Game Over!! Your score is ${userScore}`)) {
      resetGame();
    }
  }

  bubble.addEventListener("click", function () {
    this.remove();
    userScore += 1;
    result.innerHTML = `${userScore}`;
  });
}
