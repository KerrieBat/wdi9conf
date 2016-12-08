$(document).ready(function(){
    $('.slider').slider({full_width: true});
    $('.slider').slider({transition: 4500});
    $('.collapsible').collapsible();
    $('.slider').slider({indicator: false});
    $(".button-collapse").sideNav();

    //parallax main image
    $('.parallax').parallax();

    //fade in main heading
    $('img.hidden').fadeIn(4000).removeClass('hidden');

    //room 1 animation
    var options = [{
      selector: '#staggered-test',
      offset: 500,
      callback:function(el) {Materialize.showStaggeredList($(el)); }
    }];

    Materialize.scrollFire(options);

    //room 2 animation
    var options = [{
      selector: '#staggered-test2',
      offset: 700,
      callback:function(el) {Materialize.showStaggeredList($(el)); }
    }];

    Materialize.scrollFire(options);

    //force nav anchor jump to correct height
    var shiftWindow = function() { scrollBy(0, -50) };
    if (location.hash) shiftWindow();
    window.addEventListener("hashchange", shiftWindow);
  });

  console.log('here are the queens of GA');
