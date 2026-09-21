import 'bootstrap'; // JS de Bootstrap

$(document).ready(function(){

    // var minisitio_x = 'Chamelfo'; 
    // console.log('hola ' + minisitio_x);
    
    var mainsite = $('#minisitio_giftcard');
    var menu_a = mainsite.find('header nav li a');
    var collapse = $('.collapse-card_btn');
    
    menu_a.on('click', function(e) {
        e.preventDefault(); // cancela ir a el enlace
        menu_a.removeClass('active'); // saca la clase de todos
        $(this).addClass('active');   // y la pone al que clickeaste
    });
    
    // mainsite.css('background','red');

    //Menú Hamburguesa
	$('.hamburger').click(function() {
		$('.hamburger').toggleClass('is-active');
		$('.menuppal').toggleClass('is_active');
        $('body').toggleClass('overflow-hidden');
		return false;
	});

    $(".minisitio_giftcard__owl_carousel").owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        smartSpeed: 450,
        autoplay: true,
        autoplayTimeout: 10000
    });

    collapse.on('click', function(e) {
        $(this).toggleClass('menos');   // y la pone al que clickeaste
        $(this).parent('.collapse-card').toggleClass('parent-card');   // y la pone al que clickeaste
    });

    $(document).on('click', 'a[href^="#"]', function(event) {
        event.preventDefault();

        var target = $($.attr(this, 'href'));
        if (target.length) {
            // Detectar ancho de pantalla
            var isMobile = window.innerWidth <= 768; // Puedes ajustar el breakpoint si lo deseas
            var offset = isMobile ? 190 : 126;

            $('html, body').animate({
                scrollTop: target.offset().top - offset
            }, 800);
        }

        $('.hamburger').removeClass('is-active');
        $('.menuppal').removeClass('is_active');
        $('body').removeClass('overflow-hidden');
    });


});
