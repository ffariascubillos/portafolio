form.onsubmit = (e)=> {

    e.preventDefault()

    // formulario
    let form = document.getElementById('form')
    // data
    let data = new FormData(form)
    let nombre = data.get('nombre')
    let email = data.get('email')
    let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let emailok = false;
    let region = data.get('region')
    let receta = data.get('receta')
    // spin
    let loader = document.getElementById('form-loader')

    // console.log(files)

    if(email.match(regex)) {
        emailok = true
    } else {
        emailok = false
    }

    if(nombre != '' && email != '' && region != '' && receta != '') {

        if(emailok == true) {

            // console.log('mail correcto!')
            
            loader.classList.remove('d-none')
    
            let url = './src/app/ajax.php'
    
            fetch(url, {
                method: 'POST',
                body: data
            })
                .then( res => res.json())
                .then( datos => {
                    // console.log(datos)
    
                    if(datos == 0) {
                        alert('por favor completa los campos')
                        loader.classList.add('d-none')      
                    }
    
                    if(datos == 2) {
                        alert('Email incorrecto! :(')
                        loader.classList.add('d-none') 
                    }

                    if(datos == 1){
    
                        form.reset()
                        loader.classList.add('d-none')
                        alert('datos enviado! :)')
    
                    } 
    
                })

        }   else {

            // console.log('mail incorrecto!')
        }

        // console.log('archivo seleccionado!')
    
    } else {

        alert('Debe completar todos los campos, o no seleccionó un archivo! :(')
        // console.log('selecciona un archivo!')

    }

}