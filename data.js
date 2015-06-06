
var picAlbums = [
{
  name: tacoBell,
  title: "Taco Bell",
  image: "TacoBellBuilding.jpg",
},
{
  name: kfc,
  title: "KFC",
  image: "kfcBuilding.jpg",
},
{
  name: littleCaesars,
  title: "Little Caesars",
  image: "littleCaesarsBuilding.jpg",
},
{
  name: butcherBee,
  title: "Butcher & Bee",
  image: "butcherBeeBuilding.jpg",
},
{
  name: cookOut,
  title: "Cook Out",
  image: "cookOutBuilding.jpg",
},
{
  name: waffleHouse,
  title: "Waffle House",
  image: "waffleHouseBuilding.jpg",
}
];

var tacoBell = [
{
  title: "Dorrito Taco",
  image: "dorritotaco.jpg",
},
{
  title: "Crunchwrap Supreme",
  image: "Crunchwrap-Supreme.jpg",
},
{
  title: "Breakfast Crunchwrap",
  image: "firstmeal.gif",
},
{
  title: "Gordita",
  image: "gordita.jpg",
},
{
  title: "Volcano Nacho",
  image: "volcanonacho.jpg",
},
{
  title: "Cheesy Beef Burrito",
  image: "cheesyBeef.jpg",
}
];

var kfc = [
{
  title: "Bucket-o-Chicken",
  image: "bucketChicken.gif",
},
{
  title: "Crunchwrap Supreme",
  image: "Crunchwrap-Supreme.jpg",
},
{
  title: "Breakfast Crunchwrap",
  image: "firstmeal.gif",
},
{
  title: "Gordita",
  image: "gordita.jpg",
},
{
  title: "Volcano Nacho",
  image: "volcanonacho.jpg",
},
{
  title: "Cheesy Beef Burrito",
  image: "cheesyBeef.jpg",
}
];
var littleCaesars = [
{
  title: "Bucket-o-Chicken",
  image: "bucketChicken.gif",
},
{
  title: "Crunchwrap Supreme",
  image: "Crunchwrap-Supreme.jpg",
},
{
  title: "Breakfast Crunchwrap",
  image: "firstmeal.gif",
},
{
  title: "Gordita",
  image: "gordita.jpg",
},
{
  title: "Volcano Nacho",
  image: "volcanonacho.jpg",
},
{
  title: "Cheesy Beef Burrito",
  image: "cheesyBeef.jpg",
}
];
var butcherBee = [
{
  title: "Bucket-o-Chicken",
  image: "bucketChicken.gif",
},
{
  title: "Crunchwrap Supreme",
  image: "Crunchwrap-Supreme.jpg",
},
{
  title: "Breakfast Crunchwrap",
  image: "firstmeal.gif",
},
{
  title: "Gordita",
  image: "gordita.jpg",
},
{
  title: "Volcano Nacho",
  image: "volcanonacho.jpg",
},
{
  title: "Cheesy Beef Burrito",
  image: "cheesyBeef.jpg",
}
];
var cookOut = [
{
  title: "Bucket-o-Chicken",
  image: "bucketChicken.gif",
},
{
  title: "Crunchwrap Supreme",
  image: "Crunchwrap-Supreme.jpg",
},
{
  title: "Breakfast Crunchwrap",
  image: "firstmeal.gif",
},
{
  title: "Gordita",
  image: "gordita.jpg",
},
{
  title: "Volcano Nacho",
  image: "volcanonacho.jpg",
},
{
  title: "Cheesy Beef Burrito",
  image: "cheesyBeef.jpg",
}
];

var waffleHouse = [
{
  title: "Bucket-o-Chicken",
  image: "bucketChicken.gif",
},
{
  title: "Crunchwrap Supreme",
  image: "Crunchwrap-Supreme.jpg",
},
{
  title: "Breakfast Crunchwrap",
  image: "firstmeal.gif",
},
{
  title: "Gordita",
  image: "gordita.jpg",
},
{
  title: "Volcano Nacho",
  image: "volcanonacho.jpg",
},
{
  title: "Cheesy Beef Burrito",
  image: "cheesyBeef.jpg",
}
];

var templates = {};

var selectedAlbum = $(this).attr('name');

var mytmpl = [
 "<div class='col-md-4 col-sm-6 imgDiv'>",
 "<img class='imageCover' src='<%= image %>'>",
 "<h3 class='caption'><%= title %></h3>",
 "</div>"
].join("");


var compiledTmpl = _.template(mytmpl);
var imgString = "";

tacoBell.forEach(function(el) {
  imgString += compiledTmpl(el);
});

var albString = "";

picAlbums.forEach(function(el) {
  albString += compiledTmpl(el);
});

$('.albumGallery').append(albString);

$('.imageGallery').append(imgString);

var overlay = $('<div class="overlay"></div>');
var imageBig = $("<img>");
var caption = $("<p></p>");

overlay.append(imageBig);

overlay.append(caption);

//OVERLAY//
$("body").append(overlay);

$(".imageGallery .imgCover").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("image");

  image.attr("src", imageLocation);

  overlay.show();

  var captionText = $(this).attr("title");
  caption.text(captionText);
});
