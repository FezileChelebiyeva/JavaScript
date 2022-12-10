let startBtn = document.querySelector(".startBtn");
let endBtn = document.querySelector(".endBtn");
let submitBtn = document.querySelector(".submitBtn");
let consoleBtn = document.querySelector(".consoleBtn");
let box = document.querySelector(".box");
let form = document.querySelector(".form");
let inputEl = document.querySelectorAll(".inputEl");

let array = JSON.parse(localStorage.getItem("form")) || [];

let object;

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    inputEl[0].value !== "" &&
    inputEl[1].value !== "" &&
    inputEl[2].value !== "" &&
    inputEl[3].value !== "" &&
    inputEl[4].value !== "" &&
    inputEl[5].value !== ""
  ) {
    object = {
      question: "",
      a: "",
      b: "",
      c: "",
      d: "",
      correct: "",
    };

    object.question = inputEl[0].value;
    object.a = inputEl[1].value;
    object.b = inputEl[2].value;
    object.c = inputEl[3].value;
    object.d = inputEl[4].value;
    object.correct = inputEl[5].value;

    //   console.log(object);
    array.push(object);
    localStorage.setItem("form", JSON.stringify(array));
  }
  inputEl[0].value = "";
  inputEl[1].value = "";
  inputEl[2].value = "";
  inputEl[3].value = "";
  inputEl[4].value = "";
  inputEl[5].value = "";
});

startBtn.addEventListener("click", function (e) {
  e.preventDefault();
  form.style.display = "flex";
});

endBtn.addEventListener("click", function (e) {
  e.preventDefault();

  JSON.parse(localStorage.getItem("form"))?.forEach((element) => {
    let text = `
    <div class = "ekran">
    <h2>your result</h2>
    <p>question: ${object.question}</p>
    <p>a: ${object.a}</p>
    <p>b: ${object.b}</p>
    <p>c: ${object.c}</p>
    <p>d:${object.d}</p>
    <p>correct answer: ${object.correct}</p>
    </div>
    
    `;
    box.insertAdjacentHTML("beforeend", text);
  });
});

consoleBtn.addEventListener("click", function (e) {
  e.preventDefault();
  JSON.parse(localStorage.getItem("form"))?.forEach((element) => {
    console.log(array);
  });
});
