const person = {
  name: "hasnain",
  age: "24",
  getName: function () {
    console.log(this);
  },
  address: "Pakistan",
};
console.log(person.address);

// Normal functions
// function ArrowFun(num) {
//   return num * num;
// }
// console.log(ArrowFun(4));

// Arrow functions
const square = (num) => num * num;
console.log(square(5));

// Filter method using Arrow function
// const jobs = [
//   { id: 1, isActive: true },
//   { id: 2, isActive: true },
//   { id: 3, isActive: false },
//   { id: 4, isActive: true },
// ];
// const activeJobs = jobs.filter((jobs) => jobs.isActive);
// console.log(activeJobs);

// Map function using Arrow function
const colors = ["red", "green", "blue", "white", "black"];
const EachColor = colors.map((color) => `the colors are " ${color}" `);
console.log(EachColor);

// object DeStructuring

const address = {
  street: "",
  city: "",
  country: "",
};
// const street = address.street
// const city = address.city
// const country = address.country
const { street, city, country } = address;
const { street: st, city: ct, country: ctry } = address;

const [a, b] = [10, 20];
console.log(a);
const [c, d, ...rest] = [10, 20, 30, 40, 50, 60];
console.log(rest);

const first = {
  name: "hasnain",
};
const second = {
  jobs: "MERN STACK DEVELOPER",
};
const COMBINE = { ...first, ...second, location: "Islamabad" };
console.log(COMBINE);

// timplate literals

const add = (a, b) => {
  return a + b;
};
console.log(add(4, 5));

// Rest operator

// const spread_operator = (...rest) => {
//   console.log(rest);
// };
// spread_operator(1, 2, 3, 4, 5);

// for loop

// const array = [1, 2, 3, 4, 5, 6, 7, 8];
// for (const num of array) {
//   console.log(num);
// }

// const string = "Hasnain ahmad";
// for (const char of string) {
//   console.log(char);
// }

// for with Objects
// const Person = {
//   name: "Hasnain Ahmad",
//   city: "Moscow",
//   brand: "Apple",
// };
// for (const [key, value] of Object.entries(Person)) {
//   console.log(key, value);
// }

// find array method
// const array1 = [
//   { name: "hasnain", id: 1 },
//   { name: "waqas ahmad", id: 2 },
//   { name: "nabeel khan", id: 3 },
// ];
// const user = array1.find((user) => {
//   return user.name === "nabeel khan";
// });
// console.log(user);
// promises

// function login() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("first");
//       console.log("log in");
//       resolve();
//     }, 0);
//   });
// }

// login()
//   .then(() => {
//     console.log("redirecting");
//   })
//   .catch((err) => {
//     console.log("Error...");
//   });

// const Numbers = [1, 2, 3, 4, 5, 6, 7, 1, 2, 3];
// const uniqueNumbers = new Set(Numbers);
// console.log(uniqueNumbers);

// array methods
// const arr1 = [12, 2, 3, 44, 5, 112, 233, 32];
// const arr2 = [75, 3, 2, 4, 5, 6];
// const newArray = [0, 0, 0, 0];
// const arr3 = arr1.concat(arr2, newArray);
// console.log(arr3);
// const sorted = arr1.sort(function (a, b) {
//   return b - a;
// });
// console.log(sorted);

// const string1 = ["hasnain", "ahmad", "khan", "yousafzai"];
// const string2 = ["waqas", "jabbar", "khan", "afridi"];
// const string3 = ["ehmad", "uzzam", "waleed"];
// const newArray3 = string1.concat(string2, string3).join(",");
// console.log(newArray3);

// const TwoDArray = [0, 11, [1, 2, 3, 4]];
// const new2Darray = TwoDArray.flat();
// console.log(new2Darray);

//console.log(Math.floor(Math.random() * 10) + 1);

const getRandomNumber = () => {
  return Math.floor(Math.random() * 100) + 1;
  //return number;
};
console.log(getRandomNumber());

const ternaryOperator = (num) => {
  return num % 2 == 0 ? "Even number" : "odd number";
  // if (num % 2 == 0) {
  //   console.log("Even number");
  // } else {
  //   console.log("odd");
  // }
};
console.log(ternaryOperator(100));

const officeDays = (arr) => {
  for (let i = 0; i <= arr.length; i++) {
    console.log(i);
    console.log(
      arr[i] == "sunday" || arr[i] == "saturday"
        ? "Its Off today"
        : "Go Straight to Office"
    );
    // if (arr[i] == "saturday" || arr[i] == "sunday") {
    //   console.log("Its Off today");
    // } else {
    //   console.log("Go Straight to Office");
    // }
  }
};
const arr = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thurday",
  "friday",
  "saturday",
];
officeDays(arr);

// how to empty an array in Js

var arrayList = [1, 2, 3, 4, 5, 6, 7];
const newArrayList = arrayList;
// var arrayList = [];
// console.log(arrayList);
// console.log(newArrayList);

