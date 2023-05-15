const hideElement = document.querySelector('.before-submit')
const showElement = document.querySelector('.after-submit')
const submit = document.querySelector('.submit-btn')
const getPoints = document.querySelectorAll('.shape')
const points = document.querySelector('#rated-points')

submit.disabled = true

// idk
getPoints.forEach((get)=> {
  get.addEventListener('click', ()=>{
    let taken = get.value
    points.innerHTML = taken
    submit.disabled = false //temporary
    submit.classList.remove('.disabled-remove') //temporary
    submit.style.backgroundColor = 'rgb(251, 116, 19)'// temporary
  })
})

// switch "main" element, by adding or removing class "display-none"
submit.addEventListener('click', () => {
  hideElement.classList.add('display-none')
  showElement.classList.remove('display-none')
 
  
})

