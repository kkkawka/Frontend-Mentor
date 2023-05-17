const hideElement = document.querySelector('.before-submit')
const showElement = document.querySelector('.after-submit')
const submit = document.querySelector('.submit-btn')
const getValue = document.querySelectorAll('.shape')
const points = document.querySelector('#rated-points')

// tage value from input
getValue.forEach((get)=> {
  get.addEventListener('click', ()=>{
    let takenInputValue = get.value
    points.innerHTML = takenInputValue
  })
})

// switch "main" element, by adding or removing class "display-none"
submit.addEventListener('click', () => {
  hideElement.classList.add('display-none')
  showElement.classList.remove('display-none')
 
  
})
