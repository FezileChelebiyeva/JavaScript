// let filmInput = document.querySelector(".filmName");
// let filmEdit = document.querySelector(".filmEdit");
// let filmBox = document.querySelector(".filmBox");
// let editBtn = document.querySelector(".editBtn");
// let deleteBtn = document.querySelector(".deleteBtn");

// // console.log(arr);
// let array = [];

// // create ui

// // filmArr.forEach((element) => {
// //   let p = document.createElement("p");
// //   p.innerText = element;
// //   filmBox.appendChild(p);
// // });

// JSON.parse(localStorage.getItem("array"))?.forEach((element) => {
//   let p = document.createElement("p");
//   p.innerText = element;
//   filmBox.appendChild(p);
// });

// // add film
// filmInput.addEventListener("keypress", function (event) {
//   filmBox.innerHTML = "";

//   if (event.key === "Enter") {
//     event.preventDefault();
//     // console.log("salam");
//     array.push(filmInput.value);
//     // console.log(array);
//     localStorage.setItem("array", JSON.stringify(array));

//     JSON.parse(localStorage.getItem("array")).forEach((element) => {
//       let p = document.createElement("p");
//       p.innerText = element;
//       filmBox.appendChild(p);
//     });
//   }
// });
// // Edit film
// editBtn.addEventListener("click", function () {
//   // console.log("salam");

//   let filmArr = JSON.parse(localStorage.getItem("array"));
//   // filmArr.map((element) => {
//   //   console.log(element);

//   //   if (element == filmInput.value) {
//   //     element = "guri777";
//   //     console.log("guri777");
//   //   }
//   // });
//   for (let i = 0; i < filmArr.length; i++) {
//     if (filmArr[i] == filmInput.value) {
//       filmArr[i] = filmEdit.value;
//     }
//   }
//   console.log(filmArr);
//   localStorage.setItem("array", JSON.stringify(filmArr));
//   filmArr.forEach((element) => {
//     let p = document.createElement("p");
//     p.innerText = element;
//     filmBox.appendChild(p);
//   });
// });

// // delete

// deleteBtn.addEventListener("click", function () {
//   let filmArr = JSON.parse(localStorage.getItem("array"));
//   // console.log("salam");
//   console.log(filmArr);
//   for (let i = 0; i < filmArr.length; i++) {
//     if (filmArr[i] == filmInput.value) {
//       filmArr.splice(i, 1);
//     }
//   }
//   localStorage.setItem("array", JSON.stringify(filmArr));
//   JSON.parse(localStorage.getItem("array")).forEach((element) => {
//     let p = document.createElement("p");
//     p.innerText = element;
//     filmBox.appendChild(p);
//   });
// });

let filmInput = document.querySelector(".filmName");
let filmEdit = document.querySelector(".filmEdit");
let filmBox = document.querySelector(".filmBox");
let editBtn = document.querySelector(".editBtn");
let deleteBtn = document.querySelector(".deleteBtn");

let array = JSON.parse(localStorage.getItem("array")) ?? [];

JSON.parse(localStorage.getItem("array"))?.forEach((element) => {
  let p = document.createElement("p");
  p.innerText = element;
  filmBox.appendChild(p);
});

// Add
filmInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    let a = JSON.parse(localStorage.getItem("array")) || [];

    array = a;
    event.preventDefault();
    array.push(filmInput.value);
    filmBox.innerHTML = "";

    localStorage.setItem("array", JSON.stringify(array));

    JSON.parse(localStorage.getItem("array")).forEach((element) => {
      let p = document.createElement("p");
      p.innerText = element;
      filmBox.appendChild(p);
    });
  }
});

// Edit
editBtn.addEventListener("click", function () {
  filmBox.innerHTML = "";

  let filmArr = JSON.parse(localStorage.getItem("array"));

  for (let i = 0; i < filmArr.length; i++) {
    if (filmArr[i] == filmInput.value) {
      filmArr[i] = filmEdit.value;
    }
  }
  console.log(filmArr);

  localStorage.setItem("array", JSON.stringify(filmArr));

  filmArr.forEach((element) => {
    let p = document.createElement("p");
    p.innerText = element;
    filmBox.appendChild(p);
  });
});

// Delete
deleteBtn.addEventListener("click", function () {
  let filmArr = JSON.parse(localStorage.getItem("array"));
  // console.log(filmArr);
  for (let i = 0; i < filmArr.length; i++) {
    if (filmArr[i] === filmInput.value) {
      filmArr.splice(i, 1);
    }
  }
  filmBox.innerHTML = "";
  localStorage.setItem("array", JSON.stringify(filmArr));

  JSON.parse(localStorage.getItem("array")).forEach((element) => {
    let p = document.createElement("p");
    p.innerText = element;
    filmBox.appendChild(p);
  });
});
