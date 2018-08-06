$(document).ready(function () {

    function animation() {

        var windowHeight = $(window).height();
        var scrollDown = $(window).scrollTop();

        $('.animation').each(function () {
            var position = $(this).offset().top;

            if (position < scrollDown + windowHeight - 100) {
                var animacija = $(this).attr('data-animation');
                $(this).addClass(animacija);
            }
        });
    }

    animation();

    $(window).scroll(function () {
        animation();
    });


//    SHOW/HIDE SEARCH

    $('.search-mobile .fa').click(function (e) {
        e.preventDefault();
        $('.search-toggle').slideToggle(function () {
        });
    });

    //SHOW/HIDE SUBMENU
    
    $('.nav-link .fa').click(function (e) {
        e.preventDefault();
        if(screen.width <= 992){
        $(this).parent().next('.submenu').slideToggle();
    }
    });



});


