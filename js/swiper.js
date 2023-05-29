$(document).ready(function () {
    $('.owl-one').owlCarousel({
        items: 1,
    });
    $(".owl-two").owlCarousel({
        margin: 10,
        loop: true,
        autoplay: true,
        dots: true,
        slideBy: 4,
        autoplayTimeout: 3000,
        responsive: {
            0: { //for width 0px and up
                items: 1 //show only one item at a time
            },
            600: { //for width 600px and up
                items: 4 //show 3 items at a time
            },
        }

    });
    $(".owl-three").owlCarousel({
        margin: 30,
        responsive: {
            0: { //for width 0px and up
                items: 1 //show only one item at a time
            },
            600: { //for width 600px and up
                items: 3 //show 3 items at a time
            },
        }
    });
    $(".owl-four").owlCarousel({
        margin: 100,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        loop: true,
        smartSpeed: 5000,
        responsive: {
            0: { //for width 0px and up
                items: 2 //show only one item at a time
            },
            600: { //for width 600px and up
                items: 4 //show 3 items at a time
            },
            1000: { //for width 1000px and up
                items: 6 //show 5 items at a time
            }
        }
    });

    $(document).ready(function () {
        $(".owl-carousel").owlCarousel({
            loop: true,
            items: 2,
            margin: 10,
            autoplay: true,
            autoplayTimeout: 3000,
        });
    });

    var owl2 = $('.owl-two');
    var owl3 = $('.owl-three');
    owl2.owlCarousel();
    $('.owl__next').click(function () {
        owl2.trigger('next.owl.carousel');
    })
    $('.owl__previous').click(function () {
        owl2.trigger('prev.owl.carousel', [300]);
    })
    $('.owl__next__event').click(function () {
        owl3.trigger('next.owl.carousel');
    })
    $('.owl__previous__event').click(function () {
        owl3.trigger('prev.owl.carousel', [300]);
    })
    $('.testimonial__next').click(function () {
        owl3.trigger('next.owl.carousel');
    })
    $('.testimonial__previous').click(function () {
        owl3.trigger('prev.owl.carousel', [300]);
    })
});