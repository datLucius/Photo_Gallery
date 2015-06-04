$(document).ready(function() {

//Here I'm using jquery event delegation to say when a .albBox1 in the .albumGallery is clicked, perform the following function//
$('.albumGallery').on('click', '.alb1', function(event) {
  event.preventDefault();
  console.log("this element ",$(this).attr('rel'));
  $('header').addClass('hide');
  $('.albumGallery').addClass('hide');
  $('.sideBar').removeClass('hide');
  $('.imageGalleryContent').removeClass('hide');
});


$('.sideBar').on('click', '.albBut2', function(event) {
  event.preventDefault();
  $('.imageGalleryContent2').toggleClass('hide');
  $('.imageGalleryContent').addClass('hide');

});




});
