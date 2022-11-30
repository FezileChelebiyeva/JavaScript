const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

// 6

function func(arr) {
  return arr.length;
}
// console.log(func(countries));

// 7
function funct(array) {
  return `ilk element: ${array[0]}, 
  orta element ${array[Math.floor(countries.length / 2)]},
    sonuncu element: ${array[countries.length - 1]}`;
}
// console.log(funct(countries));

// 8

function copyArray(array) {
  //   let copy = { ...array}
  //     console.log(copy);
  let copy;
  copy = array;
  console.log(copy);
}
// copyArray(countries);

// 9
function func(arr) {
  let upper = arr.map((u) => u.toUpperCase());
  console.log(upper);
}

// func(countries);

// 10
function reverse(arr) {
  let revers = arr.reverse();
  console.log(revers);
}
// reverse(countries);

// 11
function test(array, olke) {
  //   let status = false;
  //   for (let i = 0; i < array.length; i++) {
  //     if (array[i] == "tgrtg") {
  //       console.log(array[i]);
  //       status = true;
  //     }
  //   }
  //   status ? "" : console.log("yox");

  console.log(
    array.find((f) => f == olke) ? array.find((f) => f == olke) : "yoxdu"
  );
}
test(countries, "Azerbaijan");

// 12
function fnctn(array) {
  let herf = array.map((u) => u.includes("o"));
  console.log(herf);
}
fnctn(countries);
