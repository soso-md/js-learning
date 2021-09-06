// ------------ variables
var names = ["Ed", "John", "Mike"];
var counter = 10;
var counter = 5; // can be overwritten easily

for (var i = 0; i < names.length; i++) {} //i is available outside the loop -> causing trouble when looping again
function sayName() {
  var name = "Edward";
} // not available outside the function

const todoList = ["Milk", "Cow", "Chocolate", "Beans"]; // can't reassign
let todo = 3;
todo = 5; // can be reassigned again

for (let i = 0; i < todoList.length; i++) {} // let is not ayailable outside the loop

// ------------  Strings
var name = "Ed";
// console.log("Hello my name is " + name + ".");

const name3 = "Ed";
// console.log(`Hello my name is ${name3}.`);

// ------------ object literals
function getBook(title, author) {
  return {
    title: title,
    author: author,
  };
}
var book = getBook("Harry Potter", "JK Rowling");

function getBook(title, author) {
  return {
    title, // it's simpler!
    author,
  };
}
var book = getBook("Harry Potter", "JK Rowling");

// ------------ object the construction
var user = {
  name2: "Ed",
  age: 25,
  sayName: function () {
    console.log("My name is " + this.name);
  },
};

var myName = user.name2; // create new variable for each prop of the object
// console.log(myName, user.age);

const list = {
  name4: "Shoppinglist",
  items: ["Bag", "Toothpaste", "Shampoo"],
};
const { name4, items } = list; // get all with one command without new variable
// console.log(name4, items);

// ------------ arrowfunctions
function sayGina(gina) {
  //   console.log(gina);
}
sayGina("Gina");
var sayJohann = function () {
  //   console.log("I dont tell you");
};
sayJohann();

const sayLocci = (loc) => {
  //   console.log(`${loc}`);
};
//const sayLocci = (loc) => console.log(`${loc}`);
sayLocci("Paris");

// ------------ default parameters
function multiply(x, y) {
  var a = x || 1; // if the function dont get parameters
  var b = y || 1;
  console.log(a * b);
}
// multiply();

const add = (c = 1, d = 1) => {
  // declare it directly here
  console.log(c + d);
};
// add();

// ------------ new array functions
const shopping = ["Milk", "Bread", "Eggs", "Bananas"];
//loop over each item in the array, get the index
shopping.forEach((product, index) => {
  //   console.log(product, index);
});

//map copy and modify it
const newList = shopping.map((item) => {
  return item + " new";
});
// console.log(newList);

//filter -> search and filter out and get just one item
const filterList = shopping.filter((item) => {
  return item !== "Eggs";
});
// console.log(filterList);

// ------------ constructor function
// function to create an object
function Person(name, age, hairColor) {
  this.name = name;
  this.age = age;
  this.hairColor = hairColor;
}
Person.prototype.sayName2 = function () {
  console.log("My name is " + this.name);
};
var Ed = new Person("Ed", 25, "brown");
// Ed.sayName2();

function Edd(occupation, hobbys, name, age, hairColor) {
  Person.call(this, name, age, hairColor);
  this.occupation = occupation;
  this.hobbys = hobbys;
}

Edd.prototype = Object.create(Person.prototype); // get all the functionalities of Person

const person = new Edd("Dev", "Dancing", "Edwin", 25, "brown");
// console.log(person);
// person.sayName2();

//ES6: going

class ShoppingList {
  constructor(items, nr) {
    this.items = items;
    this.nr = nr;
  }

  sayList() {
    console.log(this.items);
  }
}

const myList = new ShoppingList(["milk", "red bull", "yoghurt"], 3);

// myList.sayList();

// --------------- Promises

//callbacks: used to wait until sth is happened; not call the function right away
function getData(data, callback) {
  setTimeout(() => {
    console.log("reading from the database");
    callback({ data: data }); // function runs when we actually get the information
  }, 2000);
}

getData(5, function (data) {
  console.log(data); // get the moment when the data is available
});

// ES6
// Promise: operation that finishes in the future

const prom = new Promise((resolve, reject) => {
  //Here is async
  setTimeout(() => {
    resolve({ name: "ed", pass: "3t6ugbjdskf823" });
    reject(new Error("something went wrong"));
  }, 3000);
});

prom
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
