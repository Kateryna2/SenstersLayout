const $burger = $('.js-burger');
const $body = $('body');

$burger.on('click', function() {
  $body.toggleClass('is-menu-open');
});