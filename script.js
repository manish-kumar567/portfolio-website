$(document).ready(function () {

    // Explore More → scroll to About section
    $("#scrollBtn").click(function () {
        $('html, body').animate({
            scrollTop: $("#about-section").offset().top - 50
        }, 800);
    });

    // Dark mode toggle
    $("#darkToggle").click(function () {
        $("body").toggleClass("dark-mode");
    });

    // Fade-in animation for all sections
    $("section, .card").css("opacity", 0);
    setTimeout(() => {
        $("section, .card").animate({ opacity: 1 }, 800);
    }, 150);

});
