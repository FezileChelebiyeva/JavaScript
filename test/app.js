const BASE_URL_2 = "https://api.thecatapi.com/v1/";
let search = document.querySelector("#search");
let box = document.querySelector("#cat");

function fetchData(endpoint) {
  fetch(`${BASE_URL_2}${endpoint}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      function searchCat(array) {
        for (let i = 0; i < array.length; i++) {
          box.innerHTML += `<div class="card" style="width: 18rem;">
            <img src="${array[i].image?.url}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${array[i].name}</h5>
              <p class="card-text"> ${array[i].description}</p>
              <a target = "_blank" href="${array[i].wikipedia_url}" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>`;
        }
      }
      searchCat(data);

      search.addEventListener("input", function () {
        let filteredData = data.filter((data) =>
          data.name
            .toLocaleLowerCase()
            .includes(search.value.toLocaleLowerCase())
        );
        // console.log(filteredData);
        box.innerHTML = "";
        searchCat(filteredData);
      });
    })
    .catch((err) => console.log(err));
}
fetchData("breeds");
