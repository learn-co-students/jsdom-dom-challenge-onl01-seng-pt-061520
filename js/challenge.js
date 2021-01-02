const counter  = document.getElementById('counter')
let pauseButton = document.getElementById("pause")
let minusButton = document.getElementById("minus")
let plusButton = document.getElementById("plus")
let likeButton = document.getElementById("heart")
let submitButton = document.getElementById("submit")
const myTextbox = document.getElementById('comment-input')
const form = document.getElementById("comment-form")
let numberArray = []



document.addEventListener("DOMContentLoaded", function() {
   IntervalID = window.setInterval(myCallback, 1000)
   form.addEventListener("submit", function(event) {
    function makeACommentElement (){
        let userInput = myTextbox.value
        elementLike = document.getElementById("list")
        let li = document.createElement('li')
        li.innerHTML = userInput
        elementLike.appendChild(li)
    }
    event.preventDefault()

    makeACommentElement()
    myTextbox.value = ""
     })

     likeButton.addEventListener("click", function() {

        element = document.getElementsByClassName("likes")[0]
        element.innerHTML = ""
        number = parseInt(counter.innerText)
        numberArray.push(number)
        distinctNumbers = [...new Set(numberArray)].sort(function(a, b){return a-b});
        
        let i = 0;
        while (i < distinctNumbers.length){

            let li = document.createElement('li')
           countNumber = numberArray.filter(x => x===distinctNumbers[i]).length
           if (countNumber > 1){
           li.innerHTML = ` ${distinctNumbers[i]} has been liked ${countNumber} times`
           element.appendChild(li)
           i++;}
           else if (countNumber == 1){
            li.innerHTML = ` ${distinctNumbers[i]} has been liked ${countNumber} time`
            element.appendChild(li)}
            i++;
           }
    })


  })

  function myCallback(){
    counter.innerText = parseInt(counter.innerText) + 1
  } 

  plusButton.addEventListener("click", function() {
    counter.innerText = parseInt(counter.innerText) + 1
  })
  
  minusButton.addEventListener("click", function() {
    counter.innerText = parseInt(counter.innerText) - 1
  })

  pauseButton.addEventListener("click", function() {
    if (pauseButton.innerText == "pause"){
    pauseButton.innerText = "resume"
    window.clearInterval(IntervalID)
    plusButton.disabled = true
    minusButton.disabled = true
    likeButton.disabled = true
    submitButton.disabled = true
    }
    else if (pauseButton.innerText == "resume"){
        IntervalID = window.setInterval(myCallback, 1000)
        pauseButton.innerText = "pause"
        plusButton.disabled = false
        minusButton.disabled = false
        likeButton.disabled = false
        submitButton.disabled = false

    }
    
   

   

   

  })

 



