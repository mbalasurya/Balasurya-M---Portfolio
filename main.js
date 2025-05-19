
// // SPA-style navigation
// const navLinks = document.querySelectorAll('nav a');
// const sections = document.querySelectorAll('main section');

// function showSection(id) {
//   sections.forEach(section => {
//     section.classList.toggle('active', section.id === id);
//   });
//   navLinks.forEach(link => {
//     link.classList.toggle('active', link.getAttribute('href') === '#' + id);
//   });
// }

// navLinks.forEach(link => {
//   link.addEventListener('click', e => {
//     e.preventDefault();
//     const id = link.getAttribute('href').slice(1);
//     history.pushState(null, '', '#' + id);
//     showSection(id);
//   });
// });

// // On load, show correct section from hash
// window.addEventListener('DOMContentLoaded', () => {
//   const hash = window.location.hash.replace('#', '') || 'about';
//   showSection(hash);
// });

// window.addEventListener('popstate', () => {
//   const hash = window.location.hash.replace('#', '') || 'about';
//   showSection(hash);
// });
