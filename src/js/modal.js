const $modalCall = $('.js-modal-call');
const $body = $('body');
const $modalClose = $('.js-modal-close');

const $cookiesClose = $('.js-cookies-close');
const $cookies = $('.js-cookies');


$modalCall.on('click', function() {
  let targetModal = $(this).data('modal');
  $body.toggleClass('is-modal-open');
  $(`#${targetModal}`).addClass('is-open');
});

$modalClose.on('click', function() {
  $body.removeClass('is-modal-open');
  $('.modal.is-open').removeClass('is-open');
});

$cookiesClose.on('click', function() {
  $cookies.addClass('modal--cookies');
});

