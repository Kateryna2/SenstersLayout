const $inputFile = $('input:file');

$inputFile.on('change', function() {
  let filePath = $(this).val();
  let text = filePath.substr(filePath.length - 12);
  $(this).addClass('file-selected');
  $(this).siblings().html('...' + text);
  
  if(text.length == 0) {
    $(this).siblings().html('Attach file');    
    $(this).removeClass('file-selected');
  }
});