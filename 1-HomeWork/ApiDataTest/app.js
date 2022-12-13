const BASE_URL = "https://jsonplaceholder.typicode.com/";
let tbody = document.querySelector("tbody");
let searchInput = document.querySelector("#searchInput");

function usersData(endpoint) {
  fetch(`${BASE_URL}${endpoint}`)
    .then((response) => response.json())
    .then((data) => {
      function searchDataInfo(array) {
        array.forEach((element) => {
          // console.log(data);
          let trElement = document.createElement("tr");
          trElement.innerHTML = `
                    <td>${element.id}</td>
                    <td>${element.name}</td>
                    <td>${element.username}</td>
                    <td>${element.email}</td>
                    <td>${element.address.street}</td>
                    <td>${element.address.city}</td>
                    <td>${element.website}</td>
                    <td>${element.company.name}</td>
                    `;
          tbody.appendChild(trElement);
        });
      }
      searchDataInfo(data);

      searchInput.addEventListener("input", function () {
        let searchData = data.filter((search) =>
          search.name
            .toLocaleLowerCase()
            .includes(searchInput.value.toLocaleLowerCase())
        );
        // console.log(searchData);
        tbody.innerHTML = "";
        searchDataInfo(searchData);
      });
    });
}
usersData("users");
