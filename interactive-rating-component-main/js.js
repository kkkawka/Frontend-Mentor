const hideElement = document.querySelector('.before-submit')
const showElement = document.querySelector('.after-submit')
const submit = document.querySelector('.submit-btn')
const getValue = document.querySelectorAll('.shape')
const points = document.querySelector('#rated-points')
submit.disabled = 'disabled'

// forEach - executes a provided function once for each array element.
getValue.forEach((get) => {
  get.addEventListener('click', () => {
    points.innerHTML = get.value // retrieves value from "input" and places this value in the destination place.
    submit.disabled = false  // unlocks "submit" button
  })
})

// replaces the main element, by adding or removing class "display-none" in sections
submit.addEventListener('click', () => {
  hideElement.classList.add('display-none')
  showElement.classList.remove('display-none')
})