
document.addEventListener("DOMContentLoaded", function() {

let intervalID = window.setInterval(myCallback, 1000);
let decrease = document.getElementById("minus");
let heart = document.getElementById("heart");
let likes = document.querySelector("ul.likes")
let increase = document.getElementById("plus");
let pause = document.getElementById("pause");
let paused = false;


    
function myCallback() {
    let cnter = document.querySelector("h1#counter");
    if (paused == false) {
    cnter.innerHTML = parseInt(cnter.innerHTML) + 1;
    }
}

increase.addEventListener("click", function() {
    let cnter = document.querySelector("h1#counter");
    if (paused == false) {
    cnter.innerHTML = parseInt(cnter.innerHTML) + 1;
    }
})

decrease.addEventListener("click", function() {
    let cnter = document.querySelector("h1#counter");
    if (paused == false) {
    cnter.innerHTML = parseInt(cnter.innerHTML) - 1;
    }
})

heart.addEventListener("click", function(){
    let num = document.querySelector("h1#counter").innerHTML;
    let j = 0;
    let childs = likes.children;
    if (paused == false) {
        for (let i = 0; i < childs.length; i++){
            if (childs[i].innerHTML.split(":")[0] == num) {
                childs[i].innerHTML = `${num}:${parseInt(childs[i].innerHTML.split(":")[1]) + 1}`;
                j = 1;
            }
        }
        if (j === 0) {
            let element = document.createElement('li');
            element.innerHTML = `${num}:1`;
            likes.appendChild(element);
        }
    }


})

pause.addEventListener("click", function() {
    let cnter = document.querySelector("h1#counter");
    if (paused == false) {
        paused = true; 
        pause.innerHTML = 'resume';
    }

    else if (paused == true) {
        cnter.innerHTML = "0"
        paused = false;
    } 
})

document.querySelector("#comment-form").addEventListener("submit", function(event) {
    let comment = document.getElementById("comment-input");
        let division = document.querySelector("div#list");
        let h2 = document.createElement('h2');
        h2.innerHTML = comment.value;
        division.appendChild(h2);
        event.preventDefault();
        
    }, false);

})

