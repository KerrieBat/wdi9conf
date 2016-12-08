
$("ul").click('a', function (event){
  var navItemID = event.target.id
  // removing '-nav' from ID to scroll to appropriate section
  var section = navItemID.split('-')[0]
  var scrollTo = $('#' + section).offset().top;
  $('html, body').animate({
    scrollTop: scrollTo
  }, 500);
});
