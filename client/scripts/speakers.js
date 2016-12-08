
var harry = '<p>Harry Aydin</p>'
var victor = '<p>Bret Victor</p>'

var martin = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit'

  if ($(window).width() > 700) {
    $('#lone-blurb').html(victor).css({
      'visibility': 'hidden',
      'opacity': 0
    });

    $( "#lone-speaker" ).hover(
      function() {
        $('#lone-blurb').html(harry).css({
          'visibility': 'visible',
          'opacity': 1,
          'color': 'orange'
          });
      }, function() {
        $('#lone-blurb').css({
          'visibility': 'hidden',
          'opacity': 0,
        });
    })

    $( "#middle-speaker" ).hover(
      function() {
        $('#lone-blurb').css({
          'visibility': 'visible',
          'opacity': 1,
          'color': 'orange'
          }).html(martin);
      }, function() {
        $('#lone-blurb').css({
          'visibility': 'hidden',
          'opacity': 0,
          });
    })
  } else {
    console.log('< 800');

$( "#lone-speaker" ).hover(
  function() {
    $('#lone-blurb').html(larry).css({
      'visibility': 'visible',
      'opacity': 1,
      'color': 'orange'
      });
  }, function() {
    $('#lone-blurb').css({
      'visibility': 'hidden',
      'opacity': 0,
      });
})
