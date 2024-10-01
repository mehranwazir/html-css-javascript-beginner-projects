console.log("Welcome to Spotify");

//Initialise the Variables

let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let forward = document.getElementById("forward");
let backward = document.getElementById("backward");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let counter = 0;
// let audioTag = getElementByClass(".songItem");
let songs = [
  {
    songName: "Salam-e-Ishq",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "songs/2.mp3",
    coverPath: "covers/2.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "songs/3.mp3",
    coverPath: "covers/3.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "songs/4.mp3",
    coverPath: "covers/4.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "songs/5.mp3",
    coverPath: "covers/5.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "songs/6.mp3",
    coverPath: "covers/7.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "songs/7.mp3",
    coverPath: "covers/7.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "songs/8.mp3",
    coverPath: "covers/8.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "songs/9.mp3",
    coverPath: "covers/9.jpg",
  },
];

// Handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});

//Listen to Events

audioElement.addEventListener("timeupdate", () => {
  //Update Seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100); // will give the percent of the song played
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

forward.addEventListener("click", () => {
  if (counter > 8) counter = 0;
  if (counter < 0) counter = 8;

  audioElement.src = songs[counter].filePath;
  console.log(songs[counter].filePath);
  audioElement.currentTime = 0;
  audioElement.play();
  counter++;
  console.log(counter);
});

backward.addEventListener("click", () => {
  if (counter < 0) counter = 8;
  if (counter > 8) counter = 0;

  audioElement.src = songs[counter].filePath;
  console.log(songs[counter].filePath);
  audioElement.currentTime = 0;
  audioElement.play();
  counter--;
  console.log(counter);
});
