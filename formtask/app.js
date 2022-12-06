let form = document.querySelector(".form");
let inputEl = document.querySelectorAll(".inputEl");
let signIn = document.querySelector(".signIn");
let signUp = document.querySelector(".signUp");
let signInBtn = document.querySelector(".signInBtn");
let signUpBtn = document.querySelector(".signUpBtn");

signInBtn.addEventListener("click", function (e) {
  e.preventDefault();
  signUp.style.display = "none";
  signIn.style.display = "block";
});
signUpBtn.addEventListener("click", function(e){
    e.preventDefault();
    signIn.style.display = "none";
    signUp.style.display = "block";
});
