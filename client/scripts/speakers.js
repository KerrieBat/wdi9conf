
var harry = '<p>Harry is a full stck web developer from Melbourne. He does not like to mention expertise in HTML5, CSS3, jQuery, Ruby on Rails and Angular.</p>'
var victor = '<p>Bret is an interface designer, computer scientist, and electrical engineer. He works as a researcher at the Communications Design Group, and is known for his talks on the future of technology.</p>'

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
