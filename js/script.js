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

<script>
  // Función para verificar si un elemento está en el viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Función para añadir la clase de animación
  function animateOnScroll() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      if (isInViewport(card)) {
        card.classList.add('scroll-animated');
      }
    });
  }

  // Escuchar el evento scroll y cargar inicial
  window.addEventListener('scroll', animateOnScroll);
  window.addEventListener('load', animateOnScroll);
</script>

