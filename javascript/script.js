

// LISTA DE PRODUCTOS

const peliculas = [
    { id:1, nombre:"Spiderman No Way Home", precio: 1500, duracion: 160, image:'/IMAGES/spiderman22.jpg'},
    { id:2, nombre:"Avengers Endgame", precio: 1500, duracion: 180, image:'/IMAGES/avengersendgame.jpg' },
    { id:3, nombre:"Toy Story 4", precio: 1300, duracion: 130, image:'/IMAGES/toystory4.jpg'},
    { id:4, nombre:"Interestellar", precio: 1200, duracion: 150, image:'/IMAGES/interestellar.jpg'},
    { id:5, nombre:"Venom", precio: 1100, duracion: 130, image:'/IMAGES/venom.jpg'},
    { id:6, nombre:"Back To The Future", precio: 1300, duracion: 140, image:'/IMAGES/volver al futuro.jpg'},
    { id:7, nombre:"Ready Player One", precio: 1400, duracion: 150, image:'/IMAGES/ready.player.jpg'},
    { id:8, nombre:"Spiderman 3", precio: 1550, duracion: 140, image:'/IMAGES/spiderman3.jpg'},
    { id:9, nombre:"Cars", precio: 1100, duracion: 120, image:'/IMAGES/cars3.jpg'},
    {id:10, nombre:"Harry Potter Part 2", precio: 1500, duracion: 150, image:'/IMAGES/harrypotter.jpg'},
    {id:11, nombre:"The Amazing Spiderman", precio: 1500, duracion: 140, image:'/IMAGES/theamazingspiderman.jpg'}
]



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
    

const optionsSpiderNoWayHome = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c57b71d805mshc8fa68c4b9fd34ep11608bjsna3f3f15e6b4d',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};

fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=spiderman%20no%20way%20home', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
////


const optionsAvengers = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c57b71d805mshc8fa68c4b9fd34ep11608bjsna3f3f15e6b4d',
            'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
        }
    };
    
    fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=avengers%20endgame', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
///

const optionsToyStory = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c57b71d805mshc8fa68c4b9fd34ep11608bjsna3f3f15e6b4d',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};

fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=toy%20story%204', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

///

const optionsInterestellar = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c57b71d805mshc8fa68c4b9fd34ep11608bjsna3f3f15e6b4d',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};

fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=Interestellar', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

///
const optionsVenom = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c57b71d805mshc8fa68c4b9fd34ep11608bjsna3f3f15e6b4d',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};

fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=Venom', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

///
const optionsBackToTheFuture = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c57b71d805mshc8fa68c4b9fd34ep11608bjsna3f3f15e6b4d',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};

fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=Volver%20al%20futuro', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

///
const optionsReadyPlayerOne = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c57b71d805mshc8fa68c4b9fd34ep11608bjsna3f3f15e6b4d',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};

fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=Ready%20Player%20one', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

///
const optionsSpiderman3 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c57b71d805mshc8fa68c4b9fd34ep11608bjsna3f3f15e6b4d',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};

fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=Spiderman%203', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

///
const optionsCars3 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c57b71d805mshc8fa68c4b9fd34ep11608bjsna3f3f15e6b4d',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};

fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=cars%203', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

///
const optionsHarryPotter = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c57b71d805mshc8fa68c4b9fd34ep11608bjsna3f3f15e6b4d',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};

fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=Harry%20Potter%20and%20the%20Deathly%20Hallows%3A%20Part%202', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

///
const optionsTheAmazingSpiderman = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c57b71d805mshc8fa68c4b9fd34ep11608bjsna3f3f15e6b4d',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};

fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=the%20amazing%20spiderman', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));