$(document).ready(function (e) {
    var menu = $("#mainNavbar");

    // Initialise Particles
    particlesJS.load('homeParticles', 'static/js/particlesjs-config.json');

    // Scroll Operations
    $(document).on('scroll', function (e) {
        checkMenu();
    });

    // Conference Table Hanlder
    $(".conference-timings-day").on('click', function(e){
        e.preventDefault();
        showSchedule($(this));
    });

    $(".smooth-scroll").on("click", function(e){
        let hash = this.hash;
        let target = $(hash);
        if(target != undefined || target != 'undefined'){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 2000, function(){
                window.location.hash = hash;
            });
        }
    });

    function init() {
        checkMenu();
        hidePreloader();
        startHomeAnimation();
        showSchedule($(".conference-timings-day.active"));
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

    function startHomeAnimation(){
        $("#home .logo-home, #home .tagline").hide();
        setTimeout(function(){
            $("#home .logo-home").fadeIn(1000);
            setTimeout(function(){
                $("#home .tagline").fadeIn(500);
            }, 1200);
        }, 1000);
    }

    function hidePreloader() {
        $("#preloader").find('.absolute-center').fadeOut();
        setTimeout(function () {
            $("#preloader").fadeOut();
        }, 500);
    }

    function showSchedule(target) {
        let current = $(".conference-timings-day.active");
        let currentTarget = $(current.attr('data-target'));
        if(current != undefined){
            currentTarget.fadeOut();
            current.removeClass('active');
        }
        let newTarget = $(target.attr('data-target'));
        setTimeout(function(){
            newTarget.fadeIn();
        }, 500);
        target.addClass('active');
    }

    init();
});