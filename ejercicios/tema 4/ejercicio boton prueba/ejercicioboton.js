// funcion que cambia el color del elemento que hagas click

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

function bgChange(e) {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  e.target.style.backgroundColor = rndCol;
}

function inicia() {
  // hacerlo sobre un parrafo, un div, una imagen y un h2. hacer click en esos elementos

  const btn = document.querySelector('button');
  btn.onclick = bgChange;

  const h2 = document.querySelector('h2');
  h2.onclick = bgChange;

  const div = document.querySelector('div');
  div.onclick = bgChange;

  const p = document.querySelector('p');
  p.onclick = bgChange;

  const img = document.querySelector('img');
  img.onclick = bgChange;

  // igual para evento focus

  img.onfocus = bgChange;
  p.onfocus = bgChange;
  div.onfocus = bgChange;
  btn.onfocus = bgChange;
  h2.onfocus = bgChange;
}

window.addEventListener('load',inicia);