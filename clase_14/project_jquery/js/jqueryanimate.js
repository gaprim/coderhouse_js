$( "a.agregar-carrito" ).hover(
    function() {
      $(this).css("background-color","red")

    }, function() {
     $(this).css("background-color","#0069d9")
    }
  );



$("a.btn").on("click",function(){
    $("img.nav-link").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    $(this).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
  });



  $( ".card" ).hover(
    function() {
      $(this).animate({
        borderWidth: "5px"
      }, 100 );


      
    }, function() {
        $(this).animate({
            borderWidth: "1px"
          }, 100 );
    }
  );

