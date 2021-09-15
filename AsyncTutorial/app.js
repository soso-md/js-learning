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

// ______________________________________;
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

// ______________________________________;
// Problem: userinfos sollen ausgegeben werden, daten sind allerdings verzögert da
// output: start -> undefined -> finish -> got Data
// therefore callbackfunction : run in later time

// console.log("start");

// function loginUser(email, password, callback) {
//   // 1. pass callback function in here
//   setTimeout(() => {
//     console.log("got Data");
//     callback({ userEmail: email }); // 2. call callbackfunction (when data is there)
//   }, 2500);
// }

// function getUserVideos(email, callback) {
//   setTimeout(() => {
//     callback(["video1", "video2", "video3"]);
//   }, 2000);
// }

// function videoDetails(video, callback) {
//   setTimeout(() => {
//     callback("title of video");
//   }, 2000);
// }

// //this is callback hell :D -> better practice is using promises
// const user = loginUser("deved@gmail.com", 123456, (user) => {
//   //invoke callback function as arrow function
//   console.log(user); // log the user when data is there
//   getUserVideos(user.userEmail, (videos) => {
//     videos.forEach((video) => {
//       console.log(video);
//     });
//     videoDetails(videos[2], (title) => {
//       console.log(title);
//     });
//   });
// });

// // console.log(user); //problem: it is undefined bc the data was'nt there
// console.log("finish");

// ______________________________________ same code as promises:

console.log("start");

function loginUser(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("got Data");
      resolve({ userEmail: email });
    }, 2500);
  });
}

function getUserVideos(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("got videos");
      resolve(["video1", "video2", "video3"]);
    }, 2000);
  });
}

function videoDetails(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("title of video");
    }, 2000);
  });
}

// const user = loginUser("deved@gmail.com", 123456, (user) => {
//   console.log(user);
//   getUserVideos(user.userEmail, (videos) => {
//     videos.forEach((video) => {
//       console.log(video);
//     });
//     videoDetails(videos[2], (title) => {
//       console.log(title);
//     });
//   });
// });

// loginUser("ed", "baum")
//   .then((user) => {
//     console.log(user);
//     getUserVideos(user.email).then((videos) => {
//       console.log(videos);
//     }); //get promise back, so i can type .then for that callback
//   })
//   .then((videos) => {
//     console.log(videos);
//     // videoDetails(video);
//   }); // get back again a promise
// //   .then((detail) => console.log(detail));

// loginUser("ed", "baum")
//   .then((user) => getUserVideos(user.email)) //get promise back, so i can type .then for that callback
//   .then((videos) => videoDetails(videos[1])) // get back again a promise
//   .then((detail) => console.log(detail));

// console.log("finish");

// won't work because it is sync -> see async.js
// const user = loginUser("ed", "blabla");
// const videos = videoDetails(user.email);
// const detail = videoDetails(videos[0]);

const yt = new Promise((resolve) => {
  setTimeout(() => {
    console.log("getting stuff from yt");
    resolve({ videos: [1, 2, 3, 4, 5], comment: "hiii" });
  }, 3000);
});

const fb = new Promise((resolve) => {
  setTimeout(() => {
    console.log("getting stuff from fb");
    resolve({ picture: "src/123", comment: "hiii" });
  }, 5000);
});

Promise.all([yt, fb]).then((result) => console.log(result));
// execute both at the same time, but get the data at the same time too
