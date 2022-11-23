console.log("Welcome to my spotify website");
// Initialize the variable
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
/*at the DOM function when we put for each 
function then we have to write array.from*/

let songs = [
    { songName: "Dil ka Pata", filePath: "songs/0.mp3", coverPath: "covers/cover1.jpg" },
    { songName: "Kalavathi", filePath: "songs/1.mp3", coverPath: "covers/cover1.jpg" },
    { songName: "Ram siya ram (lofi)", filePath: "songs/2.mp3", coverPath: "covers/cover2.jpg" },
    { songName: "Dil se Dil", filePath: "songs/3.mp3", coverPath: "covers/cover3.jpg" },
    { songName: "Mayya Mainu", filePath: "songs/4.mp3", coverPath: "covers/cover4.jpg" },
    { songName: "Lal ishq", filePath: "songs/5.mp3", coverPath: "covers/cover5.jpg" },
    { songName: "Jaikal Mahakal", filePath: "songs/6.mp3", coverPath: "covers/cover6.jpg" },
    { songName: "Atif aslam (mashup)", filePath: "songs/7.mp3", coverPath: "covers/cover7.jpg" },
    { songName: "Dhaga Dhaga", filePath: "songs/8.mp3", coverPath: "covers/cover8.jpg" },
    { songName: "Old vs new", filePath: "songs/9.mp3", coverPath: "covers/cover9.jpg" }
]
// we cannot put for each function for html collection
songItems.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
});
/*Play(): The play() function is an inbuilt function in p5. js library. 
This function is used to play the loaded audio on the web. 
The play function should call after the loadSound() function.*/
// audioElement.play();

// handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) { //pause() function is an inbuilt function in p5. js library. This function is used to pause the played audio on the web.
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');  //The classList property returns the CSS classnames of an element. 
        masterPlay.classList.add('fa-pause-circle');   // we can manipulate the class with this add, remove and more..
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        gif.style.opacity = 0;
    }
});

// Listen of Events
audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');

    // update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100); // will show percentage
    console.log(progress);
    myProgressBar.value = progress;// progess the progressbar according to the progess var to incrasing the value of myProgress
});

myProgressBar.addEventListener('change', () => {  //The change() method triggers the change event, or attaches a function to run when a change event occurs.
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
});

// i should be learn this
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.src = `songs/${songIndex}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

// for next button
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >=9) {
        songIndex = 0;
    }
    else {
        songIndex += 1
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
// for previous button
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

function click(){
    alert("Please press back to go home !")
}