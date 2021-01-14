document.addEventListener("DOMContentLoaded", ()=>{
  let counter = 0
  const counterElement = document.getElementById("counter");
  const minusButton = document.getElementById("minus");
  const plusButton = document.getElementById("plus");
  const likesButton = document.getElementById("heart");
  const pauseButton = document.getElementById("pause");
  const submitButton = document.getElementById("submit");
  const likesElement = document.getElementsByClassName("likes")[0];
  const commentBox = document.getElementById("comment");
  let comment_id = document.getElementsByTagName("form")[0];


  let counterInterval =  setInterval(function(){updateCounter(1)},1000);
  
  const numberOfLikes = {};
  
  likesButton.addEventListener("click",() =>{
    numberOfLikes[counter] = (numberOfLikes[counter] || 0)+1;
    likesElement.innerHTML =  Object.keys(numberOfLikes).map(function(key){return `<li>${key} has ${numberOfLikes[key]} likes </li>`}).join(" \n ");
  });

  function updateCounter(value){
    counter = counter+value
    counterElement.textContent = counter;
  };

  minusButton.addEventListener("click",()=> {
    updateCounter(-1);
  });

  plusButton.addEventListener("click",()=> {
    updateCounter(1);
  });

 
  pauseButton.addEventListener("click",()=> {
    console.log("pause button clicked1");
    if (pauseButton.innerHTML == " pause "){
    pauseButton.innerHTML = " resume ";
    minusButton.disabled = true;
    plusButton.disabled = true;
    likesButton.disabled = true;
    clearInterval(counterInterval);

  }else{
    pauseButton.innerHTML = " pause ";
    minusButton.disabled = false;
    plusButton.disabled = false;
    likesButton.disabled = false;
    counterInterval =  setInterval(function(){updateCounter(1)},1000);
  }
  });

  submitButton.addEventListener("click",()=> {
   console.log(commentBox.value[0]);
  });

  comment_id.addEventListener("submit",function(a){
    a.preventDefault()
    let b=this.children[0]
    let c=b.value;
    b.value="";
    let d=document.querySelector(".comments")
    let e=document.createElement("p")
    e.innerText=c
    d.appendChild(e)
  })
});