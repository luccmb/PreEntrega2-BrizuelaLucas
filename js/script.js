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