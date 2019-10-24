// const $document = $(document);
// const $body = $('body');
// const $infoBlock = $('.js-info-block');

// $document.on('scroll', function() {
//   if($infoBlock) {
//     infoBlockAnimation();
//   }
// });

// $infoBlock.on('scroll', function() {
//   console.log(
//     ($(this).find('.info-block--inside').height() + 155),
//     ($(this).scrollTop())
//   );
// });

// function infoBlockAnimation() {
//   let posTop = $infoBlock[0].getBoundingClientRect().top;

//   $infoBlock.css('overflow', 'hidden');

//   if(posTop <= 0) {
//     $body.css({
//       'position': 'absolute',
//       'overflow': 'hidden',
//       'height': '100vh',
//       'width': '100%'
//     });

//     $infoBlock.css('overflow', 'scroll');
//   }
// }