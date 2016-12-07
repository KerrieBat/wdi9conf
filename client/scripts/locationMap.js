
function initMap() {
  var ga = {lat: -37.818573, lng: 144.959010};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: ga
  });
  var marker = new google.maps.Marker({
    position: ga,
    map: map
  });
}
