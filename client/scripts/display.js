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
      selector: '#room1',
      offset: 500,
      callback:function(el) {Materialize.showStaggeredList($(el)); }
    }];

    Materialize.scrollFire(options);

    //room 2 animation
    var options = [{
      selector: '#room2',
      offset: 700,
      callback:function(el) {Materialize.showStaggeredList($(el)); }
    }];

    Materialize.scrollFire(options);

    //force nav anchor jump to correct height
    var shiftWindow = function() { scrollBy(0, -50) };
    if (location.hash) shiftWindow();
    window.addEventListener("hashchange", shiftWindow);
  });

  // navigation scrollBy

  $("ul").click('a', function (event){
    var navItemID = event.target.id
    // removing '-nav' from ID to scroll to appropriate section
    var section = navItemID.split('-')[0]
    if (section === 'login') {
      section = 'register'
    }
    var scrollTo = $('#' + section).offset().top;
    $('html, body').animate({
      scrollTop: scrollTo-55
    }, 500);
  });


  console.log('here are the queens of GA');
