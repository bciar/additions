$(document).ready(function() {
    // toggle movile menu
    $(".topnav__mobile-toggle").click(function(e) {
        e.preventDefault();

        $(this)
            .find("i")
            .toggleClass("fa-bars fa-times");
        $(".topnav__inner-wrapper").toggleClass("open");
    });

    // launch modal on click
    $(".js-launch-modal").click(function(e) {
        e.preventDefault();
        $(".modal--get-started").fadeIn("fast");
    });

    // fade out modal on background click
    $(".modal").click(function(e) {
        e.preventDefault();
        $(this).fadeOut();
    });

    // allow click on inner modal
    $(".modal__inner").click(function(e) {
        e.stopPropagation();
    });

    // If user clicks on home link from the nav, skip animation
    $("a#homelink-menu, a#homelink-logo").bind("click", function() {
        sessionStorage.setItem("SkipAnimation", "true");
    });
});

// Disable AOS fading on mobile
AOS.init({
    disable: 'mobile'
});