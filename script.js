// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      document.getElementById(targetId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
  
  // Simple fade-in animations on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.2
  });
  
  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });
  
  // Redirect to 404 page if project link is broken
  document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', function(event) {
      fetch(this.href, { method: 'HEAD' })
        .then(response => {
          if (!response.ok) {
            event.preventDefault();
            window.location.href = '404.html'; // Redirect to 404 page if link is broken
          }
        })
        .catch(() => {
          event.preventDefault();
          window.location.href = '404.html'; // Redirect to 404 page if there's an error
        });
    });
  });
  