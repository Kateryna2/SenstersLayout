const $document = $(document);
const $body = $('body');
const $infoBlock = $('.js-info-block');
const $textInfoblock = $('.js-text-info-block');

// $document.on('scroll', function() {
//   if($infoBlock.length) {
//     infoBlockAnimation();
//   }
// });

$infoBlock.on('wheel', function () {
    //   let scrollingHeight = $(this).find('.info-block--inside').height() + 155;
    //   let currentScrollPosition = $(this).scrollTop() + $(this).height();
    // // console.log(
    // //   ($(this).find('.info-block--inside').height() + 155),
    // //   ($(this).scrollTop() + $(this).height())
    // // );

    $textInfoblock.each(function () {
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
//     if ($(window).scrollTop() >= $('.quote').outerHeight() + $('.banner').outerHeight() ) {
//         $body.css({
//             'overflow': 'hidden',
//             'height': '100%',
//         });
//
//         if ($( '#end' ).hasClass('is-active') || $( '#begin' ).hasClass('is-active')) {
//             $body.css({
//                 'overflow': 'auto',
//                 'height': 'auto',
//             });
//         }
//         }
//
//
// });


// function infoBlockAnimation() {
//   let posTop = $infoBlock[0].getBoundingClientRect().top - 118;
//
//   $infoBlock.css('overflow', 'hidden');
//
//   if(posTop <= 0) {
//     $body.css({
//       'position': 'absolute',
//       'overflow': 'hidden',
//       'height': '100vh',
//       'width': '100%'
//     });
//
//     $infoBlock.css('overflow', 'scroll');
//   }
// }

