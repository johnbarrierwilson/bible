var editor = new MediumEditor('.reader', {
  // buttons: ['bold', 'italic', 'underline', 'anchor', 'header1', 'header2', 'quote', 'superscript', 'subscript', 'strikethrough', 'unorderedlist', 'orderedlist', 'pre', 'image', 'indent', 'outdent'],
  buttons: ['bold', 'italic', 'quote'],
  disableEditing: true
});

var editor = new MediumEditor('.editor', {
  // buttons: ['bold', 'italic', 'underline', 'anchor', 'header1', 'header2', 'quote', 'superscript', 'subscript', 'strikethrough', 'unorderedlist', 'orderedlist', 'pre', 'image', 'indent', 'outdent'],
  buttons: ['bold', 'italic', 'quote']
});

$('a, #close-editor').click(function() {
  $('.reader, .editor').toggleClass('show')
})
;
