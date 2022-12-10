let select = document.querySelector(".select");
let topBox = document.querySelector(".top");
let bottomBox = document.querySelector(".bottom");
let input = document.querySelector("#input");
let addBtn = document.querySelector(".addBtn");
let deletebtn = document.querySelector(".deletebtn");
let editBtn = document.querySelector(".editBtn");
addBtn.style.display = "none";

let array = [];
let text;
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.querySelector(".addBtn").click();

    text = document.createElement("span");

    text.style.background = "rgb(189, 215, 238)";
    text.style.width = "10%";
    text.style.height = "20px";
    text.style.marginLeft = "8px";
    text.style.padding = "5px 5px";
    text.style.borderRadius = "5px";
    text.style.border = "1px solid darkblue";
    text.innerText = input.value;

    array.push(text.innerText);

    localStorage.setItem("movies", JSON.stringify(array));

    deletebtn.addEventListener("click", function (e) {
      e.preventDefault();

      array.forEach((t) => {
        if (input.value === t.innerText) {
          t.remove();
          t.localStorage.removeItem("movies");
        }
      });
    });

    editBtn.addEventListener("click", function (e) {
      e.preventDefault();
      array.forEach((t) => {
        if ((input.value = t.innerText)) {
          text.remove();
        }
      });
    });

    input.value = "";
  }
});
