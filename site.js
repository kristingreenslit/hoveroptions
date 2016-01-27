$(document).ready(function() {

  $(".circles img").animate({
    height: "150px",
    width: "150px" 
  }, 700);

  $('.front .circles').hover(function() {
      $( this ).fadeTo('slow', 0);
    }, function() {
      $( this ).fadeTo('slow', 1);
  });

});

