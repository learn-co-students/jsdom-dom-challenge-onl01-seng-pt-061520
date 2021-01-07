var counter = document.getElementById('counter')
let number = 0;
var paused = false;

var minus = document.getElementById('minus');
var plus = document.getElementById('plus');
var heart = document.getElementById('heart');
var pause = document.getElementById('pause');

function stopTimer(){
  paused = !paused;
  alert(`Stopped Timer (${paused})`);
}

function startGame(){
  var i = setInterval(function(){
    if (paused === false){
      number++;
      counter.innerHTML = number;
    }
  }, 1000);
}
