function toggle() {
    const toggle = document.querySelector('.toggle');
    const banner = document.querySelector('.banner');
    banner.classList.toggle('active')
    toggle.classList.toggle('active')
}

const textDisplay = document.getElementById('efeito')
const phrases = ['Xbox Series X','Playstation 5', 'PC Gamer', 'Jogos Xbox', 'Jogos Ps5']
let i = 0
let j = 0 
let currentPhrase = []
let isDeleting = false
let isEnd = false

function loop () {
  isEnd = false
  textDisplay.innerHTML = currentPhrase.join('')

  if (i < phrases.length) {

    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j])
      j++
      textDisplay.innerHTML = currentPhrase.join('')
    }

    if(isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j])
      j--
      textDisplay.innerHTML = currentPhrase.join('')
    }

    if (j == phrases[i].length) {
      isEnd = true
      isDeleting = true
    }

    if (isDeleting && j === 0) {
      currentPhrase = []
      isDeleting = false
      i++
      if (i === phrases.length) {
        i = 0
      }
    }
  }
  const spedUp = Math.random() * (80 -50) + 50
  const normalSpeed = Math.random() * (300 -200) + 200
  const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed
  setTimeout(loop, time)
}

loop()



const myElement = document.getElementById('myImg'),
myImgs = [
    'images/1.png',
    'images/2.png',
    'images/3.png',
    'images/5.png',
    'images/8.png',
    'images/9.png',
    'images/10.png',
    'images/11.png'
];

function chageImage(myElement, myImgs) {
    'use strict';

    setInterval(function () {

       const mySlider = Math.floor(Math.random() * myImgs.length);

        myElement.src = myImgs[mySlider];
    }, 8000);
}
chageImage(myElement, myImgs);

const imgs = document.getElementById('img');
const img = document.querySelectorAll('#img .imag')

let idx = 0;

function carrossel() {
  idx++;

  if(idx > img.length - 1) {
    idx = 0;
  }

  imgs.style.transform = `translateX(${-idx * 500}px)`;
}

setInterval(carrossel, 4800)