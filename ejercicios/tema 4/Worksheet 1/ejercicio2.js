function mostrarPosicion(e) {
    console.log(e.pageX,e.pageY);
  }

document.addEventListener('mousemove', mostrarPosicion);