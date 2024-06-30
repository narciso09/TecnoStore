// Obtener elementos del slider
const sliderContainer = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
let slideIndex = 0;

// Función para avanzar el slider
function nextSlide() {
  slideIndex = (slideIndex + 1) % totalSlides;
  updateSlider();
}

// Función para actualizar la posición del slider
function updateSlider() {
  const slideWidth = slides[0].offsetWidth;
  sliderContainer.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

// Desplazamiento automático cada 5 segundos
setInterval(nextSlide, 5000);

// Obtener elementos del slider
const slider = document.querySelector('.products-slider');
const sliderItems = document.querySelector('.products-grid');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// Event listener para el botón de siguiente
nextBtn.addEventListener('click', () => {
  slider.scrollLeft += sliderItems.offsetWidth + 20; // 20 es el margen entre productos
});

// Event listener para el botón de anterior
prevBtn.addEventListener('click', () => {
  slider.scrollLeft -= sliderItems.offsetWidth + 20; // 20 es el margen entre productos
});
document.addEventListener('DOMContentLoaded', () => {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const offersGrid = document.querySelector('.offers-grid');
    const offerCards = document.querySelectorAll('.offer-card');
  
    let currentIndex = 0;
  
    const updateCarousel = () => {
      const cardWidth = offerCards[0].offsetWidth + 20; // Width of card plus margin
      offersGrid.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    };
  
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % offerCards.length;
      updateCarousel();
    });
  
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + offerCards.length) % offerCards.length;
      updateCarousel();
    });
  
    updateCarousel();
  });
 