// ===== NAVBAR =====

const navbar = document.getElementById('navbar');
const navLinks = document.getElementById('navLinks');
const navToggle = document.getElementById('navToggle');

// Frosted glass effect on scroll
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
    updateActiveLink();
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    navToggle.classList.toggle('open');
});

// Close mobile menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.classList.remove('open');
    });
});

// Active nav link highlighting based on scroll position
const sections = document.querySelectorAll('section[id]');
const allNavLinks = document.querySelectorAll('.nav-link');

function updateActiveLink() {
    const scrollY = window.scrollY + 80;
    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollY >= top && scrollY < top + height) {
            allNavLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${section.id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// ===== SCROLL REVEAL =====

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, i * 80);
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ===== TYPEWRITER =====

const words = [
    'software engineer',
    'UC Berkeley grad',
    'dancer',
    'builder of things',
    'problem solver',
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeEl = document.getElementById('typewriter');

function type() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
        typeEl.textContent = currentWord.slice(0, --charIndex);
    } else {
        typeEl.textContent = currentWord.slice(0, ++charIndex);
    }

    let delay = isDeleting ? 55 : 105;

    if (!isDeleting && charIndex === currentWord.length) {
        delay = 1800;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        delay = 400;
    }

    setTimeout(type, delay);
}

type();

// ===== PHOTOGRAPHY MODAL =====

const photoModal = document.getElementById('photoModal');
const openPhotoModal = document.getElementById('openPhotoModal');
const closePhotoModal = document.getElementById('closePhotoModal');

openPhotoModal.addEventListener('click', () => {
    photoModal.classList.add('open');
    photoModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
});

function closeModal() {
    photoModal.classList.remove('open');
    photoModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

closePhotoModal.addEventListener('click', closeModal);
photoModal.addEventListener('click', (e) => {
    if (e.target === photoModal) closeModal();
});

// ===== LIGHTBOX =====

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeLightbox = document.getElementById('closeLightbox');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

let photos = [];
let currentIndex = 0;

function openLightbox(index) {
    photos = Array.from(document.querySelectorAll('.photo-grid img'));
    currentIndex = index;
    lightboxImg.src = photos[currentIndex].src;
    lightboxImg.alt = photos[currentIndex].alt;
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    updateLightboxNav();
}

function updateLightboxNav() {
    lightboxPrev.style.display = photos.length <= 1 ? 'none' : 'flex';
    lightboxNext.style.display = photos.length <= 1 ? 'none' : 'flex';
}

document.querySelector('.photo-grid').addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        const imgs = Array.from(document.querySelectorAll('.photo-grid img'));
        openLightbox(imgs.indexOf(e.target));
    }
});

closeLightbox.addEventListener('click', () => {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove('open');
        lightbox.setAttribute('aria-hidden', 'true');
    }
});

lightboxPrev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + photos.length) % photos.length;
    lightboxImg.src = photos[currentIndex].src;
    lightboxImg.alt = photos[currentIndex].alt;
});

lightboxNext.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % photos.length;
    lightboxImg.src = photos[currentIndex].src;
    lightboxImg.alt = photos[currentIndex].alt;
});

document.addEventListener('keydown', (e) => {
    if (lightbox.classList.contains('open')) {
        if (e.key === 'ArrowLeft') lightboxPrev.click();
        if (e.key === 'ArrowRight') lightboxNext.click();
        if (e.key === 'Escape') closeLightbox.click();
    }
    if (photoModal.classList.contains('open') && e.key === 'Escape') closeModal();
});
