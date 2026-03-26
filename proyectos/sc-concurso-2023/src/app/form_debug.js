// App

const inputElements = [...document.querySelectorAll('input.code-input')]

inputElements.forEach((ele,index)=>{
  ele.addEventListener('keydown',(e)=>{
    // if the keycode is backspace & the current field is empty
    // focus the input before the current. Then the event happens
    // which will clear the "before" input box.
    if(e.keyCode === 8 && e.target.value==='') inputElements[Math.max(0,index-1)].focus()
  })
  ele.addEventListener('input',(e)=>{
    // take the first character of the input
    // this actually breaks if you input an emoji like 👨‍👩‍👧‍👦....
    // but I'm willing to overlook insane security code practices.
    const [first,...rest] = e.target.value
    e.target.value = first ?? '' // first will be undefined when backspace was entered, so set the input to ""
    const lastInputBox = index===inputElements.length-1
    const didInsertContent = first!==undefined
    if(didInsertContent && !lastInputBox) {
      // continue to input the rest of the string
      inputElements[index+1].focus()
      inputElements[index+1].value = rest.join('')
      inputElements[index+1].dispatchEvent(new Event('input'))
    }
  })
})

let rut_trip = {}

$("#rut").Rut({
    format_on: 'keyup',
    on_error: function(){ rut_trip = 0 },
    on_success: function(){ rut_trip = 1 }
})

let inputemail = $('.correoval')

function cambiarValor(inputStrg){
    let splitspace = inputStrg.val().split(' ').join('')
    return inputStrg.val(splitspace)
}

inputemail.focusout(function(){
    cambiarValor($(this))
})

inputemail.keyup(function(){
    cambiarValor($(this))
})

