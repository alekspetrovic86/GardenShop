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


    //ANIMATE HAMBURGER BUTTON

    $('.navbar-toggler').click(function () {
        $(this).toggleClass('active');
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
        if (screen.width <= 992) {
            $(this).parent().next('.submenu').slideToggle();
            $(this).toggleClass('fa-chevron-down fa-chevron-up');
        }
    });
    
    //EASE SCROLL

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
    });
    
    

    //SLIDER
    
    if ($('.owl-carousel').length > 0) {
        
        $('.lead-slider-1').owlCarousel({
            loop: true,
            margin: 0,
            responsiveClass: true,
            dots: false,
            autoplay: true,
            nav:true,
            items:1

            
        });
        
        
        
        
        
        $('.popular-products-slider').owlCarousel({
            loop: true,
            margin: 30,
            responsiveClass: true,
            dots: false,
            nav: true,
            autoplay: false,

            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });
        
        $('.portfolio-slider').owlCarousel({
            loop: true,
            margin: 30,
            responsiveClass: true,
            dots: true,
            autoplay: true,

            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });
    }
    
    
    
    
    

});


