const $fillInput = $('.js-fill-input');
const $filledInput = $('.js-filled-input');
const $filledTitle = $('.js-filled-title');

$fillInput.on('click', function() {
  let $this = $(this);
  let thisService =  $this.parent().find('.js-title').html();

  $filledInput.val(thisService);
  $filledTitle.html(thisService);
});