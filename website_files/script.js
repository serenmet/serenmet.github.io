// Single Page Navigation Functionality
function navigateToSection(targetId) {
  // Hide all sections
  const sections = document.querySelectorAll('.page-section');
  sections.forEach(section => {
    section.classList.remove('active-section');
  });

  // Display targeted section
  const targetSection = document.getElementById(targetId);
  if (targetSection) {
    targetSection.classList.add('active-section');
  }

  // Update navbar active state
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${targetId}`) {
      link.classList.add('active');
    }
  });

  // Scroll smooth to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Attach event listeners to top navbar links
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = link.getAttribute('href').replace('#', '');
      navigateToSection(targetId);
    });
  });
});