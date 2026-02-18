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



const audio = document.getElementById('audioFondo');
const playPauseBtn = document.getElementById('playPauseBtn');
const volumenSlider = document.getElementById('volumen');

// Volumen inicial
audio.volume = 0.5;

// Pausar / Reproducir
playPauseBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = 'Pausar';
  } else {
    audio.pause();
    playPauseBtn.textContent = 'Continuar';
  }
});

// Control de volumen
volumenSlider.addEventListener('input', () => {
  audio.volume = volumenSlider.value;
});




const gati = document.getElementById("gati");
const galeria = document.querySelector(".galeria");

function moverGato() {
  const anchoGaleria = galeria.offsetWidth;
  const anchoGato = gati.offsetWidth;

  // Reinicio limpio
  gati.style.transition = "none";
  gati.style.opacity = "1";
  gati.style.transform = "scaleX(1)";
  gati.style.left = `${anchoGaleria}px`;

  // Forzar reflow REAL
  void gati.offsetWidth;

  // Animación
  gati.style.transition = "left 12s linear";
  gati.style.left = `-${anchoGato}px`;
}

// Cuando termina el movimiento
gati.addEventListener("transitionend", (e) => {
  if (e.propertyName === "left") {
    gati.style.opacity = "0";
  }
});

// Cada 60s (puedes volver a 120000)
setInterval(moverGato, 120000);