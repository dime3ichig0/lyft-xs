$(document).ready(function(){
	
})


/*FUNCION DE SPLASH INICIO*/
function load(){
  var url = 'index.html';
  setTimeout(function () {
    $('.dominos').fadeOut(500);
  }, 3000);
  setTimeout(function () {
    $(location).attr('href', 'index.html').fadeIn(500)
  }, 3000);
}
/*FUNCION DE SPLASH FIN*/


/*FUNCIONES DE PAISES INICIO*/
$(document).ready(function() {
  
  $(".selLabel").click(function () {
    $('.dropdown').toggleClass('active');
  });
  
  $(".dropdown-list li").click(function() {
    $('.selLabel').text($(this).text());
    $('.dropdown').removeClass('active');
    $('.selected-item p span').text($('.selLabel').text());
  });
  
});
/*FUNCIONES DE PAISES INICIO*/


/*FUNCION DE BOTON NUMBER*/
$('.input-number').keyup(function () {
  var numero = $('.input-number').val();
  if (numero.length == 10){
    $('#boton-number').removeAttr('disabled');
} else if (numero.length < 10) {
    $('#boton-number').attr('disabled');
  }
});
/*FUNCION DE BOTON NUMBER FINAL*/

/*FUNCION PARA GENERAR NUMERO ALEATOREO*/
$('#boton-number').click(function(){
  var code = "";
  var str = "0123456789";
  for (var i = 0; i < 3; i++) {
    code += str.charAt(Math.floor(Math.random() * str.length));
  }
  document.getElementById("numero-id").innerHTML = code;
});
/*FUNCION PARA GENERAR NUMERO ALEATOREO FIN*/