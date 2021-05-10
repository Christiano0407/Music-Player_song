const musicContainer = document.getElementById(`music-container`); 

const playBtn = document.getElementById(`play`); 
const prevBtn = document.getElementById(`prev`); 
const nextBtn = document.getElementById(`next`); 

const audio = document.getElementById(`audio`); 

const progress = document.getElementById(`progress`); 
const progressContainer = document.getElementById(`progress-container`); 
const title = document.getElementById(`title`); 
const cover = document.getElementById(`cover`); 
const currTime = document.querySelector('#currTime');
const durTime = document.querySelector('#durTime');

// Song titles
const songs = ['hey', 'summer', 'ukulele'];

// Keep track of song
let songIndex = 2;

// Initially load song details into DOM
loadSong (songs[songIndex]);

// Update song details
function loadSong(song) {
  title.innerText = song;
  audio.src = `../assets/music/${song}.mp3`;
  cover.src = `../assets/images/${song}.jpg`;
}

// Play song
function playSong() {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');

  audio.play();
}

