
var larry = 'larry'
var martin = 'martin'
var windowWidth = $(window).width()

function hover() {

  if (windowWidth > 600) {

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
        }).html(martin);
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
  } else {
    $('#lone-blurb').html(martin).css({
      'visibility': 'visible',
      'opacity': 1
    });
    $( "#lone-speaker" ).hover(function(){}, function(){})
    $( "#middle-speaker" ).hover(function(){},function(){})
  }
};

hover();
$(window).resize(function() {
  console.log('resize');
  hover();
});
