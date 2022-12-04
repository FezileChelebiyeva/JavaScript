let search = document.querySelector("#search");
let addBtn = document.querySelector("#addBtn");
let text = document.querySelector("#text");
let deleteBtn = document.querySelector("#deleteBtn");
let box = document.querySelector(".box");
let ul = document.querySelector("ul");

addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (search.value == "") {
    alert("Right here");
  } else {
    let task = document.createElement("li");
    task.className = "task";
    task.innerText = search.value;
    ul.append(task);
    search.value = "";
  }
});

deleteBtn.addEventListener("click", function () {
  setTimeout(() => {
    ul.innerHTML = "";
  }, 2000);
  setTimeout(() => {
    ul.innerText = "to do app deleted";
  }, 1000);
});
