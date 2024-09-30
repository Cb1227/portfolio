// Scroll to specific section
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
      behavior: 'smooth'
    });
  }
  
  // Contact form submission
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
  });
  