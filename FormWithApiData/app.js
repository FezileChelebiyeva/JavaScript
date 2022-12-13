let form = document.querySelector("form");
let allInput = document.querySelectorAll(".form-control");
let submitBtn = document.querySelector(".btn");
const BASE_URL = "https://northwind.vercel.app/api/customers";

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("hjkmn");
  let customerObj = {
    name: allInput[0].value,
    surname: allInput[1].value,
    email: allInput[2].value,
    password: allInput[3].value,
  };

  function postNewCustomer(obj) {
    fetch(`${BASE_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
  }
  postNewCustomer(customerObj);
});

function deleteCustomer(id) {
    fetch(`${BASE_URL}/${id}`, {
      method: "DELETE"
    });
  }
deleteCustomer("g4E0ay8")