const titulo = document.getElementById("titulo");
const boton = document.getElementById("boton");

boton.addEventListener("click", () => {
  titulo.textContent = "¡El DOM ha cambiado!";
  titulo.style.color = "blue";
});