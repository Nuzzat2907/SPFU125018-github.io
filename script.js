console.log("Portfolio Loaded Successfully");

// Simple smooth scroll (extra feature)
document.querySelectorAll('a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
