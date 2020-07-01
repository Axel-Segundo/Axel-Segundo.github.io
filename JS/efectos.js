$(document).ready (function(){
    var acercaDe = $('#acerca-de').offset().top,
        Trabajos = $('#trabajos').offset().top,
        Contacto = $('#contacto').offset().top;

    $('#btn-acerca-de').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: acercaDe
        }, 500);
    });
    $('#btn-trabajos').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: Trabajos
        }, 500);
    });
    $('#btn-contacto').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: Contacto
        }, 500);
    });
   
});