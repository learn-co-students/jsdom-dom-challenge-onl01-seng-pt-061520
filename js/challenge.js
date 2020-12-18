document.addEventListener("DOMContentLoaded",function(){
    counterInc()
})

// Set variables for items
const counter = document.querySelector("#counter")
const plus = document.querySelector("#plus")
const minus = document.querySelector("#minus")
const heart = document.querySelector("#heart")
const pause = document.querySelector("#pause")
const commentForm = document.querySelector("#comment-form")
//Notice "." rather than "#"... Using class rather than Id
const comments = document.querySelector(".comments")
const submit = document.querySelector("#submit")
/////////////////////////////////////////////

let pauseBtn = false
let flag = false
let timer = setInterval(counterInc,1000)

// The setInterval() method repeats a given function at every given time-interval.

//The first parameter is the function to be executed,The second parameter indicates the length of the time-interval between each execution.

// Add event Listeners to the variables to make clickable
plus.addEventListener("click",plusCounter)
minus.addEventListener("click",minusCounter)
heart.addEventListener("click",likesCounter)
pause.addEventListener("click",pauseEverything)
submit.addEventListener("click",function(e){
    e.preventDefault()
    addComment()
})

// Make the functions for them
function plusCounter(){
    let counterInc = parseInt(counter.textContent)
    counterInt++
    counter.textContent = counterInt
    //The textContent property sets or returns the text content of the specified node, and all its descendants.
}

function minusCounter(){
    let counterInc = parseInt(counter.textContent)
    counterInt--
    counter.textContent = counterInt
}

function likesCounter(){
    const likesContainer = document.querySelector(".likes")
    const li = document.createElement("li")
    li.setAttribute("id", counter.textContent)
    const exists = likesContainer.children.namedItem(`${counter.textContent}`)
    
    if (exists){
        exists.dataset.likes = parseInt(exists.dataset.likes) + 1
        exists.textContent = `${exists.id} has been liked ${exists.dataset.likes}`
    }else{
        li.dataset.likes = 1
        li.textContent = `${li.id} has been liked ${li.dataset.likes}`
        likesContainer.append(li)
    }
}


function pauseEverything(){
    if (plus.disabled == pauseBtn){
        plus.disabled = !pauseBtn
        minus.disabled = !pauseBtn
        heart.disabled = !pauseBtn
        flag = true
        pause.textContent = "resume"
    }
    else{
        plus.disabled = pauseBtn
        minus.disabled = pauseBtn
        heart.disabled = pauseBtn
        flag = false
        pause.textContent = "pause"
    }
}

function counterInc(){
    let counterInt = parseInt(counter.textContent)
    if(flag == false){
    counter++
    counter.textContent = counterInt}
}

function addComment(){
    const p = document.createElement("p")
    p.textContent = commentForm.comment.value
    comments.append(p)
}
