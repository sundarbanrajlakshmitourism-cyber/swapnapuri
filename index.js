
    
// Interactive Gallery Modal
const gallery = document.getElementById('galleryGrid');
const images = gallery.querySelectorAll('img');
let modal, modalImg;
function createModal() {
  modal = document.createElement('div');
  modal.style.position = 'fixed';
  modal.style.top = 0;
  modal.style.left = 0;
  modal.style.width = '100vw';
  modal.style.height = '100vh';
  modal.style.background = 'rgba(0,0,0,0.8)';
  modal.style.display = 'flex';
  modal.style.alignItems = 'center';
  modal.style.justifyContent = 'center';
  modal.style.zIndex = 9999;
  modal.style.cursor = 'zoom-out';
  modalImg = document.createElement('img');
  modalImg.style.maxWidth = '90vw';
  modalImg.style.maxHeight = '80vh';
  modalImg.style.borderRadius = '16px';
  modal.appendChild(modalImg);
  modal.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  document.body.appendChild(modal);
  modal.style.display = 'none';
}
createModal();
images.forEach(img => {
  img.addEventListener('click', () => {
    modalImg.src = img.src;
    modal.style.display = 'flex';
  });
});

// List your slide image filenames here, or fetch them from the server if you want it fully automatic
const slideImages = [
  "img/slide1.png",
  "img/slide2.png",
  "img/slide3.png",
  "img/slide4.png",
  "img/slide5.png",
  "img/slide6.png"
  // Add more as you add files!
];

// Dynamically create slide images and dots
const slideshow = document.getElementById('heroSlideshow');
const dotsContainer = document.getElementById('slideshowDots');
let slides = [];
let dots = [];

slideImages.forEach((src, i) => {
  const img = document.createElement('img');
  img.src = src;
  img.alt = "Slideshow Image";
  img.className = "slide";
  if (i === 0) img.classList.add('active');
  slideshow.insertBefore(img, dotsContainer);
  slides.push(img);

  const dot = document.createElement('span');
  dot.className = "dot" + (i === 0 ? " active" : "");
  dot.addEventListener('click', () => {
    showSlide(i);
    stopSlideshow();
    startSlideshow();
  });
  dotsContainer.appendChild(dot);
  dots.push(dot);
});

let current = 0, timer;
function showSlide(idx) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === idx);
    dots[i].classList.toggle('active', i === idx);
  });
  current = idx;
}
function nextSlide() {
  showSlide((current + 1) % slides.length);
}
function startSlideshow() {
  timer = setInterval(nextSlide, 4000);
}
function stopSlideshow() {
  clearInterval(timer);
}
showSlide(0);
startSlideshow();

document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.getElementById('mainNav');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      const isOpen = navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });
    // Close menu when a link is clicked (on mobile)
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function() {
        if (window.innerWidth <= 800) {
          navMenu.classList.remove('open');
          navToggle.setAttribute('aria-expanded', false);
        }
      });
    });
  }
});



const callBtn = document.getElementById('callBtn');
const callPopup = document.getElementById('callPopup');
const closeCallPopup = document.getElementById('closeCallPopup');
callBtn.addEventListener('click', function() {
  callPopup.style.display = 'block';
});
closeCallPopup.addEventListener('click', function() {
  callPopup.style.display = 'none';
});
// Optional: Close popup when clicking outside
window.addEventListener('click', function(e) {
  if (callPopup.style.display === 'block' && !callPopup.contains(e.target) && e.target !== callBtn) {
    callPopup.style.display = 'none';
  }
});
