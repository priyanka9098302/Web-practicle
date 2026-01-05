// Simple interactivity
function showAlert(projectName) {
  alert(`You clicked to view ${projectName}!`);
}

// Example DOM manipulation
const header = document.querySelector('header');
header.addEventListener('mouseenter', () => {
  header.style.color = '#ff5733';
});

header.addEventListener('mouseleave', () => {
  header.style.color = '#0077cc';
});
