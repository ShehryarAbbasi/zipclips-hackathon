// Create video elements for each entry in clipData

// Load test data from array and display
// for (var i = 0; i < clipData.length; i++) {
//   clipTag = '<video class = "videoclip" controls="controls" width="272" height="153" name="' + clipData[i].title +
//             '" src="' + clipData[i].url +'"></video>';
//   $("#videos").append(clipTag);
// }

$("#clipcount").innerHTML = clipData.length.str;

$(".videoclip").dblclick(function() {
  alert("This video was double clicked");
});

$(".videoclip").hover(function() {
    $(this).append($("<span> Video Clip Data </span>"));
  }, function() {
    $(this).find("span:last").remove(); 
  }
);

var x = document.getElementById("mapholder");

// getLocation will be called in the camera app and coords attached to video metadata
var getLocation = function() {
  if (Modernizr.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    x.innerHTML = "Geolocation is not supported.";
  }
};

// Hardcoded position for Hack Reactor
var position = {
  coords : {
    latitude : 37.7836953,
    longitude : -122.4091845
  }
}

var showPosition = function(position) {
  var latlon = position.coords.latitude + "," + position.coords.longitude;
  var img_url = "http://maps.googleapis.com/maps/api/staticmap?center="
    + latlon + "&zoom=14&size=300x225&markers=color:red|" + latlon + "&sensor=false";
  var imgTag = "<img id='map' src='" + img_url + "'>";
  $("#mapholder").append(imgTag).hide();
};

var showError = function() {
  console.log('Geolocation.getCurrentPosition failed.')
};

showPosition(position);

$("#mapholder").click(function(){
  // $(this).find("img").hide();
  $(this).hide();
});

$("#eventname").click(function(){
  // alert("Eventname clicked");
  $("#mapholder").show();
});
