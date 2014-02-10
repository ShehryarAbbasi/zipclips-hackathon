// Create video elements for each entry in clipData

for (var i = 0; i < clipData.length; i++) {
  clipTag = '<video class = "mainvideo" controls="controls" width="300" height="225" name="' + clipData[i].title +
            '" src="' + clipData[i].url +'"></video>';
  $("#videos").append(clipTag);
}

$(".mainvideo").dblclick(function() {
  alert("This video was double clicked");
});



