function incrementCounter(counter) {
	counter.innerText = parseInt(counter.innerText, 10) + 1;
}

function decrementCounter(counter) {
	counter.innerText = parseInt(counter.innerText, 10) - 1;
}

function pauseToggle(pauseButton) {
	if (pauseButton.innerText === 'pause') {
		pauseButton.innerText = 'unpause';
	} else {
		pauseButton.innerText = 'pause';
	}
}

function likeNumber(likesList, counter) {
	const likesArray = likesList.children;
	for (i = 0; i < likesArray.length; i++) {
		if (likesArray[i].innerText.split(' ')[0] === counter.innerText) {
			const textArray = likesArray[i].innerText.split(' ');
			textArray[3] = parseInt(textArray[3], 10) + 1;
			textArray[4] = 'times';
			likesArray[i].innerText = textArray.join(' ');
			return;
		}
	}
	const newTag = document.createElement('li');
	newTag.innerText = `${counter.innerText} was liked 1 time`;
	likesList.appendChild(newTag);
}

function addComment(commentInput, commentsList) {
	const newTag = document.createElement('p');
	newTag.innerText = commentInput.value;
	commentsList.appendChild(newTag);
}

function incrementCounterEachSecond(counter, pauseButton) {
	setTimeout(incrementCounterEachSecond, 1000, counter, pauseButton);
	if (pauseButton.innerText === 'pause') {
		incrementCounter(counter);
	}
}

document.addEventListener('DOMContentLoaded', function() {
	const counter = document.getElementById('counter');
	const minusButton = document.getElementById('minus');
	const plusButton = document.getElementById('plus');

	const pauseButton = document.getElementById('pause');

	const likeButton = document.getElementById('heart');
	const likesList = document.getElementsByClassName('likes')[0];

	const commentForm = document.getElementById('comment-form');
	const commentInput = document.getElementById('comment-input');
	const commentsList = document.getElementById('list');

	minusButton.addEventListener('click', function() {
		decrementCounter(counter);
	})

	plusButton.addEventListener('click', function() {
		incrementCounter(counter);
	})

	pauseButton.addEventListener('click', function() {
		pauseToggle(pauseButton);
	})

	likeButton.addEventListener('click', function() {
		likeNumber(likesList, counter);
	})

	commentForm.addEventListener('submit', function(e) {
		e.preventDefault();
		addComment(commentInput, commentsList);
	})

	incrementCounterEachSecond(counter, pauseButton);
}) 