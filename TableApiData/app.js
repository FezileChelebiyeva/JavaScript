const BASE_URL = "https://northwind.vercel.app/api/suppliers";
let tbody = document.querySelector("tbody");
let compName = document.querySelector("#companyName");
let contName = document.querySelector("#contactName");
let contTitle = document.querySelector("#contactTitle");
let submitBtn = document.querySelector(".submitBtn");

let editedElementId;

function usersData() {
  fetch(`${BASE_URL}`)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((element) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `
                      <td>${element.id}</td>
                      <td>${element.companyName}</td>
                      <td>${element.contactName}</td>
                      <td>${element.contactTitle}</td>
                      <td><button id=${element.id} class="editBtn">Edit</button></td>
                      <td><button id=${element.id} class="deleteBtn">Delete</button></td>
                      `;
        tbody.appendChild(trElement);
        submitBtn.setAttribute("id", `${element.id}`);
      });
      let deleteBtn = document.querySelectorAll(".deleteBtn");
      deleteBtn.forEach((element) => {
        element.addEventListener("click", function (e) {
          e.preventDefault();
          element.parentElement.parentElement.remove();
          fetch(`https://northwind.vercel.app/api/suppliers/${this.id}`, {
            method: "DELETE",
          });
        });
      });

      let editBtn = document.querySelectorAll(".editBtn");
      editBtn.forEach((element) => {
        element.addEventListener("click", function (e) {
          editedElementId = this.id;
          e.preventDefault();
          fetch(`https://northwind.vercel.app/api/suppliers/${this.id}`)
            .then((response) => response.json())
            .then((data) => {
              compName.value = data.companyName;
              contName.value = data.contactName;
              contTitle.value = data.contactTitle;
            });
        });
      });
    });
}
usersData();

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  let putObj = {
    companyName: compName.value,
    contactName: contName.value,
    contactTitle: contTitle.value,
  };
  console.log(putObj);

  fetch(`https://northwind.vercel.app/api/suppliers/${editedElementId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(putObj),
  }).then((response)=> {
    console.log(response);
    tbody.innerHTML = "";
    usersData()
  })
});


