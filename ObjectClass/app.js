// object yarat
// let fezile = {
//     email: 'fezilecelebiyevaa@gmail.com',
//     skills: ['HTML', 'CSS', 'JS'],
//     age: 19,
//     isLoggedIn: false,
//     points: 100
// }
// fezile.name = 'Fezile';
// fezile.surname = 'Celebiyeva';
// console.log(fezile);

// console.log(Object.keys(fezile));
// console.log(Object.values(fezile));

// en cox skills
const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

// skili boyuk olan
let array = Object.values(users);
// // console.log(array);
let max = 0;
for (let i = 0; i < array.length; i++) {
  //   console.log(array[i].skills.length);
  if (array[i].skills.length > max) {
    max = array[i].skills.length;
  }
} console.log(max);

let arrName = Object.entries(users);
console.log(arrName);
for (let i = 0; i < arrName.length; i++) {
  for (let j = 0; j < arrName[i].length; j++) {
    if (arrName[i][j].skills?.length == max) {
      console.log(arrName[i][0]);
    }
  }
}

// point 50
let array1 = Object.entries(users);
console.log(array);
for (let i = 0; i < array1.length; i++) {
  for (let j = 0; j < array1[i].length; j++) {
    if (array1[i][j].points == 50) {
      console.log(array1[i][0]);
      break;
    }
  }
}


// js info
console.log("Asab" in users);
console.log("kage" in users.Daniel);