let form = document.querySelector("form");
let emailInput = document.querySelector("#email");
let passwordInput = document.querySelector("#password");
let submitBtn = document.querySelector(".btn");
let btnSignUp = document.querySelector(".btnSignUp");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (email.value !== "" && password !== "") {
    let allUserArray = JSON.parse(localStorage.getItem("userData")) || [];
    // console.log(allUserArray);

    let info = document.createElement("p");
    info.setAttribute("class", "info");
    info.innerText = "Incorrect email or password.";
    info.style.color = "red";
    info.style.display = "flex";
    info.style.justifyContent = "space-between";
    info.style.alignItems = "center";
    info.style.padding = "5px 10px";
    info.style.width = "25%";
    info.style.border = "1px solid red";
    info.style.backgroundColor = "pink";

    let checkInfo = allUserArray.some(
      (user) => user.email == email.value && user.password == password.value
    );
    if (checkInfo) {
      // form.children[0].remove();
      console.log(info);
      setTimeout(function () {
        window.location.href = "home.html";
      }, 800);
      document.querySelector(".info").remove();
    } else {
      form.children[0].classList.contains("info") ? null : form.prepend(info);
    }

    
    email.value = "";
    password.value = "";
  }
});

btnSignUp.addEventListener("click", function (e) {
  e.preventDefault();
  setTimeout(function () {
    window.location.href = "signup.html";
  }, 1000);
});
