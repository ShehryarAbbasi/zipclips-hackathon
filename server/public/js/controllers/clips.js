function ClipsCtrl ($scope) {
  $scope.clips = {
    "100" : {
      "url": "./videos/video1.mov",
      "title": "The Hackathon Begins!",
      "author": "patrickford",
      "createdAt": "Mon Feb 10 2014 15:31:20 GMT-0800 (PST)",
      "eventID": 100
    },
    "101" : {
      "url": "./videos/video2.mov",
      "title": "Lecture Room at Hack Reactor",
      "author": "patrickford",
      "createdAt": "Mon Feb 10 2014 15:27:35 GMT-0800 (PST)",
      "eventID": 100
    },
    "102" : {
      "url": "./videos/video3.mov",
      "title": "Workstations at Hack Reactor",
      "author": "patrickford",
      "createdAt": "Mon Feb 10 2014 15:24:41 GMT-0800 (PST)",
      "eventID": 100
    },
    "103": {
      "url": "./videos/IMG_0100.mov",
      "title": "Rainy Day on Market St.",
      "author": "patrickford",
      "createdAt": "Mon Feb 10 2014 13:25:50 GMT-0800 (PST)",
      "eventID": 100
    },
    "104": {
      "url": "./videos/IMG_0101.mov",
      "title": "Feet on Market St.",
      "author": "patrickford",
      "createdAt": "Mon Feb 10 2014 13:10:05 GMT-0800 (PST)",
      "eventID": 100
    },
    "105": {
      "url": "./videos/IMG_0102.mov",
      "title": "Watch Out for Busses",
      "author": "patrickford",
      "createdAt": "Mon Feb 10 2014 14:27:10 GMT-0800 (PST)",
      "eventID": 100
    },
    "106": {
      "url": "./videos/IMG_0103.mov",
      "title": "Juan Does His Magic",
      "author": "patrickford",
      "createdAt": "Mon Feb 10 2014 14:16:15 GMT-0800 (PST)",
      "eventID": 100
    },
    "107": {
      "url": "./videos/IMG_0104.mov",
      "title": "Brian Makes a Game",
      "author": "patrickford",
      "createdAt": "Mon Feb 10 2014 14:23:16 GMT-0800 (PST)",
      "eventID": 100
    },
    "108": {
      "url": "./videos/IMG_0105.mov",
      "title": "Stand Up Workstations",
      "author": "patrickford",
      "createdAt": "Mon Feb 10 2014 14:25:17 GMT-0800 (PST)",
      "eventID": 100
    },
    "109": {
      "url": "./videos/IMG_0106.mov",
      "title": "Brendon Hacks Away",
      "author": "patrickford",
      "createdAt": "Mon Feb 10 2014 14:30:20 GMT-0800 (PST)",
      "eventID": 100
    },
    "110": {
      "url": "./videos/IMG_0107.mov",
      "title": "Davy and Autumn",
      "author": "patrickford",
      "createdAt": "Mon Feb 10 2014 14:09:21 GMT-0800 (PST)",
      "eventID": 100
    }
  }

  $scope.showData = function(){
    alert("Video Title: ");
  };

};

console.log('Clips Control Loaded');


