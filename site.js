$(document).ready(function(){

  $('.circles').animate({left:0,width:"100",top:0,height: "100"},1000);

  $('.circles').mouseenter(function(){
   $(this).css("background-image", "url(images/picture10.jpeg)");
  });

  $(".circles").mouseleave(function(){
   $(this).css("background-image", "url(images/picture09.jpeg)");
  });

});