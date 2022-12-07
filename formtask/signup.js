let form = document.querySelector("form");
let allInput = document.querySelectorAll(".form-control");
let submitBtn = document.querySelector(".btn");

let allUserData =
  JSON.parse(localStorage.getItem("userData")) == null
    ? []
    : JSON.parse(localStorage.getItem("userData"));

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (
    allInput[0].value != "" &&
    allInput[1].value != "" &&
    allInput[2].value != "" &&
    allInput[3].value != ""
  ) {
    submitBtn.disabled = false;

    let userObject = {
      username: "",
      surname: "",
      email: "",
      password: "",
    };
    userObject.username = allInput[0].value;
    userObject.surname = allInput[1].value;
    userObject.email = allInput[2].value;
    userObject.password = allInput[3].value;

    allUserData.push(userObject);
    localStorage.setItem("userData", JSON.stringify(allUserData));

    allInput[0].value = "";
    allInput[1].value = "";
    allInput[2].value = "";
    allInput[3].value = "";

    // allUserData.some((e) => e.email === allInput[2].value)
    //   ? null
    //   : allUserData.push(userObject);

    // localStorage.setItem("userData", JSON.stringify(allUserData));
  }
});
