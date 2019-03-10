$(document).ready(function (e) {
    var menu = $("#mainNavbar");

    // Initialise Particles
    particlesJS.load('homeParticles', 'static/js/particlesjs-config.json');

    // Scroll Operations
    $(document).on('scroll', function (e) {
        checkMenu();
    });

    function init() {
        checkMenu();
        hidePreloader();
    }

    // Menu Checker
    function checkMenu() {
        let scrollH = $(document).scrollTop();
        if (scrollH > 0) {
            menu.addClass('fixed-layout');
        } else {
            menu.removeClass('fixed-layout');
        }
    }

    function hidePreloader() {
        $("#preloader").find('.absolute-center').fadeOut();
        setTimeout(function () {
            $("#preloader").fadeOut();
        }, 500);
    }

    init();
});