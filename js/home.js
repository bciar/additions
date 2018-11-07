$(document).ready(function() {
    // If SkipAnimation is set to true in sessionStorage, do not show animation
    if (sessionStorage.getItem("SkipAnimation") != "true") {
        $(".loading-screen").removeClass("hidden");
    }

    // UTILITY: checks if mobile device
    function isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
        );
    }

    // UTILITY: check if is in viewport
    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top + 100;
        var elementBottom = elementTop + $(this).outerHeight();

        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    // UTILITY: throttling
    var throttle = function throttle(func, limit) {
        var inThrottle = void 0;
        return function() {
            var args = arguments;
            var context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(function() {
                    return (inThrottle = false);
                }, limit);
            }
        };
    };

    var currentSlide = "";

    $(window).on(
        "resize scroll",
        throttle(function() {
            if ($(window).width() > 723) {
                // handling nav transparency on scroll
                if (
                    $(window).scrollTop() >=
                    $(".fullscreen").offset().top +
                        $(".fullscreen").outerHeight() -
                        150
                ) {
                    $(".topnav.topnav--transparent")
                        .stop()
                        .removeClass("topnav--transparent")
                        .addClass("animated");
                } else {
                    $(".topnav")
                        .not(".topnav--transparent")
                        .stop()
                        .addClass("topnav--transparent")
                        .removeClass("animated");
                }

                // handling title visibility on scroll
                $(".waypoint").each(function() {
                    if ($(this).isInViewport()) {
                        if (currentSlide !== "#" + $(this).attr("id")) {
                            currentSlide = "#" + $(this).attr("id");
                        }

                        $(".waypoint")
                            .not(currentSlide)
                            .find(".slide-title-container")
                            .stop()
                            .fadeOut("fast");

                        $(this)
                            .find(".slide-title-container")
                            .stop()
                            .fadeIn();
                    }
                });

                var windowMidPoint =
                    $(window).scrollTop() + $(window).innerHeight() / 2;

                if (windowMidPoint <= $("#slide-4 .midpoint").offset().top) {
                    $("#slide-4 .absolute").removeClass("absolute");
                } else {
                    $("#slide-4 .slide-title-container").addClass("absolute");
                }

                if (windowMidPoint <= $("#get-inspired-endpoint").offset().top && windowMidPoint >= $('#slide-get-inspired').offset().top) {
                    $("#slide-get-inspired .slide-title-container").css('position', "fixed");
                } else {
                    $("#slide-get-inspired .slide-title-container").css('position', "absolute");
                }
            }
        }, 80)
    );

    if (!isMobile()) {
        $.stellar({
            verticalScrolling: true,
            horizontalScrolling: false,
            positionProperty: "transform",
            hideDistantElements: false
        });
    }

    setTimeout(function() {
        $(".loading-screen").slideUp(700);
        localStorage.addI;
    }, 3000);
});

// Always scroll back to the top of the page when the page is loaded
window.onbeforeunload = function() {
    window.scrollTo(0, 0);
};

// If the user manually reloads the page, show animation
if (window.performance.navigation.type == 1) {
    sessionStorage.removeItem("SkipAnimation");
}
