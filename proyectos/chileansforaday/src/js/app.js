AOS.init({
    once: true
})

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    autoHeight: true
});

let buttons = Array.from(document.querySelectorAll('.menu_btn'));

document.querySelectorAll('.menu_btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
        // Remover la clase 'active' de todos los botones
        document.querySelectorAll('.menu_btn').forEach((otherBtn) => {
            otherBtn.classList.remove('active');
        });
        // Agregar la clase 'active' al botón clickeado
        e.currentTarget.classList.add('active');
        // Obtener el index del botón clickeado
        var clickedIndex = buttons.indexOf(e.currentTarget);
        // console.log(clickedIndex);
        swiper.slideTo(clickedIndex);
    });
});

swiper.on('slideChange', function () {
    // Remover la clase 'active' de todos los botones
    buttons.forEach((btn) => {
        btn.classList.remove('active');
    });
    // Agregar la clase 'active' al botón correspondiente
    buttons[swiper.activeIndex].classList.add('active');
    console.log(swiper.activeIndex)
});

// Obtén el logo y el div
var logo = document.querySelector('img[src="/src/images/Estrella.png"]');
var nav = document.querySelector('.nav_fixed');

// Añade un evento de scroll al objeto window
window.addEventListener('scroll', function() {
    // Obtén la posición del logo
    var logoPosition = logo.getBoundingClientRect();

    // Si el logo ya no está visible en la ventana de visualización
    if(logoPosition.bottom < 0) {
        // Añade la clase al div
        nav.classList.add('nav_on');
    } else {
        // Si el logo es visible, remueve la clase
        nav.classList.remove('nav_on');
    }
});