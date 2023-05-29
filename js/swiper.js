$(document).ready(function () {
    $('.owl-one').owlCarousel({
        items: 1,
    });
    $(".owl-two").owlCarousel({
        margin: 10,
        loop: true,
        autoplay: true,
        dots: true,
        rtl: false,
        slideBy: 4,
        autoplayTimeout: 5000,
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
        rtl: true,
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
        $(".owl-five").owlCarousel({
            loop: true,
            items: 2,
            margin: 10,
            autoplay: true,
            autoplayTimeout: 3000,
            responsive: {
                0: { //for width 0px and up
                    items: 1 //show only one item at a time
                },
                600: { //for width 600px and up
                    items: 2 //show 3 items at a time
                },
            }

        });
    });
    $(document).ready(function () {
        $(".owl-six").owlCarousel({
            loop: true,
            items: 3,
            margin: 10,
            autoplay: true,
            rtl: true,
            autoplayTimeout: 3000,
            responsive: {
                0: { //for width 0px and up
                    items: 1 //show only one item at a time
                },
                600: { //for width 600px and up
                    items: 2 //show 3 items at a time
                },
            }

        });
    });

    var owl2 = $('.owl-two');
    var owl3 = $('.owl-three');
    var owl__success = $('.owl-five');
    owl2.owlCarousel();
    $('.team__next').click(function () {
        owl2.trigger('next.owl.carousel');
    })
    $('.team__previous').click(function () {
        owl2.trigger('prev.owl.carousel', [300]);
    })
    $('.owl__next__event').click(function () {
        owl3.trigger('next.owl.carousel');
    })

    $('.owl__previous__event').click(function () {
        owl3.trigger('prev.owl.carousel', [300]);
    })
    $('.success__next').click(function () {
        owl__success.trigger('next.owl.carousel');
    })
    $('.success__previous').click(function () {
        owl__success.trigger('prev.owl.carousel', [300]);
    })
});