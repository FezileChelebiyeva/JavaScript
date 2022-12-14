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
  // post
  // function postNewCustomer(obj) {
  //   fetch(`${BASE_URL}`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(obj),
  //   });
  // }
  // postNewCustomer(customerObj);


// put
  function updateWPutCustomers(obj, id) {
    fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
  }
  updateWPutCustomers(customerObj, "WOLZA");

});




// delete
function deleteCustomer(id) {
    fetch(`${BASE_URL}/${id}`, {
      method: "DELETE"
    });
  }
// deleteCustomer("n9agV8D")