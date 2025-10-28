const boton = document.getElementById('hola');
const titulo = document.getElementById('titulo');
const colorOriginal = '#333'; // Color original definido en el CSS

boton.addEventListener('click', () => {
  // Genera un color aleatorio
  const colorNuevo = '#' + Math.floor(Math.random() * 16777215).toString(16);
  titulo.style.color = colorNuevo;

  // Vuelve al color original después de 5 segundos
  setTimeout(() => {
    titulo.style.color = colorOriginal;
  }, 5000);
});