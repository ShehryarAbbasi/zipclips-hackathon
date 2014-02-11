// Create video elements for each entry in clipData

var now = new Date();

for (var i = 0; i < clipData.length; i++) {
  clipTag = '<video class = "videoclip" controls="controls" width="300" height="225" name="' + clipData[i].title +
            '" src="' + clipData[i].url +'"></video>';
  $("#videos").append(clipTag);
}

$(".videoclip").dblclick(function() {
  alert("This video was double clicked");
});

$(".videoclip").hover(
  function() {
    $(this).append($("<span> Video Clip Data </span>"));
  }, function() {
    $(this).find("span:last").remove(); 
  }
);

var x = document.getElementById("mapholder");

var getLocation = function() {
  if (Modernizr.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    x.innerHTML = "Geolocation is not supported.";
  }
};

var showPosition = function(position) {
  console.log("Running showPosition");
  var latlon = position.coords.latitude + "," + position.coords.longitude;

  var img_url = "http://maps.googleapis.com/maps/api/staticmap?center="
    + latlon + "&zoom=14&size=400x300&sensor=false";
    $("mapholder").innerHTML = "<img src='" + img_url + "'>";

  console.log(img_url);
};

var showError = function() {
  console.log('Geolocation.getCurrentPosition failed.')
};

getLocation();
