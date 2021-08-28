//carga del sitio
// window.addEventListener('load', function(){
//     setTimeout(() => {
//         // alert('Sitio cargado!')
//         $('.loader').addClass('off-loader')  
//     }, 3000)
// })

AOS.init() // Inicia plugin AOS.

$('li a').on('click', function(){   // Agrega class active al tag <a>.
    $('li a').removeClass('active')
    $(this).addClass('active')
})

var url = window.location.href
console.log('la url actual es: ' + url)

