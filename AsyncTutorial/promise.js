//Promise: either give us back a success function or a failure function
console.log("start");

const promise = new Promise((resovle, reject) => {
  setTimeout(() => {
    console.log("got user");
    // resovle({ user: "Ed" });
    reject(new Error("user nod logged in"));
  }, 2000);
});

promise
  .then((user) => {
    console.log(user);
  })
  .catch((err) => console.log(err.message));
