let search = document.querySelector("#search");
let addBtn = document.querySelector("#addBtn");
let box = document.querySelector("#box");
let deleteBtn = document.querySelector("#deleteBtn");

addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(box);
  if (search.value == "") {
    alert("write something");
  } else {
    let divTask = document.createElement("div");
    divTask.className =
      "taskDiv mt-2 p-2 d-flex justify-content-between align-items-center bg-light";

    let custumP = document.createElement("p");
    custumP.className = "custumP mb-0";
    custumP.innerText = search.value;
    // box.appendChild(custumP)
    search.value = "";

    let divBtn = document.createElement("div");
    divBtn.className = "div";

    let btnEdit = document.createElement("button");
    btnEdit.className = "btn btn-warning me-2";
    btnEdit.innerText = "Edit";
    divBtn.appendChild(btnEdit);

    let btnDelete = document.createElement("button");
    btnDelete.className = "btn btn-danger";
    btnDelete.innerText = "Delete";
    divBtn.appendChild(btnDelete);

    divTask.appendChild(custumP);
    divTask.appendChild(divBtn);
    box.appendChild(divTask);
  }
});

deleteBtn.addEventListener("click", function () {
  setTimeout(() => {
    box.innerHTML = "";
  }, 2000);

  setTimeout(() => {
    box.innerText = "xcjhdfgb";
  }, 1000);
});
