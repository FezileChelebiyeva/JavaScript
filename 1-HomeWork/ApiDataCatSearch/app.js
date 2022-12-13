const catsAPI = "https://api.thecatapi.com/v1/breeds";
let row = document.querySelector(".row");
let searchInput = document.querySelector("#searchInput");

const fetchCats = async () => {
  let response = await fetch(`${catsAPI}`);
  let data = await response.json();

  // console.log(data);

  //   function searchCat(array) {
  //     array.forEach((element) => {
  //       row.innerHTML += `
  // <div class="col-4 mb-5">
  //     <div class="card" style="width: 18rem;">
  //     <img style="height: 250px;" src=${
  //       element.image?.url
  //     } class="card-img-top" alt="...">
  //   <div class="card-body">
  //     <h5 style="color: darkblue; font-weight: 700;" class="card-title">${
  //       element.name
  //     }</h5>
  //     <p style="white-space: normal;" class="card-text">${element.description.substring(
  //       0,
  //       90
  //     )}....</p>
  //     <a  target="_blank" href=${
  //       element.wikipedia_url
  //     } class="btn btn-primary" style="color: darkblue; font-weight: 700;"><span>About </span> ${
  //         element.name
  //       }</a>
  //   </div>
  // </div>
  //     `;
  //     });
  //   }
  //   searchCat(data);

  // searchInput.addEventListener("input", function () {
  //   let filteredCat = data.filter((element) => {
  //     element.name
  //       .toLocaleLowerCase()
  //       .includes(searchInput.value.toLocaleLowerCase());
  //   });
  //   console.log(filteredCat);
  //   // box.innerHTML = ""
  //   // searchCat(filteredCat)
  // });
};
// fetchCats();

function fetchData() {
  fetch(`${catsAPI}`)
    .then((response) => response.json())
    .then((data) => {
      function searchCat(array) {
        array.forEach((element) => {
          row.innerHTML += `
    <div class="col-4 mb-5">
        <div class="card" style="width: 18rem;">
        <img style="height: 250px;" src=${
          element.image?.url
        } class="card-img-top" alt="...">
      <div class="card-body">
        <h5 style="color: darkblue; font-weight: 700;" class="card-title">${
          element.name
        }</h5>
        <p style="white-space: normal;" class="card-text">${element.description.substring(
          0,
          90
        )}....</p>
        <a  target="_blank" href=${
          element.wikipedia_url
        } class="btn btn-primary" style="color: darkblue; font-weight: 700;"><span>About </span> ${
            element.name
          }</a>
      </div>
    </div>
        `;
        });
      }
      searchCat(data);

      searchInput.addEventListener("input", function () {
        let filteredCat = data.filter((element) =>
          element.name
            .toLocaleLowerCase()
            .includes(searchInput.value.toLocaleLowerCase())
        );
        // console.log(filteredCat);
        row.innerHTML = "";
        searchCat(filteredCat);
      });
    })
    .catch((err) => console.log(err));
}
fetchData();
