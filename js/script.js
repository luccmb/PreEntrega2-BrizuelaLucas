document.addEventListener('DOMContentLoaded', function() {
    var navbarToggler = document.querySelector('.navbar-toggler');
    var navbarNav = document.getElementById('navbarNav');
    var navLinks = navbarNav.querySelectorAll('.nav-link');

    if (navbarNav.classList.contains('show')) {
        navbarToggler.click();
    }

    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            if (navbarNav.classList.contains('show')) {
                navbarToggler.click();
            }
        });
    });
});

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function animateOnScroll() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      if (isInViewport(card)) {
        card.classList.add('scroll-animated');
      }
    });
  }

  window.addEventListener('scroll', animateOnScroll);
  window.addEventListener('load', animateOnScroll);