form.onsubmit = (e)=> {

    e.preventDefault()

    const code = inputElements.map(({value})=>value).join('')
    console.log(code)

    // formulario

    let form = document.getElementById('form')

    // objeto form

    let data = new FormData(form)

    // data form

    let nombre = data.get('nombre')
    let rut = data.get('rut')
    let region = data.get('region')
    let punto_compra = data.get('punto_compra')
    let email = data.get('email')
    let emailval = data.get('emailval')
    let cod = code
    
    // bases y aceptos
    let aceptoa = $('#aceptoa')
    let aceptob = $('#aceptob')

    // booleans

    let nombre_ok = false
    let rut_ok = false
    let region_ok = false
    let punto_compra_ok = false
    let email_ok = false
    let cod_ok = false
    let aceptoa_ok = false
    let aceptob_ok = false

    // Utils

    let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    // Modal

    let modal1 = document.getElementById('modal-form')
    let modalerrors = document.getElementById('modal-error-container')
    const cerrarmodalbtn = document.querySelector('.modal-close-btn')
    const modalopacity = document.querySelector('.modal-opacity')
    cerrarmodalbtn.addEventListener('click', (e)=>{
        modal1.classList.remove('fade-modal')
        modalerrors.innerHTML = ''
    }) 
    modalopacity.addEventListener('click', (e)=>{
        modal1.classList.remove('fade-modal')
        modalerrors.innerHTML = ''
    }) 

    // spin

    let loader = document.getElementById('form-loader')

    // Validaciones

    if(nombre === ''){
        nombre_ok = false
        // console.log('ingrese un nombre')
        modalerrors.innerHTML += '<p>Ingrese su Nombre</p>'
        modal1.classList.add('fade-modal')
    } else {
        nombre_ok = true
        console.log('Nombre ingresado')
    }

    if(rut === ''){
        rut_ok = false
        // console.log('ingrese un rut')
        modalerrors.innerHTML += '<p>Ingrese un rut</p>'
        modal1.classList.add('fade-modal')
    } else {
        rut_trip === 1 ? (rut_ok =  true, console.log('rut ingresado!')) : (rut_trip === 0, modalerrors.innerHTML += '<p>rut incorrecto</p>', modal1.classList.add('fade-modal'))
    }

    if(region === ''){
        region_ok = false
        modalerrors.innerHTML += '<p>Ingrese su Región</p>'
        modal1.classList.add('fade-modal')
        // console.log('ingrese un region')
    } else {
        region_ok = true
        console.log('region ingresado')
    }

    if(punto_compra === ''){
        punto_compra_ok = false
        modalerrors.innerHTML += '<p>Ingrese Punto de Compra</p>'
        modal1.classList.add('fade-modal')
        // console.log('ingrese un punto_compra')
    } else {
        punto_compra_ok = true
        console.log('punto de compra ingresado')
    }

    if(email === ''){
        email_ok = false
        modalerrors.innerHTML += '<p>Ingrese su Email</p>'
        modal1.classList.add('fade-modal')
        // console.log('ingrese un email')
    } else {
        if(email.match(regex)) {
            email_ok = true
            console.log('es un mail correcto')
            if(emailval === email) {
                email_ok = true     
            } else {
                email_ok = false
                modalerrors.innerHTML += '<p>Confirme su Email</p>'
                modal1.classList.add('fade-modal')    
            }
        } else {
            modalerrors.innerHTML += '<p>El Email no existe</p>'
            modal1.classList.add('fade-modal')
            email_ok = false
            // console.log('ingrese un email válido')
        }
    }

    if(cod === ''){
        cod_ok = false
        modal1.classList.add('fade-modal')
        modalerrors.innerHTML += '<p>Ingrese el Código del producto Super Cerdo</p>'
        // console.log('ingrese un cod')
    } else {
        cod.length == 14 ? cod_ok = true : (cod_ok = false, modalerrors.innerHTML += '<p>Ingrese el Código del producto Super Cerdo</p>', modal1.classList.add('fade-modal'))
    }

    aceptoa.is(':checked') === false ? (aceptoa_ok = false, modal1.classList.add('fade-modal'), modalerrors.innerHTML += '<p>Debe Aceptar los Términos</p>') : aceptoa_ok = true 
    
    aceptob.is(':checked') === false ? (aceptob_ok = false, modal1.classList.add('fade-modal'), modalerrors.innerHTML += '<p>Debe Aceptar las Bases Legales</p>') : aceptob_ok = true 

    if(nombre_ok === true && rut_ok === true && region_ok === true && punto_compra_ok === true && email_ok === true && cod_ok === true && aceptoa_ok === true && aceptob_ok === true) {

        loader.classList.remove('d-none')

        console.log('enviado!')

        data.append("code", code)

        // let url = './src/app/ajax.php'
        let url = './src/app/ajax_parche.php'

        fetch(url, {
            method: 'POST',
            body: data
        })
            .then( res => res.json())
            .then( datos => {

                console.log(datos)

                if(datos == 0) {
                    modalerrors.innerHTML += '<p>No hay conexión con el servidor</p>'
                    modal1.classList.add('fade-modal')
                    loader.classList.add('d-none')      
                }

                if(datos == 1) {
                    modalerrors.innerHTML += '<p>Email incorrecto! :(</p>'
                    modal1.classList.add('fade-modal')
                    loader.classList.add('d-none')     
                }

                // if(datos == 3) {
                //     modalerrors.innerHTML += '<p>El Código se encuentra registrado</p>'
                //     modal1.classList.add('fade-modal')
                //     loader.classList.add('d-none')     
                // }

                if(datos == 4) {
                    form.reset()
                    $('.popupalert').attr('src','./src/img/pop-up-gracias-v2.jpg')
                    setTimeout(function(){
                        $('.modal-pop').css("display", "flex").hide().fadeIn('slow')
                        loader.classList.add('d-none')    
                    },1000)
                }

                if(datos == 6) {
                    modalerrors.innerHTML += '<p>Código Incorrecto</p>'
                    modal1.classList.add('fade-modal')
                    loader.classList.add('d-none')
                }

                if(datos == 5) {
                    form.reset()
                    modalerrors.innerHTML += '<p>No pudimos ingresar su solicitud, pruebe más tarde o llame al número que aparece al final :)</p>'
                    modal1.classList.add('fade-modal')
                    loader.classList.add('d-none')     
                }

            })

        // console.log('campos completos!')
    
    } else {

        // alert('Debe completar todos los campos')

    }

}