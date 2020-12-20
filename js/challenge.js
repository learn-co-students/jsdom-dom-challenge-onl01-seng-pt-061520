// selecting CSS elements by ID & storing them into a variable
const display = document.querySelector('h1#counter');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const heart = document.getElementById('heart');
const resumeButton = document.getElementById('pause');
const likes = document.querySelector('.likes');
const makeComments = document.querySelector('input');
const comments = document.querySelector('.comments');

// declaring num starting at 0
let num = 0;

// declares intervalID to call runFunction once a second (1000)
let intervalID = setInterval(runFunction, 1000);

// runFunction function that adds the incrementing num on the 'counter'
function runFunction() {
    display.innerText = num++
};

// resume/pause/play button with event listener to "click" and it will call pause function
resumeButton.addEventListener("click", pauseEventHandler);

// pause function created.
function pauseEventHandler(e) {
    clearInterval(intervalID);
    resumeButton.innerHTML = "resume";
    resumeButton.removeEventListener("click", pauseEventHandler);
    resumeButton.addEventListener("click", resumeEventHandler);
};

// play/resume function created.
function resumeEventHandler(e) {
    intervalID = setInterval(runFunction, 1000);
    resumeButton.innerHTML = "pause";
    resumeButton.removeEventListener("click", resumeEventHandler);
    resumeButton.addEventListener("click", pauseEventHandler);
};

minus.addEventListener("click", downEventHandler);

function downEventHandler(e) {
    num--;
    display.innerText = num--
};

plus.addEventListener("click", upEventHandler);

function upEventHandler(e) {    
    num++;
    display.innerText = num++
};

heart.addEventListener("click", heartEventHandler);

function heartEventHandler(e) {
    const newLi = document.createElement('li');
    newLi.innerText = `${display.innerText} has been liked`;
    likes.appendChild(newLi);
};

makeComments.addEventListener("change", commentEventHandler);

function commentEventHandler(e) {
    const newLi = document.createElement('li');
    newLi.innerText = this.value;
    comments.appendChild(newLi);
};




