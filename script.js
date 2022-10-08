// Elementos del DOM
var texto = document.getElementById('texto');
var palabras = document.getElementById('palabras');
var caracteres = document.getElementById('caracteres');
var limiteCaracteres = document.getElementById('limiteCaracteres');
var caracteresAlerta = document.getElementById('caracteresAlerta');
var mensajeAlerta = document.getElementById('mensajeAlerta');

var ultimoCaracterPermitido = '';

mensajeAlerta.style.display = 'none';

texto.addEventListener("input", () => {
  let numPalabras = texto.value.replace(/\n/g, ' ').split(' ').filter(item => item != '');
  palabras.innerHTML = numPalabras.length;

  let numCaracteres = texto.value.split('');
  caracteres.innerHTML = numCaracteres.length;

  if (numCaracteres.length <= 100) {
    mensajeAlerta.style.display = 'none';
    caracteresAlerta.style.color = '#fff';
    ultimoCaracterPermitido = texto.value;
  }

  if (numCaracteres.length > 100) {
    texto.value = ultimoCaracterPermitido;
    mensajeAlerta.style.display = 'inline';
    caracteresAlerta.style.color = '#f00';
    mensajeAlerta.style.color = '#f00';
  }
});