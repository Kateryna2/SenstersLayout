const $burger = $('.js-burger');
const $body = $('body');
const $menu = $('.js-menu');

$burger.on('click', function() {
  $body.toggleClass('is-menu-open');
  $menu.toggleClass('menu-visible');
});