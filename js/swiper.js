$(document).ready(function () {
    $('.owl-one').owlCarousel({
        items: 1,
    });
    $(".owl-two").owlCarousel({
        margin: 10,
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
});