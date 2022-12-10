let form = document.querySelector(".form");
let form1 = document.querySelector(".form1");
let inputEl = document.querySelectorAll(".inputEl");
let submitBtn = document.querySelector(".submitBtn");
let submitBtn1 = document.querySelector(".submitBtn1");
let userName = document.querySelector("#name");
let surname = document.querySelector("#surname");
let password = document.querySelector("#password");
let email = document.querySelector("#email");
let password1 = document.querySelector("#password1");
let email1 = document.querySelector("#email1");
let city = document.querySelector("#city");
let signIn = document.querySelector(".signIn");
let login = document.querySelector(".login");
let array = [];

signIn.addEventListener("click", function (e) {
  e.preventDefault();
  form1.style.display = "block";
  form.style.display = "none";
});
login.addEventListener("click", function (e) {
  e.preventDefault();
  form.style.display = "block";
  form1.style.display = "none";
});

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    userName.value !== "" &&
    surname.value !== "" &&
    password.value !== "" &&
    email.value !== "" &&
    city.value !== ""
  ) {
    let object = {
      name: userName.value,
      surname: surname.value,
      password: password.value,
      email: email.value,
      city: city.value,
    };

    array.push(object);
    console.log(array);

    if (password.value == password1.value && email.value == email1.value) {
     array.containes(object1);
    }

    userName.value = "";
    surname.value = "";
    password.value = "";
    email.value = "";
    city.value = "";
  } else {
    alert(`yaz`);
  }
});

submitBtn1.addEventListener("click", function (e) {
  e.preventDefault();
  if (password1.value !== "" && email1.value !== "") {
    let object1 = {
      password: password1.value,
      email: email1.value,
    };
    console.log(object1);

    password1.value = "";
    email1.value = "";
  } else {
    alert(`yaz`);
  }
});
