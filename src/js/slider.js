$(document).ready(function(){
    $('.reviews-list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        arrows: false,
        fade: true,
        asNavFor: '.reviews-list-nav'
    });
    $('.reviews-list-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.reviews-list',
        dots: false,
        arrows: true,
        centerMode: true,
        focusOnSelect: true,
});
});