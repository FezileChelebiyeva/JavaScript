let form = document.querySelector(".form");
let inputEl = document.querySelectorAll(".inputEl");
let submitBtn = document.querySelector(".submitBtn");
let username = document.querySelector("#username");
let password = document.querySelector("#password");
let email = document.querySelector("#email");
let city = document.querySelector("#city");
let array = [];

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    username.value !== "" &&
    password.value !== "" &&
    email.value !== "" &&
    city.value !== ""
  ) {
    let object = {
      username: username.value,
      password: password.value,
      email: email.value,
      city: city.value,
    };

    array.push(object);
    console.log(array);

    username.value = "";
    password.value = "";
    email.value = "";
    city.value = "";
  } else {
    alert(`yaz`);
  }
});
