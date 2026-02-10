const overlay = document.getElementById("overlay");
const imagenGrande = document.getElementById("imagenGrande");

// Selecciona todos los cuadros
const imagenes = document.querySelectorAll(".galeria div img");

imagenes.forEach(img => {
  img.addEventListener("click", () => {
    imagenGrande.src = img.src;
    overlay.style.display = "flex";
  });
});

// Cerrar al hacer click en el fondo
overlay.addEventListener("click", () => {
  overlay.style.display = "none";
  imagenGrande.src = "";
});

