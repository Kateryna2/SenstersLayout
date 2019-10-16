const $callMe = $('.js-call');
const $body = $('body');
const $close = $('.close');

$callMe.on('click', function() {
  $body.toggleClass('is-call-open');
});
$close.on('click', function() {
  $body.removeClass('is-call-open');
});