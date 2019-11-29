const $document = $(document);
const $body = $('body');
const $infoBlock = $('.js-info-block');
const $textInfoBlock = $('.js-text-info-block');
const $infoBlockInside = $('.info-block--inside');

$infoBlock.on('wheel', function () {
  $textInfoBlock.each(function () {
    let $this = $(this);
    let thisPosTop = $this.position().top;
    let thisHref = $this.attr('id');


    if (thisPosTop >= 0 && thisPosTop < 10) {
      $(`.js-info-block-number[href="#${thisHref}"]`).addClass('is-active');
      $(`.js-info-block-number[href="#${thisHref}"]`).siblings().removeClass('is-active');
    }
  });
});


// $(window).on('scroll touchmove mousewheel', function () {
//
//   if ($(window).scrollTop() >= $('.quote').outerHeight() + $('.banner').outerHeight()) {
//     $body.css({
//       'overflow': 'hidden',
//       'height': '100%',
//     });
//     $infoBlock.css({
//       'pointer-events': 'auto'
//     });
//   }
//   if ($('#end').hasClass('is-active') || $('#begin').hasClass('is-active')) {
//     $body.css({
//       'overflow': '',
//       'height': '',
//     });
//   }
//
// });


if (window.matchMedia('(min-width: 768px)').matches) {
  $(function () {
    var controller = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: 0.1
      }
    });
    new ScrollMagic.Scene({
      triggerElement: '.info-block-section',
      triggerHook: 0
    })
      .setPin('.info-block-title')
      //.addIndicators()
      .addTo(controller);

    $('.text--info-block').each(function () {
      new ScrollMagic.Scene({
        triggerElement: this,
        duration: '100%'
      });
    });
  });

  $(function () {
    var controller2 = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: 1,
        duration: 700
      }
    });
    new ScrollMagic.Scene({
      triggerElement: '.banner-main--down',
    })
      .setClassToggle('.info-block-title--scroll', 'invisible')
      //.addIndicators()
      .addTo(controller2);
  });
}