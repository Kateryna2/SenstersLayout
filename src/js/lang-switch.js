$(document).on('click', '.js-lang-switch', function() {

    var $this = $(this);
    $this.addClass('is-active').siblings().removeClass('is-active');

});