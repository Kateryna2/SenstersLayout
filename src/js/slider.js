$('.js-reviews-list').slick({
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
$('.js-reviews-list-nav').slick({
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



// const $slider = $('.info-block--inside');
// $slider
//     .on('init', () => {
//         mouseWheel($slider);
//     })
//     .slick({
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         dots: false,
//         vertical: true,
//         verticalScrolling: true,
//         infinite: false,
//         arrows: false,
//         speed: 1000
//     });
//
// function mouseWheel($slider) {
//     $($slider).on('wheel', {$slider: $slider}, mouseWheelHandler);
// }
//
// function mouseWheelHandler(event) {
//     event.preventDefault();
//     const $slider = event.data.$slider;
//     const delta = event.originalEvent.deltaY;
//     if (delta > 0) {
//         $slider.slick('slickNext');
//     } else {
//         $slider.slick('slickPrev');
//     }
// }





