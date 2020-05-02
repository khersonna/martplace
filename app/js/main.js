$(function () {


    $(".rate-star").rateYo({
        rating: 4.5,
        starWidth: "12px",
        readOnly: true
    });

    $('.product-slider__inner').slick({
        dots: false,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        prevArrow: '<button class="slick-arrow slick-prev"><img src="../images/icons/arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="slick-arrow slick-next"><img src="../images/icons/arrow-right.svg" alt=""></button>',
    });

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 400,
        from: 30,
        to: 300,
        grid: false,
        prefix: "$"
    });



    var miver = mixitup('.products__inner-holder');
});