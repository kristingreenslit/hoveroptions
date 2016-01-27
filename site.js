$(document).ready(function() {

  $(".circles img").animate({height:"150px",width:"150px"},700);

  $('.front #circle06').hover(function () {
      $( this ).fadeTo('slow', 0.1);
    }, function(){
      $( this ).fadeTo('slow', 1);
    });

});








   // $('.front #circle06').mouseenter(function () {
   //    $( this ).fadeTo('slow', 0.1);
   //  });
    
   //  $('.front #circle06').mouseout(function () {
   //    $( this ).fadeTo('slow', 1);
   //  });

