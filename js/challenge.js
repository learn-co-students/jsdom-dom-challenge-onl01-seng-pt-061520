const heart = document.querySelector("#heart")
let plus = document.querySelector("#plus")
let minus = document.querySelector("#minus")
let pause = document.querySelector("#pause")
let counter = document.querySelector("#counter")
let submit = document.querySelector('#submit')

document.addEventListener("DOMContentLoaded", function() {
  counterInterval = window.setInterval(counterPlusOne, 1000)
});

function counterPlusOne() {
  counter.innerText = parseInt(counter.innerText) + 1
};

plus.addEventListener("click", function() {
  counter.innerText = parseInt(counter.innerText) + 1
})

minus.addEventListener("click", function() {
  counter.innerHTML = parseInt(counter.innerText) - 1
})

heart.addEventListener("click", function() {
  let ul = document.querySelector("ul.likes");
  let lis = document.querySelectorAll("ul.likes li");

  i = 0
  while (i < lis.length) {
    if (parseInt(lis[i].innerHTML) == parseInt(counter.innerText)) {
      let li = lis[i]
      let span = li.querySelector("span")
      span.innerText = `${parseInt(span.innerText) + 1}`

      if (li.innerText[li.innerText.length - 1] != "s") {
        li.innerHTML += "s"
      }

      return
    }
    i += 1
  }

  let li = document.createElement("li")
  li.innerHTML = `${counter.innerText} has been liked <span>1</span> time`
  ul.appendChild(li)
})

pause.addEventListener("click", function() {
  if (pause.innerText == "pause") {
    window.clearInterval(counterInterval)
    minus.disabled = true
    plus.disabled = true 
    heart.disabled = true
    submit.disabled = true
    pause.innerText = "resume"
  } else {
    counterInterval = window.setInterval(counterPlusOne, 1000)
    minus.disabled = false
    plus.disabled = false
    heart.disabled = false
    submit.disabled = false
    pause.innerText = "pause"
  }
})

submit.addEventListener("click", function(event) {
  let div = document.querySelector("#list")
  let text = document.querySelector("#comment-input").value

  div.innerHTML += `<p>${text}</p>`
  event.preventDefault()
})