var counter = document.getElementById('counter')
let number = 0;
var paused = false;

var minus = document.getElementById('minus');
var plus = document.getElementById('plus');
var heart = document.getElementById('heart');
var pause = document.getElementById('pause');

function subtractTimer(){
  number--;
  counter.innerHTML = number;
}

function addTimer() {
  number ++;
  counter.innerHTML = number;
}

function stopTimer(){
  paused = !paused;
  alert(`Stopped Timer (${paused})`);
}

function likeNumber(){
  let ul = document.getElementById('likes')
  let li = document.createElement('li');
  li.appendChild(document.createTextNode(number));
  ul.appendChild(li);
  li.innerHTML = number;
  console.log("poop")
}

function startGame(){
  var i = setInterval(function(){
    if (paused === false){
      number++;
      counter.innerHTML = number;
    }
  }, 1000);
}
