

// LISTA DE PRODUCTOS


// LISTA DE PELICULAS FUNCIONA

const selectMovie = document.getElementById('seleccionador-pelicula');
window.addEventListener('load', listSelect);

function listSelect() {
    peliculas.map( pelicula =>{
        let option = document.createElement('option');
        option.value = (pelicula.nombre);
        option.textContent = (pelicula.nombre);
        selectMovie.appendChild(option);
    });
}




// COMPRA TICKET  / CANCELA TICKET


const btnComprar = document.getElementById('boton-comprar');
const btnCancelar = document.getElementById('boton-cancelar');

btnComprar.addEventListener('click', comprarTicket);
btnCancelar.addEventListener('click', cancelarTicket);


function comprarTicket() {
    Swal.fire({
        title: 'Desea confirmar la compra?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, confirmar',
        cancelButtonText: 'No, cancelar'
    }).then((result)=>{
        if(result.isConfirmed){
            
            Swal.fire({
                title: 'Tickets comprados!',
                icon: 'success',
                text: 'Enviaremos sus entradas a su email'
            })
        }
    })
}

function cancelarTicket() {
    Swal.fire({
        title: 'Desea cancelar la compra?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, confirmar',
        cancelButtonText: 'No, cancelar'
    }).then((result)=>{
        if(result.isConfirmed){
            
            Swal.fire({
                title: 'Has cancelado tu compra',
                icon: 'success',
                text: 'Vuelva pronto!'
            })
        }
    })
}



// USUARIO Y CONTRA CON GUARDADO DE DATOS

const inicioSesion = document.getElementById('enviado');

inicioSesion.addEventListener('click', ()=>{
    if(recordarDatos.checked){
        guardarDatos('localStorage');
    }else{
        guardarDatos('sessionStorage');
    }
    document.getElementById('inicio-sesion').style.display = 'flex';
    document.getElementById('ya-iniciado').style.display = 'block';
})


let recordarDatos = document.getElementById('recordar');

function guardarDatos(storage){
    let user = document.getElementById('user-name').value;
    let pass = document.getElementById('user-password').value;

const usuario ={
    'user':user,
    'pass':pass
}

if(storage === 'sessionStorage') {
    sessionStorage.setItem('user', JSON.stringify(usuario));
}

if(storage === 'localStorage') {
    localStorage.setItem('user', JSON.stringify(usuario));
}
}



/* DATOS TARJETA */


const selectYear = document.querySelector('#year');
const selectMonth = document.querySelector('#month');
const nombreTitular = document.querySelector('.card-holder-input');
const numeroTarjeta = document.querySelector('.card-number-input');
const mesVencimiento = document.querySelector('.month-input');
const anioVencimiento = document.querySelector('.year-input');
const cvv = document.querySelector('.cvv-input');
const btnEnviar = document.querySelector('#btnEnviar');
const years = [2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030];
const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

years.forEach(element => {
    let option = `<option>${element}</option>`;
    selectYear.innerHTML += option;
});

months.forEach(element => {
    let option = `<option>${element}</option>`
    selectMonth.innerHTML += option;
});

numeroTarjeta.addEventListener('input', () => {
    document.querySelector('.card-number-box').innerText = numeroTarjeta.value;
});

nombreTitular.addEventListener('input', () => {
    document.querySelector('.card-holder-name').innerText = nombreTitular.value;
});

mesVencimiento.oninput = () => {
    document.querySelector('.exp-month').innerText = mesVencimiento.value;
}

anioVencimiento.oninput = () => {
    document.querySelector('.exp-year').innerText = anioVencimiento.value;
}

cvv.oninput = () => {
    document.querySelector('.cvv-box').innerText = cvv.value;
}

cvv.onmouseenter = () => {
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
}

cvv.onmouseleave = () => {
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
}

let cleave = new Cleave(numeroTarjeta, {
    creditCard: true,
    onCreditCardTypeChanged: (type) => {
        const logos = document.querySelectorAll('.cardLogo');
        logos.forEach(element => {
            element.src = `./IMAGES/${type}.png`
        })


    }
})

btnEnviar.addEventListener('click',()=>{

        Swal.fire({
            title: 'Desea confirmar la compra?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, confirmar',
            cancelButtonText: 'No, cancelar'
        }).then((result)=>{
            if(result.isConfirmed){
                
                Swal.fire({
                    title: 'Tickets comprados!',
                    icon: 'success',
                    text: 'Enviaremos sus entradas a su email'
                })
            }
        })
    
})
    


// FUNCION QUE HACE EL FETCH Y TE DEVUELVE LA INFO
const traerPelis = async () => {
    let response = await fetch("info.json")
    let result = await response.json()
    return result
}


const bodyPelis = document.getElementById("contenedorPeliculas")


// FUNCIÓN QUE GENERA EL HTML CON LA INFO OBTENIDA DEL FETCH
selectMovie = async() =>{
     await traerPelis()
}

console.log(selectMovie)