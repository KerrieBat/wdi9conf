
$("#speakers-nav").click(function (){
  $('html, body').animate({
    scrollTop: $("#speakers").offset().top
   }, 2000);
});


var introLoc = $('#intro').offset();
var aboutLoc = $('#about').offset();
var speakersLoc = $('#speakers').offset();
var programLoc = $('#program').offset();
var mentorLoc = $('#mentor').offset();
var registerLoc = $('#register').offset();

console.log(introLoc);
console.log(aboutLoc);
