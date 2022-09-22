//timer 
const commentForm = document.getElementById('comment-form')
const commentList = document.getElementById('list')
const pause = document.getElementById('pause')
const likes = document.getElementsByClassName('likes')[0]
const like = document.getElementById('heart')
const increment = document.getElementById('plus')
const decrement = document.getElementById('minus')
const timer = document.getElementById('counter')
let isPaused = false
let interval = setInterval(()=>{
  if (!isPaused) {
    timer.innerText = parseInt(timer.innerText) +1

  }
}, 1000)

increment.addEventListener('click', ()=> {
  timer.innerText = parseInt(timer.innerText) +1
})
decrement.addEventListener('click', ()=> {
  timer.innerText = parseInt(timer.innerText) -1
})
// like
like.addEventListener('click', ()=>{
  const currentSpan = document.getElementById(timer.innerText)
  let timesLiked = 1
  if (currentSpan){
      currentSpan.innerText=parseInt(currentSpan.innerText) +1
  }
  else {
  likes.innerHTML += `
    <li>
      ${timer.innerText} has been liked <span id = '${timer.innerText}'>${timesLiked}</span>
    </li>
  `
  }
})
pause.addEventListener('click', ()=> {
if (isPaused) {
  like.disabled = false
  increment.disabled = false
  decrement.disabled = false
  pause.innerText = 'pause'
} else {
like.disabled = true
increment.disabled = true
decrement.disabled = true
pause.innerText = 'resume'
}
isPaused = !isPaused
})
// restart button which does not exist 
function restart() {
  like.disabled = false
  increment.disabled = false
  decrement.disabled = false
  pause.innerText = 'pause'
  isPaused = false
  timer.innerText = '0'
  likes.innerHTML = ''
}
commentForm.addEventListener('submit', (event)=> {
event.preventDefault()
const data = new FormData(event.target)
const comment = data.get('comment')
commentList.innerHTML +=`
  <p> 
    ${comment}
  </p>
`
})


