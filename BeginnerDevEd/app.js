const schedule = ["Wake up", "Eat", "Film a video", "Watch netflix"];

// schedule.push("New thing", "second new"); // add a new thing
// schedule.pop(); // last thing removed
// schedule.shift(); // remove first thing
// schedule.unshift("beginning"); // add thing to beginning
const index = schedule.indexOf("Watch netflix"); // get the index of that const

// console.log(schedule, index);

const user = {
  //object
  name: "Edwin",
  age: "24",
  married: false,
  purchases: ["phone", "car", "laptop"],

  sayName: function () {
    console.log(this.name); // its the object
  },
};

//loop
const names = ["Sabrina", "John", "Doe", "Phibs"];
// for (nam of names) {
//   console.log(`${nam} is in the list`);
//   if (nam === "Doe") break;
// }

// let loading = 0;
// while (loading < 100) {
//   console.log(`Website is still loading`);
//   loading++;
// }

const text = document.querySelector(".title");
const changeColor = document.querySelector(".changeColor");

changeColor.addEventListener("click", function () {
  text.classList.toggle("change");
});

const userList = document.querySelectorAll(".name-list li");
// console.log(userList);

for (use of userList) {
  use.addEventListener("click", function () {
    console.log(this);
    this.style.color = "lightblue";
  });
}

const userListAll = document.querySelector(".name-list");
const listInput = document.querySelector(".list-input");
const addListName = document.querySelector(".addList");

console.log(userListAll);
addListName.addEventListener("click", function () {
  // create an li
  const newLi = document.createElement("LI");
  const liContent = document.createTextNode(listInput.value);
  // add input value into li
  newLi.appendChild(liContent);
  // attach the input to userlist
  userListAll.appendChild(newLi);
});
