function mapinitializeheader() {
  var latlng = new google.maps.LatLng(-37.823735, 144.991075);
  var myOptions = {
    zoom: 12,
    center: latlng,
    scrollwheel: true,
    scaleControl: false,
    disableDefaultUI: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("mapheader"), myOptions);
  var image = "/theme/img/map-pin.png";
  var marker = new google.maps.Marker({
    map: map,
    icon: image,
    position: map.getCenter()
  });

  var contentString = "<b>Office</b><br><br>Level 1, 41 Stewart St,<br><br>Richmond, Victoria, 3121";
  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  google.maps.event.addListener(marker, "click", function() {
    infowindow.open(map, marker);
  });
}
mapinitializeheader();