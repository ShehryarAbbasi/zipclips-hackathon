// <script>
//   var v = new Array();

//   v[0] = [
//           "videos/video1.mov"
//           ];
//   v[1] = [
//           "videos/video2.mp4video.mp4"
//           ];
//   v[2] = [
//           // "videos/video3.webm",
//           // "videos/video3.ogv",
//           // "videos/video3.mp4",
//           "videos/video3.mov"
//           ];

//   function changeVid(n){
//     var video = document.getElementById('video');

//     if(Modernizr.video && Modernizr.video.webm) {
//       video.setAttribute("src", v[n][0]);
//     } else if(Modernizr.video && Modernizr.video.ogg) {
//       video.setAttribute("src", v[n][1]);
//     } else if(Modernizr.video && Modernizr.video.h264) {
//       video.setAttribute("src", v[n][2]);
//     } else if(Modernizr.video && Modernizr.video.mov)

//     video.load();
//   }
// </script>