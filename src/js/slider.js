$('.js-reviews-list').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    fade: true,
    infinite: true,
    asNavFor: '.js-reviews-list-nav'
});
$('.js-reviews-list-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.js-reviews-list',
    dots: false,
    arrows: true,
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    speed: 1000,
    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><img src="../img/arrow-back.png" alt="previous"></button>',
    nextArrow: '<button class="slick-next" aria-label="Next" type="button"><img src="../img/arrow-forward.png" alt="next"></button>'
});