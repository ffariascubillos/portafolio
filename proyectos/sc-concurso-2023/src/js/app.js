window.addEventListener("load", (event) => {
    // alert("page is fully loaded")
    $('.wrapper').fadeIn('slow');
    // setTimeout(()=>{
    //     $('.modal-pop').css("display", "flex").hide().fadeIn('slow')
    // }, 1500)

    $('.popupalert').on('click', ()=>{
        $('.modal-pop').fadeOut('fast')
    })
    
})

window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY +1) >= document.body.offsetHeight) {
        // alert("you're at the bottom of the page");
        $('.container-arrow').fadeOut('slow');
    } else {
        $('.container-arrow').fadeIn('slow');
    }
    // console.log(window.innerHeight + window.scrollY + 1)
    // console.log(document.body.offsetHeight);
};

const chevron = $('.container-arrow').on('click', ()=>{
    $([document.documentElement, document.body]).animate({
        scrollTop: document.body.scrollHeight
    }, 1000);
})