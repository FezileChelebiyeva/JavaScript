const BASE_URL = "https://northwind.vercel.app/api/suppliers";
let tbody = document.querySelector("tbody");

function usersData() {
  fetch(`${BASE_URL}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      data.forEach((element) => {
        console.log(element);
        let trElement = document.createElement("tr");
        trElement.innerHTML = `
                      <td>${element.id}</td>
                      <td>${element.companyName}</td>
                      <td>${element.contactName}</td>
                      <td>${element.contactTitle}</td>
                      <td><button class="editBtn">Edit</button></td>
                      <td><button id=${element.id} class="deleteBtn">Delete</button></td>
                      `;
        tbody.appendChild(trElement);
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
    });
}
usersData();
