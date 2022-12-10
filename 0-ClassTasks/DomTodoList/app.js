let inputEl = document.querySelector(".inputEl");
let addBtn = document.querySelector(".addBtn");
let deleteBtn = document.querySelector(".deleteBtn");
let box = document.querySelector(".box");
let ulEl = document.querySelector("ul");
let test = document.querySelector("#test");

addBtn.addEventListener("click", function () {
  test.innerText="qeydlerin listi"
  // str?.innerHTML = ""
  if (inputEl.value !== "") {
    let text = document.createElement("li");
    text.className = "text";
    text.innerText = inputEl.value;
    ulEl.appendChild(text);

    let divBtn = document.createElement("div");
    divBtn.className = "btnDiv";
    text.appendChild(divBtn);

    let newDeleteBtn = document.createElement("button");
    newDeleteBtn.innerText = "Delete";
    divBtn.appendChild(newDeleteBtn);

    let newEditBtn = document.createElement("button");
    newEditBtn.innerText = "Edit";
    divBtn.appendChild(newEditBtn);
    inputEl.value = "";
  } else {
    alert("bir seyler yazin");
  }
});

deleteBtn.addEventListener("click", function () {
  setTimeout(function () {
    ulEl.innerHTML=""
    test.innerText="qeydler silindi"
  }, 2000);

});
