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


// para el haz de luz del ratón cuando hace hover simulando magia

const light = document.querySelector('.cursor-light');

document.addEventListener('mousemove', (e) => {
  const offsetX = light.offsetWidth / 2;
  const offsetY = light.offsetHeight / 2;
  light.style.left = `${e.clientX - offsetX}px`;
  light.style.top = `${e.clientY - offsetY}px`;
});


const elements = document.querySelectorAll('[class^="c"]');

elements.forEach(el => {
  el.addEventListener('mouseenter', () => {
    light.style.display = 'block';
  });
  el.addEventListener('mouseleave', () => {
    light.style.display = 'none';
  });
});



const maga = document.querySelector(".fotoMaga");

const magaImgs = {
  derecha: {
    normal: "Fotos/magaNoHover.png",
    hover: "Fotos/magaHover.png"
  },
  izquierda: {
    normal: "Fotos/magaNoHoverIzquierda.png",
    hover: "Fotos/magaHoverIzquierda.png"
  }
};

// Función para cambiar las imágenes
function cambiarMaga(lado) {
  const imgs = magaImgs[lado];
  maga.querySelector(".magaNoHover").src = imgs.normal;
  maga.querySelector(".magaHover").src = imgs.hover;
}

// Detectar movimiento del mouse y determinar lado
document.addEventListener("mousemove", (e) => {
  const mitad = window.innerWidth / 2;
  if (e.clientX < mitad) {
    cambiarMaga("izquierda");
  } else {
    cambiarMaga("derecha");
  }
});
