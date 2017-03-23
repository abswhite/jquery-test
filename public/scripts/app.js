'use strict';

//Change Color on Button Click
$('#color-change').click(function(){
    let colors = ['#8B8989', '#CD5555', '#8C1717', '#EE3B3B', '#FF6347', '##8B5742', '#FFF5EE', '#CD8500', '#FFCC11', '#777733'];
    let random = colors[Math.floor(Math.random() * colors.length)];
    $('#tumblr-div').css('color',random);
    $('#color-change').css('color', random);
    $('')
});

//Change font on Button click
$('#font-change').click(function() {
  let font = ['Oswald','Syncopate','Marvel', 'Rubik Mono One', 'Quantico', 'Wire One', 'Fascinate Inline', 'Monoton', 'Faster One']
  let random = font[Math.floor(Math.random() * font.length)];
  $('#tumblr-div').css('font-family', random);
  $('#font-change').css('font-family', random);
});

$('#size-change').click(function() {
  let size = ['50px', '55px', '70px', '90px', '100px', '120px', '130px', '140px', '150px', '160px'];
  let random = size[Math.floor(Math.random() * size.length)];
  $('#tumblr-div').css('font-size', random);
  console.log(random);
});

//Change background color
$('#background-change').click(function() {
  let colors = ['#8B8989', '#CD5555', '#8C1717', '#EE3B3B', '#FF6347', '##8B5742', '#FFF5EE', '#CD8500', '#FFCC11', '#777733'];
  let random = colors[Math.floor(Math.random() * colors.length)];
  $('#tumblr-div').css('background',random);
  $('#background-change').css('background',random);
});

//Change input value
$('textarea')
  .keyup(function() {
    let value = $(this).val();
    $('#tumblr-div').text(value);
  })
  .keyup();

//Change padding
$('#padding-change').click(function() {
  let padding = ['50px', '60px', '70px', '80px', '100px', '120px', '140px', '160px', '180px'];
  let random = padding[Math.floor(Math.random() * padding.length)];
  $('#tumblr-div').css('padding-right', random);
  $('#tumblr-div').css('padding-left', random);
  $('#tumblr-div').css('padding-top', random);
  $('#tumblr-div').css('padding-bottom', random);
  console.log(random);
});
