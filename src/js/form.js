const $form = $('.js-form');

$form.on('submit', function(e) {
  e.preventDefault();

  sendAjaxSubscribeForm(`${document.location.origin}/wp-content/themes/sensters/php/mail.php`, $(this));
});

function sendAjaxSubscribeForm(url, $form) {
  $.ajax({
      url: url,
      type: 'POST',
      dataType: 'html',
      data: $form.serialize(),
      success: function success() {
        $('body').addClass('is-modal-open');
        $('.modal.is-open').removeClass('is-open');
        $('#thank-you').addClass('is-open');

        $form.find('input').each(function() {
          $(this).val('');
        });      
      },
      error: function(error) {
        console.log(error);
      }
  });
}