const countriesAPI = "https://restcountries.com/v2/all";
let row = document.querySelector(".row");
let darkBtn = document.querySelector(".darkBtn");
let body = document.querySelector("body");
let header = document.querySelector("header");
let search = document.querySelector("#search");
let info = document.querySelector(".info");
let ulEl = document.querySelector("ul");
let flagIn = document.querySelector(".flagIn");
let flags = document.querySelector(".flags");
let backBtn = document.querySelector(".backBtn");
let nameData;

function fetchCountriesData() {
  fetch(`${countriesAPI}`)
    .then((response) => response.json())
    .then((data) => {
      function countriesData(array) {
        array.forEach((element) => {
          // nameData = element.name
          row.innerHTML += `
          <div class="col-3 mb-5">
          <div class="card" >
          <img style="height: 200px;" src=${element.flags?.png} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 style="font-weight: 700;" class="card-title">${element.name}</h5>
         
          <p>Population: ${element.population}</p>
          <p>Region: ${element.region}</p>
          <p>Capital: ${element.capital}</p>
          
        </div>
      </div>
          `;
          ulEl.innerHTML += `<li><a>${element.region}</a></li>`;
        });

        let country = "https://restcountries.com/v3.1/name/";

        let card = document.querySelectorAll(".card");
        card.forEach((el) => {
          el.style.cursor = "pointer";
          el.addEventListener("click", function () {
            flagIn.style.display = "block";
            flags.style.display = "none";
            backBtn.style.display = "block";

            fetch(`${country}${this.children[1].children[0].innerText}`)
              .then((response) => response.json())
              .then((data) => {
                let htmlContext = `
                       <div class="text">
                       <div><img style=" width: 350px;" src=${data[0].flags.png} class="card-img-top" alt="..."></div>
                       <div>
                       <h5 style="font-weight: 700;" class="card-title">${data[0].name?.common}</h5>
                       <p>${data[0].name.common}</p>
                       <p>${data[0].population}</p>
                       <p>${data[0].region}</p>
                       <p>${data[0].subregion}</p>
                       <p>${data[0].capital}</p>
                       
                       </div>
                       </div>
                        `;

                flagIn.innerHTML += htmlContext;
              });
          });
        });

        // function countries(endpoint) {
        //   fetch(`${country}${endpoint}`)
        //     .then((response) => response.json())
        //     .then((data) => {
        //       console.log(data[0]);

        //     });
        // }
        // countries(`${nameData}`);
      }
      countriesData(data);

      search.addEventListener("input", function () {
        let filteredCountry = data.filter((element) =>
          element.name
            .toLocaleLowerCase()
            .includes(search.value.toLocaleLowerCase())
        );
        row.innerHTML = "";
        countriesData(filteredCountry);
      });
    });
}
fetchCountriesData();

darkBtn.addEventListener("click", function (e) {
  e.preventDefault();
  document.body.classList.toggle("dark-mode");
});

backBtn.addEventListener("click", function () {
  console.log("jsjkdxdjk");
  flagIn.style.display = "none";
  flags.style.display = "block";
});
