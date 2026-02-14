const overlay = document.getElementById("overlay");
const imagenGrande = document.getElementById("imagenGrande");
const imagenes = document.querySelectorAll('.galeria img[class^="cuadro-c"]');


const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");

let indiceActual = 0;

// Convertimos NodeList en array
const listaImagenes = Array.from(imagenes);

// Función para mostrar imagen
function mostrarImagen(index) {
  if (index < 0) {
    indiceActual = listaImagenes.length - 1;
  } else if (index >= listaImagenes.length) {
    indiceActual = 0;
  } else {
    indiceActual = index;
  }

  imagenGrande.src = listaImagenes[indiceActual].src;
}

// Evento click en cada imagen
listaImagenes.forEach((img, index) => {
  img.addEventListener("click", () => {
    indiceActual = index;
    mostrarImagen(indiceActual);
    overlay.style.display = "flex";
  });
});

// Botón siguiente
btnNext.addEventListener("click", (e) => {
  e.stopPropagation(); // evita cerrar overlay
  mostrarImagen(indiceActual + 1);
});

// Botón anterior
btnPrev.addEventListener("click", (e) => {
  e.stopPropagation();
  mostrarImagen(indiceActual - 1);
});

// Cerrar overlay al hacer click fuera
overlay.addEventListener("click", () => {
  overlay.style.display = "none";
});
