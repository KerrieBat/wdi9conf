
var larry = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit'

var martin = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit'

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

$( "#middle-speaker" ).hover(
  function() {
    $('#lone-blurb').html(martin).css({
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
