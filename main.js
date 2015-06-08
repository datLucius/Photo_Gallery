$(document).ready(function() {

  $('.sideBar').hide();
  $('.imageGalleryContent').hide();

  $('.albumGallery').on('click', '.imgDiv', function(event) {
      event.preventDefault();

    $('header').slideUp(800);

     $('.albumGallery').hide();

     $('.sideBar').show();

     var albumName = $(this).attr('title');

     var selectedAlbum = $(this).attr('name');

     $('.imageGalleryContent').show();

     $('.imageGalleryHeaderText').html(albumName);


  });

  $('.sideBar').on('click', '.albumButton', function(event) {
      event.preventDefault();

     var albumName = $(this).attr('title');

     $('.imageGalleryHeaderText').html(albumName);

     selectedAlbum = albumsPics[$(this).attr('name')];
     var imgString = "";
     selectedAlbum.forEach(function(el) {
       imgString += compiledTmpl(el);
     });
     $('.imageGallery').html(imgString);
  });

  var overlay = $('<div class="overlay hide"></div>');
  var imageBig = $("<img>");
  var caption = $("<p></p>");



  //OVERLAY//
  $("body").append(overlay);

  $('.imageGallery').on('click', '.imageCover', function(event){
    event.preventDefault();
    var imageLocation = $(this).attr('src');
    var captionText = $(this).attr('data-name');

    imageBig.attr("src", imageLocation);

    overlay.append(imageBig);

    overlay.append(caption);

    overlay.removeClass('hide');
  });

    overlay.click(function(){
    overlay.hide();
    });

});
