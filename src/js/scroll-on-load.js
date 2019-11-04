const $link = $('.banner--down a');
const $root = $('body,html');

$link.on('click', function() {
  $.cookie('handleScroll', '1');
});

$(window).on('load', function() {
  if($.cookie('handleScroll') === '1') {
    $root.animate({scrollTop: $('.banner').outerHeight() - $('.header').outerHeight()}, 1600);
    setTimeout(() => {
      $.cookie('handleScroll', '0');
    }, 400);
  }
});