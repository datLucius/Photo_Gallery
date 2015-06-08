
var picAlbums = [
{
  name: "clockwork",
  title: "Clockwork Orange",
  image: "clockWork/clOrCover.png",
},
{
  name: "spaceOd",
  title: "2001: A Space Odyssey",
  image: "spaceOd/spcOdCover.png",
},
{
  name: "shining",
  title: "The Shining",
  image: "shining/shCover.png",
},
{
  name: "fullMetal",
  title: "Full Metal Jacket",
  image: "FullMetal/fullMetCover.png",
},
{
  name: "barryLyndon",
  title: "Barry Lyndon",
  image: "barryLyndon/bLCover.png",
},
{
  name: "eyesWS",
  title: "Eyes Wide Shut",
  image: "eyesWS/eyesWSCover.png",
}
];

var spaceOdArray = [
{
  title: "13:07",
  image: "spaceOd/SpOcPl4.png",
},
{
  title: "30:57",
  image: "spaceOd/SpOcPl5.png",
},
{
  title: "1:07:58",
  image: "spaceOd/SpOcPl3.png",
},
{
  title: "1:26:18",
  image: "spaceOd/SpOcPl2.png",
},
{
  title: "2:09:43",
  image: "spaceOd/SpOcPl6.png",
},
{
  title: "2:16:44",
  image: "spaceOd/SpOcPl1.png",
}
];
var clockworkArray = [
{
  title: "0:10",
  image: "clockWork/clOr1.png",
},
{
  title: "25:14",
  image: "clockWork/clOr2.png",
},
{
  title: "33:24",
  image: "clockWork/clOr3.png",
},
{
  title: "1:04:29",
  image: "clockWork/clOr4.png",
},
{
  title: "1:29:22",
  image: "clockWork/clOr5.png",
},
{
  title: "1:43:40",
  image: "clockWork/clOr6.png",
}
];
var shiningArray = [
{
  title: "1:17",
  image: "shining/sh1.png",
},
{
  title: "15:23",
  image: "shining/sh2.png",
},
{
  title: "45:14",
  image: "shining/sh3.png",
},
{
  title: "1:24:25",
  image: "shining/sh4.png",
},
{
  title: "1:33:12",
  image: "shining/sh5.png",
},
{
  title: "1:53:15",
  image: "shining/sh6.png",
}
];
var fullMetArray = [
{
  title: "3:19",
  image: "FullMetal/fullMet1.png",
},
{
  title: "40:14",
  image: "FullMetal/fullMet2.png",
},
{
  title: "50:56",
  image: "FullMetal/fullMet3.png",
},
{
  title: "1:01:01",
  image: "FullMetal/fullMet4.png",
},
{
  title: "1:20:42",
  image: "FullMetal/fullMet5.png",
},
{
  title: "2:23:40",
  image: "FullMetal/fullMet6.png",
}
];
var barryLyndonArray = [
{
  title: "1:18",
  image: "barryLyndon/bL1.png",
},
{
  title: "27:27",
  image: "barryLyndon/bL2.png",
},
{
  title: "36:50",
  image: "barryLyndon/bL3.png",
},
{
  title: "1:04:29",
  image: "barryLyndon/bL4.png",
},
{
  title: "1:49:22",
  image: "barryLyndon/bL5.png",
},
{
  title: "2:43:45",
  image: "barryLyndon/bL6.png",
}
];

var eyesWSArray = [
{
  title: "2:38",
  image: "eyesWS/eyesWS1.png",
},
{
  title: "25:14",
  image: "eyesWS/eyesWS2.png",
},
{
  title: "36:35",
  image: "eyesWS/eyesWS3.png",
},
{
  title: "1:04:29",
  image: "eyesWS/eyesWS4.png",
},
{
  title: "1:29:22",
  image: "eyesWS/eyesWS5.png",
},
{
  title: "1:43:40",
  image: "eyesWS/eyesWS6.png",
}
];


var selectedAlbum;
var albumsPics = {
  spaceOd: spaceOdArray,
  clockwork: clockworkArray,
  shining: shiningArray,
  fullMetal: fullMetArray,
  barryLyndon: barryLyndonArray,
  eyesWS: eyesWSArray
};


$('.albumGallery').on('click', '.imgDiv', function(event) {
    event.preventDefault();
   selectedAlbum = albumsPics[$(this).attr('data-name')];
   var imgString = "";
   selectedAlbum.forEach(function(el) {
     imgString += compiledTmpl(el);
   });
   $('.imageGallery').append(imgString);
 });

var mytmpl = [
 "<div class='col-md-4 col-sm-6 imgDiv' data-name='<%= name %>' >",
 "<img class='imageCover' src='<%= image %>'> ",
 "<h3 class='caption'><%= title %></h3>",
 "</div>"
].join("");


var compiledTmpl = _.template(mytmpl);


var albString = "";

picAlbums.forEach(function(el) {
  albString += compiledTmpl(el);
});

$('.albumGallery').append(albString);
