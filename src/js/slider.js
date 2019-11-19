const $reviewsList = $('.js-reviews-list');
const $reviewsListNav = $('.js-reviews-list-nav');

$reviewsList.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    arrows: true,
    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><img src="/wp-content/themes/sensters/img/arrow-back.png" alt=" "></button>',
    nextArrow: '<button class="slick-next" aria-label="Next" type="button"><img src="/wp-content/themes/sensters/img/arrow-forward.png" alt=" "></button>',
    fade: true,
    infinite: true,
    speed: 1000,
    asNavFor: '.js-reviews-list-nav'
});

$reviewsListNav.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.js-reviews-list',
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    speed: 1000,
    fade: false
});




