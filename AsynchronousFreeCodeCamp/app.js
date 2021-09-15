let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  Holder: ["cane", "cup", "stick"],
  Liquids: ["water", "ice"],
  Toppings: ["chocolate", "peanuts"],
};

let isShopOpen = true;

//___________________________________________________________________________________________________________________//

// let order = (time, work) => {
//   return new Promise((resolve, reject) => {
//     if (isShopOpen) {
//       setTimeout(() => {
//         resolve(work());
//       }, time);
//     } else {
//       reject(console.log("Our shop is closed"));
//     }
//   });
// };

// order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
//   .then(() => {
//     return order(0000, () => console.log("production has started"));
//   })
//   .then(() => {
//     return order(2000, () => console.log("fruit was chopped"));
//   })
//   .then(() => {
//     return order(2000, () => {
//       console.log(`${stocks.Liquids[0]} and ${stocks.Liquids[1]} was added`);
//     });
//   })
//   .then(() => {
//     return order(1000, () => console.log(`the machine was started`));
//   })
//   .then(() => {
//     return order(2000, () => console.log(`${stocks.Holder[0]} was selected`));
//   })
//   .then(() => {
//     return order(3000, () => console.log(`${stocks.Toppings[1]} was selected`));
//   })
//   .then(() => {
//     return order(2000, () => console.log(`ice cream was served`));
//   })
//   .catch(() => {
//     console.log("customer left");
//   })
//   .finally(() => {
//     console.log("day ended");
//   });

//___________________________________________________________________________________________________________________//

// let order = (fruit, call_production) => {
//   setTimeout(() => {
//     console.log(`${stocks.Fruits[fruit]} was selected`);

//     call_production(); // callback
//   }, 2000);
// };

//callback hell :D
// let production = () => {
//   setTimeout(() => {
//     console.log("production started");

//     setTimeout(() => {
//       console.log("food has been chopped");

//       setTimeout(() => {
//         console.log(`${stocks.Liquids[0]} and ${stocks.Liquids[1]} was added`);

//         setTimeout(() => {
//           console.log(`the machine was started`);

//           setTimeout(() => {
//             console.log(`${stocks.Holder[0]} was selected`);

//             setTimeout(() => {
//               console.log(`${stocks.Toppings[1]} was selected`);

//               setTimeout(() => {
//                 console.log(`ice cream was served`);
//               }, 2000);
//             }, 3000);
//           }, 2000);
//         }, 1000);
//       }, 1000);
//     }, 2000);
//   }, 0000);
// };

// order(0, production);
