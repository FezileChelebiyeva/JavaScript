// 1
function fullName() {
  return "Fezile Chelebiyeva";
}
console.log("1-", fullName());

// 2
function fullName2(name = "Fezile", surname = "Chelebiyeva") {
  return name + " " + surname;
}
console.log("2-", fullName2());

// 3
function addNumbers(firstNumber, secondNumber) {
  sum = firstNumber + secondNumber;
  return sum;
}
console.log("3-", addNumbers(2, 3));

// 4
function areaRectangle(a, b) {
  multply = a * b;
  return multply;
}
console.log("4-", areaRectangle(5, 3));

// 5
function perimeterOfRectangle(en, uzunluq) {
  perimetr = 2 * (en + uzunluq);
  return perimetr;
}
console.log("5-", perimeterOfRectangle(5, 6));

// 6
function VolumOfRectPrism(a, b, h) {
  volum = a * b * h;
  return volum;
}
console.log("6-", VolumOfRectPrism(3, 4, 6));

// 7
function areaOfCirle(r) {
  const PI = Math.PI;
  area = PI * Math.pow(r, 2);
  return area;
}
console.log("7-", areaOfCirle(3));

// 8
function circumOfCircle(r) {
  const PI = Math.PI;
  return 2 * PI * r;
}
console.log("8-", circumOfCircle(2));

// 9
function sixliq(m, V) {
  return m / V;
}
console.log("9-", sixliq(2, 8));

// 10
function selsiFahrenheit(s, f) {
  return (s * 9) / 5 + 32;
}
console.log("10-", selsiFahrenheit(20, 30));

// 11
function BMI(m, h) {
  let bmi = m / Math.pow(h, 2);
  let result;
  if (bmi < 18.5) {
    result = "az ceki";
  } else if (18.5 < bmi && bmi < 24.9) {
    result = "normal ceki";
  } else if (25 < bmi && bmi < 29.9) {
    result = "artiq ceki";
  } else {
    result = "obez";
  }
  return result;
}

console.log("11- ", BMI(49, 1.6));

// 12
function CheckSeason(month) {
  switch (month) {
    case "dekabr":
    case "yanvar":
    case "fevral":
      return "qish";
    case "mart":
    case "aprel":
    case "may":
      return "yaz";
    case "iyun":
    case "iyul":
    case "avqust":
      return "yay";
    case "sentyabr":
    case "oktyabr":
    case "noyabr":
      return "payiz";
  }
}
console.log("12- ", CheckSeason("iyul"));

// 13
function maxEded(a, b, c) {
  if (a > b && a > c && b > c) {
    return a;
  } else if (a > b && a > c && c > b) {
    return a;
  } else if (b > a && b > c && a > c) {
    return b;
  } else if (b > a && b > c && c > a) {
    return b;
  } else {
    return c;
  }
}
console.log("13- ", maxEded(355, 164, 224));

// function maxEded (a, b, c) {
//     return Math.max(a, b, c)
// }

// console.log("13- ", maxEded(300,164,2952));

// 14
let array = [4, 7, 3, 9, 10];
function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log("14- ", arr[i]);
  }
}
printArray(array);

// 15
let array2 = [4, 7, 3, 9, 10];

function reverseArray(arr) {
  let reverse = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reverse.push(arr[i]);
  }
  return reverse;
}
console.log(reverseArray(array2));
