let btt = document.getElementsByTagName('button')[0]
let btt1 = document.getElementsByTagName('button')[1]
let btt3 = document.getElementsByTagName('button')[2]
let content = document.querySelector("#container")

btt.addEventListener('click', ()=> {
  let createDiv = document.createElement("div")
  let x = document.createElement("div")

  createDiv.classList.add('box')
  content.appendChild(createDiv)
  
  x.classList.add('x')
  createDiv.appendChild(x)
  x.addEventListener('click', () => {
    createDiv.remove()
  })

})



btt1.addEventListener("click", () => {
  let createDiv = document.createElement("div")
  let rozwin = document.createElement("div")


  createDiv.classList.add('box1')
  content.appendChild(createDiv)
  // createDiv.innerText = lorem
  
  rozwin.classList.add('close')
  createDiv.appendChild(rozwin)
  rozwin.innerText =  '+'
  createDiv.style.height = '2rem'
  rozwin.addEventListener('click', () => {
    if (createDiv.style.height == '2rem') {
      createDiv.style.height = 'auto'
    } else createDiv.style.height = '2rem'

  })

})
