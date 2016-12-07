
//for header
$(document).ready(function(){
    $('.slider').slider({full_width: true});
    $('.slider').slider({transition: 4500});
    $('.collapsible').collapsible();
    $('.slider').slider({indicator: false});
    $(".button-collapse").sideNav();
    //onclick of nav items hide sidenav
    $('.parallax').parallax();

    var options = [{
      selector: '#staggered-test',
      offset: 800,
      callback:function(el) {Materialize.showStaggeredList($(el)); }
    }];

    Materialize.scrollFire(options);
  });
  console.log('here are the queens of GA');

//NAV BAR
