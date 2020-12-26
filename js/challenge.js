// As a user, I should see the timer increment every second once the page has loaded.

// As a user, I can manually increment and decrement the counter using the plus and minus buttons.
const counter = document.getElementById('counter');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const heart = document.getElementById('heart');
const pause = document.getElementById('pause');

let count = 0

plus.addEventListener("click", function() {
 counter.innerText = `${count ++}`;
});

minus.addEventListener("click", function() {
 counter.innerText = `${count --}`;
});

// As a user, I can 'like' an individual number of the counter. I should see count of the number of 'likes' associated with that number.
heart.addEventListener("click", function() {
 counter.appendChild() = "liked";
});
// As a user, I can pause the counter, which should

