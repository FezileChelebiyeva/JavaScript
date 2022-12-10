let box = document.querySelector(".boxSearch");
let addBtn = document.querySelector(".addBtn");
let deleteBtn = document.querySelector(".deleteBtn");
let inputEl = document.querySelector(".form-control");

let array = JSON.parse(localStorage.getItem("array")) || [];
let text;

JSON.parse(localStorage.getItem("array"))?.forEach((element) => {
  text = document.createElement("span");
  text.innerText = element;
  text.style.background = "rgb(189, 215, 238)";
  text.style.marginLeft = "8px";
  text.style.padding = "5px";
  text.style.borderRadius = "5px";
  text.style.textAlign = "center";
  text.style.border = "1px solid darkblue";
  text.innerText = element;
  box.appendChild(text);
});

addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  box.innerText = "";

  array.push(inputEl.value);
  localStorage.setItem("array", JSON.stringify(array));

  JSON.parse(localStorage.getItem("array")).forEach((element) => {
    text = document.createElement("span");
    text.innerText = element;
    text.style.background = "rgb(189, 215, 238)";
    text.style.marginLeft = "8px";
    text.style.padding = "5px";
    text.style.borderRadius = "5px";
    text.style.textAlign = "center";
    text.style.border = "1px solid darkblue";
    text.innerText = element;
    box.appendChild(text);
  });

  inputEl.value = "";
});

deleteBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let arrayNew = JSON.parse(localStorage.getItem("array"));
  // console.log(arrayNew[i]);

  for (let i = 0; i < arrayNew.length; i++) {
    if (inputEl.value == arrayNew[i]) {
      arrayNew.splice(i, 1);
    }
  }
  box.innerHTML = "";

  localStorage.setItem("array", JSON.stringify(arrayNew));
  JSON.parse(localStorage.getItem("array"))?.forEach((element) => {
    text = document.createElement("span");
    text.innerText = element;
    text.style.background = "rgb(189, 215, 238)";
    text.style.marginLeft = "8px";
    text.style.padding = "5px";
    text.style.borderRadius = "5px";
    text.style.textAlign = "center";
    text.style.border = "1px solid darkblue";
    text.innerText = element;
    box.appendChild(text);
  });
});
