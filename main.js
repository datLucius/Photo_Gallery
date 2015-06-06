$(document).ready(function() {

  $('.sideBar').hide();
  $('.imageGalleryContent').hide();


  $('.albumGallery').on('click', '.imgDiv', function(event) {
      event.preventDefault();

      $('header').slideUp(800);

     $('.albumGallery').hide();

     $('.sideBar').show();


     $('.imageGalleryContent').show();

     var albumName = $(this).attr('title');

     $('.imageGalleryHeaderText').html(albumName);

  });
});
