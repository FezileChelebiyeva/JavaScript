let btnAdd = document.querySelector(".btnAdd");
let btnOrder = document.querySelector(".btnOrder");
let btnClear = document.querySelector(".btnClear");
let numberBtn = document.querySelectorAll(".number");
let circle1 = document.querySelector(".circle1");
let circle2 = document.querySelector(".circle2");
// let count = document.querySelector(".count");

let array = JSON.parse(localStorage.getItem("Info")) || [];
let sizes = "";
let color1;
let color2;

btnAdd.addEventListener("click", function (e) {
  e.preventDefault();
  if (sizes != "" && color1 != "") {
    let objects = {
      shoeName: "Air",
      size: sizes,
      color: color1,
    };

    array.push(objects);
    localStorage.setItem("Info", JSON.stringify(array));
  }
  else if(sizes != "" && color2 != "")  {
    let objects = {
        shoeName: "Air",
        size: sizes,
        color: color2,
      };
  
      array.push(objects);
      localStorage.setItem("Info", JSON.stringify(array));
  }
});

numberBtn.forEach((element) => {
  element.addEventListener("click", function () {
    element.style.backgroundColor = "white";
    // console.log(element.innerHTML);
    sizes = element.innerHTML;
    element.style.backgroundColor = "green";
    element.style.borderRadius = "50%";
    element.style.width = "20px";
    element.style.height = "20px";
  });
});

circle1.addEventListener("click", function () {
  circle1.style.width = "30px";
  circle1.style.height = "30px";
  color1 = circle1.classList[0];
  console.log(color1);
});
circle2.addEventListener("click", function () {
  circle2.style.width = "30px";
  circle2.style.height = "30px";
  color2 = circle2.classList[0];
  console.log(color2);
});

btnClear.addEventListener("click", function(){
    localStorage.removeItem("Info")
})

btnOrder.addEventListener("click", function(){
  localStorage.removeItem("Info")
})