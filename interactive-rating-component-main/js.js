const hideElement = document.querySelector('.before-submit')
const showElement = document.querySelector('.after-submit')
const submit = document.querySelector('.submit-btn')
const getValue = document.querySelectorAll('.shape')
const points = document.querySelector('#rated-points')
submit.disabled = 'disabled'


getValue.forEach((get) => {
  get.addEventListener('click', () => {
    points.innerHTML = get.value
    submit.disabled = false
  })
})

// replaces the main element, by adding or removing class "display-none" in sections
submit.addEventListener('click', () => {
  hideElement.classList.add('display-none')
  showElement.classList.remove('display-none')
})
