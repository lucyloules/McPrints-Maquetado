$(document).ready(function () { 
  $('.owl-carousel').owlCarousel();

/*   $('.heart').click(function () {
    this.css('color', 'red');
  });

  $('#hide').click(function () {
    //$('#show').before('<p>Prueba</p>');
    $('h1').hide();
  })
  $('#show').click(function () {
    //$('#show').before('<p>Prueba</p>');
    $('h1').show();
  }) */
$('.button-up').click(function(){
  $('body, html').animated({
    scrollTop: '0px'
  });
});

});
  
 
 