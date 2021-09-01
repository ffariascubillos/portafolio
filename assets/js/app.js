//carga del sitio
window.addEventListener('load', function(){
    setTimeout(() => {
        // alert('Sitio cargado!')
        $('.loader').addClass('off-loader')  
    }, 3000)
})

AOS.init() // Inicia plugin AOS.

$('li a').on('click', function(){   // Agrega class active al tag <a>.
    $('li a').removeClass('active')
    $(this).addClass('active')
})

var url = window.location.href
console.log('la url actual es: ' + url)

//hamburguesadoble
$('.hamburguer').on('click', function(){
    //opacity
    $('.shadow').toggleClass('shadow__invoke')
    $(this).toggleClass('cerrar_hamburg')
    $('.menu').toggleClass('menu_on')
    //comportamiento hamburguesa.
    $('.pan').toggleClass('pan_ok')
    $('.lechuga').toggleClass('lechuga_ok')
    $('.queso').toggleClass('queso_ok')
})
$('.menu a').on('click', function(){
    //opacity
    $('.shadow').toggleClass('shadow__invoke')
    $('.hamburguer').toggleClass('cerrar_hamburg')
    $('.menu').toggleClass('menu_on')
    //comportamiento hamburguesa.
    $('.pan').toggleClass('pan_ok')
    $('.lechuga').toggleClass('lechuga_ok')
    $('.queso').toggleClass('queso_ok')
})
$('.shadow').on('click', function(){
    //opacity
    $(this).toggleClass('shadow__invoke')
    $('.hamburguer').toggleClass('cerrar_hamburg')
    $('.menu').toggleClass('menu_on')
    //comportamiento hamburguesa.
    $('.pan').toggleClass('pan_ok')
    $('.lechuga').toggleClass('lechuga_ok')
    $('.queso').toggleClass('queso_ok')
})

//scroll effect
$('a').on('click', function(event) {
    var target = $( $(this).attr('href') )
    if( target.length ) {
        // event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000)
    }
})