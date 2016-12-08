
var harry = '<p>Harry Aydin</p>'
var victor = '<p>Bret Victor</p>'

function responsiveJS() {

  if ($(window).width() > 700) {

    $( '.speakers-page p' ).removeClass('flow-text');

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
        }).html(victor);
      }, function() {
        $('#lone-blurb').css({
          'visibility': 'hidden',
          'opacity': 0,
          });
    })
  } else {
    $( '#lone-blurb' ).html(victor).css({
      'visibility': 'visible',
      'opacity': 1,
      });

      if ($(window).width() > 400) {
        $( '.speakers-page p' ).addClass('flow-text');
        $( '#lone-blurb p' ).addClass('flow-text');
      }
      $( "#middle-speaker" ).off();
      $( "#lone-speaker" ).off();
  }
};

responsiveJS();
$( window ).scroll(function() {
  responsiveJS();
})
