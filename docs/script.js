'use strict'
//  ============ FUNCTIONS ================
//
//  == HEX COLOR ==

function randomColor() {
  let chars = '0123456789ABCDEF';
  let sharp = '#';
  for (let i = 0; i < 6; i++) {
    sharp += chars[Math.floor(Math.random() * 16)];
  }
  return sharp;
}

//  ============ BACKGORUND KOLOR ================
//  NO BORRES ESTO ISMA LACRA  
//
// document.querySelector('#botonete').addEventListener('click', function () {
//   let cubitoColor = document.querySelector('.cubito');
//   cubitoColor.style.backgroundColor = randomColor();
//   console.log(randomColor());
// });

document.querySelector('#botonete').addEventListener('click', function () {
  getComputedStyle(document.documentElement).getPropertyValue('--kolor');
  document.documentElement.style.setProperty('--kolor', randomColor());
  console.log(randomColor());
});

//  ============ STORAGE ================

if (typeof (Storage) != 'undefined') {
  console.log('Storage available');
} else {
  console.log('Storage isnt available');
}

let interactions = {
  kolor: randomColor(),
  shadowType: 'inset',
  shadowY: '0px',
  shadowX: '0px',
  shadowBlur: '0px',
  shadowSpread: '0px'
}

let interactLog = JSON.parse(localStorage.getItem('interactions'));
localStorage.setItem('interactions', JSON.stringify(interactions));
document.querySelector('#stats').append(interactLog.kolor);
console.log(interactLog);
