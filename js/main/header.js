'use strict';

const navLinks = document.querySelector('#navLinks');
const closeMenuIcon = document.querySelector('#closeMenuIcon');
const hamburguerMenuIcon = document.querySelector('#hamburguerMenuIcon');

closeMenuIcon.addEventListener('click', () => {
    navLinks.style.right = '-180px';
});

hamburguerMenuIcon.addEventListener('click', () => {
    navLinks.style.right = '0';
});
