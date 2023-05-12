const hideElement = document.querySelector('.before-submit')
const showElement = document.querySelector('.after-submit')
const submit = document.querySelector('.submit-btn')
const pkt = document.querySelector('.shape')
const points = document.querySelector('#rated-points')


submit.addEventListener('click', change);
function change() {
hideElement.classList.add('display-none')
showElement.classList.remove('display-none')};

pkt.addEventListener('click', addpkt)
function addpkt(){
    points.innerHTML = 'x'
}
