/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

/* =============== SCROLL SECTIONS ACTIVE LINK =============== */
function scrollActive() {
  const sections = document.querySelectorAll('section[id]');
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.add('active-link');
    } else {
      document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.remove('active-link');
    }
  });
}
window.addEventListener('scroll', scrollActive);

/* =============== CHANGE BACKGROUND HEADER =============== */
function scrollHeader() {
  const header = document.getElementById('header');
  // When the scroll is greater than 50 viewport height
  // add the scroll-header class to the header tag
  if (this.scrollY >= 50) {
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }
}
window.addEventListener('scroll', scrollHeader);

/* =============== SHOW MENU =============== */
function showMenu() {
  const navMenu = document.getElementById('nav-menu');
  const navToggle = document.getElementById('nav-toggle');
  const navClose = document.getElementById('nav-close');

  /* ===== MENU SHOW ===== */
  /* Validate if constant exists */
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu');
    });
  }

  /* ===== MENU HIDDEN ===== */
  /* Validate if constant exists */
  if (navClose) {
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
    });
  }
}
showMenu();

/* =============== REMOVE MENU MOBILE =============== */
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));

/* =============== MIXITUP FILTER PRODUCTS =============== */
const mixer = mixitup('.products__content', {
  selectors: {
    target: '.products__card',
  },
  animation: {
    duration: 300,
  },
});

/* Default filter products */
mixer.filter('.new');

/* Link active products */
const linkProducts = document.querySelectorAll('.products__item');

function activeProducts() {
  linkProducts.forEach((l) => l.classList.remove('active-product'));
  this.classList.add('active-product');
}

linkProducts.forEach((l) => l.addEventListener('click', activeProducts));
