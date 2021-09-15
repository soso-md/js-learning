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

// loginUser("ed", "baum")
//   .then((user) => getUserVideos(user.email)) //get promise back, so i can type .then for that callback
//   .then((videos) => videoDetails(videos[1])) // get back again a promise
//   .then((detail) => console.log(detail));

async function displayUser() {
  const user = await loginUser("ed", "blabla");
  const videos = await getUserVideos(user.userEmail);
  const detail = await videoDetails(videos[0]);
  console.log(detail);
}

displayUser();
