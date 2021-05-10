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

const songs = [`hey`, `summer`, `ukelele`]; 

let songIndex = 2; 

loadSong(songs[songIndex]); 
