'use strict';

// $('h1').click(function(){
//     if(!$(this).hasClass('red'))
//           $(this).addClass('red');
// });

//Change Color on Button Click
$('#color-change').click(function(){
    $('h1').toggleClass('red');
});

//Change font on Button click
$('#font-change').click(function() {
  $('h1').toggleClass('font');
});

//Change background color
$('#background-change').click(function() {
  $('h1').toggleClass('background');
});

//Change input value
$('input')
  .keyup(function() {
    let value = $(this).val();
    $('h1').text(value);
  })

  .keyup();
