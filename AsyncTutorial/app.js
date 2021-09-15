// Sync code example

// function otherFunc() {
//   console.log("we are in another function");
//   console.log("so some stuff");
// }
// console.log("Start");
// otherFunc();
// console.log("End");
// output: Start -> we are in another function -> so some stuff -> End
// the main is pausing while the function is executed

// Async code example

// console.log("Start");
// setTimeout(() => {
//   console.log("We are in the timeout");
// }, 2000);
// console.log("End");
// output: Start -> End -> We are in the timeout
// It dont stop while the timeout:

// Web API: JS pass timeput to Web Api, so it is removed from callstack & can run "End", when timeout is over, it is pushed back
// Eventlistener are also tracked by the Web Api (so it doesn't interrupt the other code)

// Problem: userinfos sollen ausgegeben werden, daten sind allerdings verzögert da
// output: start -> undefined -> finish -> got Data
// therefore callbackfunction : run in later time

console.log("start");

function loginUser(email, password, callback) {
  // 1. pass callback function in here
  setTimeout(() => {
    console.log("got Data");
    callback({ userEmail: email }); // 2. call callbackfunction (when data is there)
  }, 2500);
}

function getUserVideos(email, callback) {
  setTimeout(() => {
    callback(["video1", "video2", "video3"]);
  }, 2000);
}

function videoDetails(video, callback) {
  setTimeout(() => {
    callback("title of video");
  }, 2000);
}

//this is callback hell :D
const user = loginUser("deved@gmail.com", 123456, (user) => {
  //invoke callback function as arrow function
  console.log(user); // log the user when data is there
  getUserVideos(user.userEmail, (videos) => {
    videos.forEach((video) => {
      console.log(video);
    });
    videoDetails(videos[2], (title) => {
      console.log(title);
    });
  });
});

// console.log(user); //problem: it is undefined bc the data was'nt there
console.log("finish");
