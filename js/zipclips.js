// Create video elements for each entry in clipData

for (var i = 0; i < clipData.length; i++) {
  clipTag = '<video class = "mainvideo" controls="controls" width="400" height="300" name="' + clipData[i].title +
            '" src="' + clipData[i].url +'"></video>';
  $("#videos").append(clipTag);
  console.log(clipTag);
}
