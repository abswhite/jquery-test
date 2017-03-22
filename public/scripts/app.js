'use strict';

//Change Color on Button Click
$('#color-change').click(function(){
    let colors = ['#8B8989', '#CD5555', '#8C1717', '#EE3B3B', '#FF6347', '##8B5742', '#FFF5EE', '#CD8500', '#FFCC11', '#777733'];
    let random = colors[Math.floor(Math.random() * colors.length)];
    $('h1').css('color',random);
    $('#color-change').css('color', random);
});

//Change font on Button click
$('#font-change').click(function() {
  let font = ['Oswald','Syncopate','Marvel', 'Rubik Mono One', 'Quantico', 'Wire One', 'Fascinate Inline', 'Monoton', 'Faster One']
  let random = font[Math.floor(Math.random() * font.length)];
  $('h1').css('font-family', random);
  $('#font-change').css('font-family', random);
});

//Change background color
$('#background-change').click(function() {
  let colors = ['#8B8989', '#CD5555', '#8C1717', '#EE3B3B', '#FF6347', '##8B5742', '#FFF5EE', '#CD8500', '#FFCC11', '#777733'];
  let random = colors[Math.floor(Math.random() * colors.length)];
  $('h1').css('background',random);
  $('#background-change').css('background',random);
});

//Change input value
$('textarea')
  .keyup(function() {
    let value = $(this).val();
    $('h1').text(value);
  })

  .keyup();
