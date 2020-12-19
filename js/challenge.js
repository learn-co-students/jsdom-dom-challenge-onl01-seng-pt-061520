const counter = document.getElementById('counter')
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const likeList = document.querySelector('ul')
const heart = document.getElementById('heart')
const pause = document.getElementById('pause')
const commentList = document.getElementById('list')
const commentInput = document.getElementById('comment-input')
const submit = document.getElementById('submit')

let timer = setInterval(increase, 1000);

let count = 1;

function increase() {
    counter.innerText = count;
    count++;
};

minus.addEventListener('click', function(e) {
    count--;
});
plus.addEventListener('click', function(e) {
    count++;
});

heart.addEventListener('click', function(e) {
    let number = count-1    
    let listId = document.getElementById(number)
    if (listId){
        let stringArray = listId.innerText.split(" ");
        let likeCount = parseInt(stringArray[4])
        likeCount ++
        listId.innerText = `${number} has been liked ${likeCount} times`
    }else{
        let newList = document.createElement('li');
        newList.setAttribute("id", `${number}`);
        newList.innerHTML = `${number} has been liked 1 time`
        likeList.appendChild(newList);
    }  
})

function stopTimer() {
    clearInterval(timer)
}

function disableButtons() {
    minus.disabled = true;
    plus.disabled = true;
    heart.disabled = true;
    submit.disabled = true;
}

function enableButtons() {
    minus.disabled = false;
    plus.disabled = false;
    heart.disabled = false;
    submit.disabled = false;
}

pause.addEventListener("click", function(e) {
    if (pause.innerText === "pause") {
        clearInterval(timer);
        disableButtons();
        pause.innerText = "resume";
    }else{
        timer = setInterval(increase, 1000); 
        enableButtons();
        pause.innerText = "pause"
    }
})

submit.addEventListener('click', function(e) {
    const newComment = document.createElement('p');
    newComment.innerText = commentInput.value;
    commentList.appendChild(newComment);
    commentInput.value = ""
    e.preventDefault();
})




