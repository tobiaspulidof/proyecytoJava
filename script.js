// esta seccion pertenece a lo visto en clase, es utilizado para repasar conceptos y ejemplos.


// CICLOS Y BUCLES

/* let nombre = prompt('Ingresa tu nombre');
nombre = prompt('Ingresa tu nombre');
nombre = prompt('Ingresa tu nombre');
nombre = prompt('Ingresa tu nombre');
nombre = prompt('Ingresa tu nombre');
nombre = prompt('Ingresa tu nombre');
nombre = prompt('Ingresa tu nombre');
nombre = prompt('Ingresa tu nombre');
nombre = prompt('Ingresa tu nombre');
nombre = prompt('Ingresa tu nombre'); */


/* for(let i=0;i<3;i++){

    console.log('Usted es el jefe de los minisuper? '+i);
}

console.log('gracias, vuelvan pronto');
console.log(i);


for(let i=0;i<3;i++){
    console.log('la variable i vale '+i);
} */


/* for(let i=0;i<=10;i++){
    console.log(i+'*2 es igual a '+i*2);
} */


/* for(let i=1; i<=10;i++){
    if(i==5){
        break;
    }
alert(i);
} */

/* for(let i =0;i<=10;i++){
    if(i==4){
        continue;
    }
    alert( i);
}



/* let repetir =true;



while(repetir){
    console.log('Soy un bucle while');
    //Esta condsición hace que el ciclo no sea infinito. OJO!!! 
    repetir = false;
} */


/* let edad = parseInt(prompt('Ingresa tu edad'))

while(edad<13){
    console.log('no podés pasar')
    edad = parseInt(prompt('Ingresa tu edad'))
} */


/* let contador = 0;

while (contador < 5) {
    console.log(contador);
    contador++;
}

let edad;

do {

    edad = parseInt(prompt('Ingresa tu edad'));
} while (edad < 13) */


/* let color = prompt('Ingresa un color primario pigmento en minusculas: ');


switch (color) {
    case 'azul':
        alert('Elegiste azul');
        break;
    case 'rojo':
        alert('Elegiste rojo');
        break;
    case 'amarillo':
        alert('Elegiste amarillo');
        break;

    default:
        alert('Tu elección no es un color primario')
        break;
} */

/*
let saldo = 1500;
let opcion = prompt('Elegí una opción: 1- Saldo. \n2 - Retiro de dinero. \n3 - Depósito. \n Presioná X para finalizar.')


while (opcion != 'X') {
    switch (opcion) {
        case '1':
            alert('Tu saldo es $' + saldo);
            break;
        case '2':
            let retiro = parseFloat(prompt("Ingresa cantidad a retirar"));
            if (saldo >= retiro) {
                saldo = saldo - retiro;
                alert('Tu nuevo saldo es' + saldo);
            } else {
                alert('Fondos insuficientes');
            }
            break;
        case '3':
            let deposito = parseFloat(prompt('Ingresa monto a depositar'));
            saldo = saldo + deposito;
            alert('Tu nuevo saldo es ' + saldo);
            break;


        default:
            alert('Elegiste una opción inválida');
            break;
    }
    opcion = prompt('Elegí una opción: 1 - Saldos. 2 - Retiro de dinero. 3 - Depósitos. Presioná X para finalizar.');
}
*/

// FIN DE CICLOS Y BUCLES


// FUNCIONES

/* 
//Declaración de funciones
//Función con nombre (explícita), sin parámetros

function saludar() {
    console.log('¡Buenas noches, comisión!');
}

//Función con nombre, con un parámetro
function saludarConNombre(nombre){

    console.log("Buen día, "+nombre);
}

//Llamado, invocación o ejecución de la función 
//let nombre = prompt('Ingresá tu nombre');
saludar();
saludarConNombre('Sr Thompson')

//let nombre = prompt('Ingresá tu nombre');

saludarConNombre(nombre)
*/


/*
//Funciones con parámetros 
//Funcion con retorno (return)
function sumar(numeroA, numeroB) {
    let suma = numeroA + numeroB;
    return suma;
}

function mostrar(mensaje) {
    console.log(mensaje);
}

sumar(120, 200);
sumar(24, 78);

mostrar(sumar(3, 5));
let resultado = sumar(7,10);

let unNum = parseInt(prompt('Ingresa un numero'))
let otroNum = parseInt(prompt('Ingresa otro numero'))

sumar(unNum, otroNum); */




/* 
function restar(numeroA, numeroB) {
    let resta = numeroA - numeroB;
    console.log(resta);
}

function multiplicar(numeroA, numeroB) {
    let multiplicacion = numeroA * numeroB;
    console.log(multiplicacion);
}

function dividir(numeroA, numeroB) {
    let division = numeroA / numeroB;
    console.log(division);
}

function calcular(numeroA, numeroB, signo) {
    let resultado=0;
    switch (signo) {
        case "+":
            resultado = numeroA + numeroB;
            break;
        case "-":
            resultado = numeroA - numeroB;
            break;

        case "*":
            resultado = numeroA * numeroB;
            break;

        case "/":
            resultado = numeroA / numeroB;
            break;
        default:
            break;
    }



    console.log(resultado)
}

calcular(10, 2, "*"); */

/*
//Scope
//Declarando una variable con scope (ámbito, contexto) global
let variableGlobal = 'Soy una variable global';

console.log(variableGlobal);

function cambiar(){
    variableGlobal = 'Me cambiaron';//Acá modifico una variable global, desde la función
    console.log(variableGlobal);
}

cambiar();

if(true){
    variableGlobal = 'Ahora me cambiaron desde un if'; //otra vez modifico una variable global, desde la estructura de control 
    console.log(variableGlobal);
}

function cambiarLocal(){
    let variableGlobal = 'Soy una nueva variable, solo vivo dentro de la función';//Acá estoy creando una nueva variable, que aunque se llama igual que la anterior, no es la misma, y sólo tiene scope local, sólo existe dentro de esta función
    console.log(variableGlobal);
}

//Este console me permite ver la diferencia de valores entre las variables (global y local). Este muestra la variable global
console.log(variableGlobal)

*/

/*
//Funciones anónimas
const suma = function (a, b) {
    return a + b;
}

suma(5, 6);

//Funciones flecha
const division = (a,b) =>{
    return a/b;
}

//También las podemos escribir en una sola línea
const resta = (a, b) => {return a - b}

//Podemos prescindir de las llaves
const multiplicacion = (a, b) => a * b

//Y si reciben un solo parámetro, hasta de los paréntesis
const mensaje = x =>'El mensaje es: '+x

console.log(mensaje('las funciones flecha son lo máximo!'))
console.log(division(70,35));

FIN FUNCIONES
*/

/* PRODUCTO 
class Producto {

    constructor(nombre, precio, categoria) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.categoria = categoria;
        this.vendido = false;
    }

    sumaIva() {
        this.precio = this.precio * 1.21;
    }

    vender() {
        this.vendido = true;
    }

    
}

const producto1 = new Producto('manzanas', 250,'verduras');
const producto2 = new Producto ('caramelos','80','golosinas');

producto1.sumaIva();
console.log('El precio de '+producto1.nombre + ' es '+ producto1.precio);

producto2.sumaIva();
console.log('El precio de '+producto2.nombre + ' es '+ producto2.precio);

FIN PRODUCTO
*/

/* OBJETOS

let nombre = 'Homero';
let apellido = 'Simpson';
let edad = 38;

let nombre2 = 'Marge';
let apellido2 = 'Bouvier';
let edad2 = 38;


let usuario = {
    nombre: 'Homero',
    apellido: 'Simpson',
    edad: 38,
    peso: 69
}

const auto1 = {
    marca: 'Toyota',
    modelo: 'Etios',
    anio: 2014,
    color: 'gris',
    puertas: 4
}

const auto2 = {
    marca: 'Volkswagen',
    modelo: 'Gol',
    anio: 1944,
    color: 'verde',
    puertas: 3,
    hablar: function () {
        console.log('piiip,piip')
    }
}

console.log(persona.peso);
persona.peso = 151;
console.log(persona.peso);

persona['edad'] = 40

//hablar();
//auto1.hablar();


function Auto(marca, modelo, anio, color, puertas, patente) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this.color = color;
    this.puertas = puertas;
    this.patente = patente;
    this.hablar = function () {
        console.log('Hola, soy ' + this.modelo)
    }
}

const auto3 = new Auto('GMC', 'canionero', 2020, 'rojo', 4, 'AC123CD');

auto3.hablar()

//let marcaUser = prompt('Ingresa la marca')

//const auto4 =new Auto(marcaUser,'Vento',2015,'negro',5,'OOO123' );

let palabra = 'Javascript';

if (!'patente' in auto3) {
    auto3.patente = 'aaa234';
    console.log(auto3.patente);
} else {
    console.log(auto3.patente);
}

for (const propiedad in persona) {
    console.log(persona[propiedad])
}

FIN OBJETOS
*/


/* ARRAYS 

/Declaramos un array vacío
const arrayVacio = [];
const carrito = [];

const familiaSimpson = ['Abe Simpson', 'Homero','Marge','Bart','Lisa','Maggie','Huesos','Bola de Nieve']; 
const numerosUnaCifra =[10,20,30,40,50,60,70];
/* console.log(familiaSimpson);

console.log(familiaSimpson[0]);
console.log(familiaSimpson[1]);
console.log(familiaSimpson[2]);
console.log(familiaSimpson[3]);
console.log(familiaSimpson[4]);
console.log(familiaSimpson[5]);
console.log(familiaSimpson[6]);
console.log(familiaSimpson[7]); 

console.log(familiaSimpson.length); */

/* for (let index = 0; index < familiaSimpson.length; index++) {
    
    console.log("El miembro número "+(index+1)+ " de la familia es: " +familiaSimpson[index]+". Su posición en el array es "+index); 
}



let resultado = numerosUnaCifra[4]*3
console.log("El resultado es "+resultado);

for (let index = 0; index < numerosUnaCifra.length; index++) {
    let resultado = numerosUnaCifra[index]*3;
    console.log("El resultado es "+resultado);
    
}
 */
/* 
const mixto =["Juan",37,false,{apellido:"Perez",edad:20},1.2,true]

for (let index = 0; index < mixto.length; index++) {
    console.log(mixto[index]); 
}

mixto[10]="Nuevo elemento";
console.log(mixto);

for (let index = 0; index < mixto.length; index++) {
    console.log(mixto[index]);
    
} */


/*Métodos de arrays 
const listaDeCompras=[];
console.log(listaDeCompras, listaDeCompras.length);
listaDeCompras.push("espátula");
console.log(listaDeCompras, listaDeCompras.length);
listaDeCompras.push("destapador", "cuchilla tramontina","afilador");
console.log(listaDeCompras, listaDeCompras.length);
listaDeCompras.unshift("Sartén Essen");
console.log(listaDeCompras, listaDeCompras.length);
listaDeCompras.pop();
console.log(listaDeCompras, listaDeCompras.length);
listaDeCompras.shift();
listaDeCompras.push('lavandina','detergente','espirales');
listaDeCompras.splice(1,2);
console.log(listaDeCompras, listaDeCompras.length);

const numeros =[0,1,2,3,4,5,6,7,8,9]
numeros.splice(2,3)
console.log(numeros);

let imprimible = listaDeCompras.join(" - ");
console.log(imprimible);

const perros =["firu","terbal","bolt","srBigotes", "lazzie"];
const gatos =["michi","fuz"];
const mascotas = perros.concat(gatos);
console.log(mascotas);
const mascotas2 = gatos.concat(perros);
console.log(mascotas2);

const otrosPerros =perros.slice(2);

console.log(perros.indexOf("firu"));
console.log(perros.indexOf("Oddie"));


//Arrays de Objetos

const librosHarryPotter =[{id:100,titulo:'Harry Potter y la Piedra Filosofal',fecha:1997},
{id:2,titulo:'Harry Potter y la Cámara de los Secretos',fecha:1998},
{id:3,titulo:'Harry Potter y el prisionero de Azkabán',fecha:1999},
{id:4,titulo:'Harry Potter y el cáliz de fuego',fecha:2000}]

for (const libro of librosHarryPotter) {
    console.log(libro.titulo, libro.fecha, libro.id);
    libro.id=libro.id+1;
    console.log(libro.id);
}

FIN DE ARRAYS
*/


/* FUNCIONES DE ORDEN SUPERIOR 

/* function porCadaUno(array,fn){
    for (const element of array) {
        fn(element);
    }
}

function cuadrado(num){
    let resultado = num * num;
    console.log(resultado);

}

function cubo(num){
    let resultado = num * num*num;
    console.log(resultado);
} 

const numeros = [1,2,3,4,5,6]

/* porCadaUno(numeros,cuadrado);
porCadaUno(numeros,cubo);

const duplicado=[]

porCadaUno(numeros, (element)=>{
    duplicado.push(element*2);
})

console.log(duplicado); */

/* numeros.forEach((elemento) => {
console.log(elemento);    
}); 

const cursos = [{
        nombre: 'Javascript',
        precio: 15000
    },
    {
        nombre: 'ReactJS',
        precio: 22000
    },
    {
        nombre: 'AngularJS',
        precio: 22000
    },
    {
        nombre: 'Desarrollo Web',
        precio: 16000
    },
]



const encontrado = cursos.find((curso)=>curso.precio>20000);
const noEncontrado = cursos.find((curso)=>curso.precio==10000);
console.log(encontrado)
console.log(noEncontrado)

const filtrado = cursos.filter((curso)=>curso.precio>20000);
console.log(filtrado);

const infiltrado = cursos.filter((curso) => curso.precio <10000);
console.log(infiltrado);

const alguno = cursos.some((curso)=>curso.precio>20000);
const ninguno = cursos.some((curso)=>curso.nombre=='Wordpress');

console.log(alguno);
console.log(ninguno);


const numerosxcien = numeros.map((numero)=>numero*100);
const nombres = cursos.map((curso)=>curso.nombre);


console.log(numerosxcien);
console.log(nombres);

const precioBeca = cursos.map((curso)=>{
    return{
        nombre:curso.nombre,
        precio:curso.precio*.30
    }
})

console.log(precioBeca);

const total = numerosxcien.reduce((ac,num)=>ac+num,0);
console.log(total);

const desordenados = [1,7,4,28,2,78,6]
desordenados.sort((a,b)=>a-b);
console.log(desordenados);


 const almohadon = {
    radio: 15,
    altura:10,
    circunferencia : 2*Math.PI*radio,
    superficie:Math.PI*Math.pow(radio,2)

} 


let azar = Math.random();
let azar1a10=Math.random()*10;
console.log(azar1a10);

console.log(Math.ceil(azar1a10));
console.log(Math.floor(azar1a10));
console.log(Math.round(azar1a10)); 

 let dados=[]

for(let i=0; i<5;i++){
    let dado = Math.ceil(Math.random()*6);
    dados.push(dado);
}

console.log(dados); 
console.log("----------------------------------")
let fechaActual= new Date();
console.log(fechaActual);

let fechaSimple = new Date(2022,2,14);
let ultimoSegundo = new Date(2022, 11, 31, 23, 59, 59);

console.log(ultimoSegundo);
let casiNavidad = new Date(("May 22, 2022 23:59:59"));
console.log(casiNavidad.getFullYear());
console.log(casiNavidad.getMonth());
console.log(casiNavidad.getDay());
console.log(casiNavidad.getDate());
console.log(casiNavidad.toString());


FIN DE FUNCIONES DE ORDEN SUPERIOR  */ 


 
/* DOM     */

/* let nodo = document.head;

console.log(nodo.nodeType); 

let primerNodo = document.documentElement.firstChild;

if(primerNodo.nodeType ==Node.COMMENT_NODE){
    console.log('El primer nodo es un comentario, y su nodeType es' + primerNodo.nodeType);
}else{
    console.log('No hay un comentario al principio');
} */


/* let elementoID = document.getElementById('tituloDOM');
console.log(elementoID);

let elementosClass =document.getElementsByClassName('resaltado');
console.log(elementosClass);

let elementosTag =document.getElementsByTagName('p');
console.log(elementosTag);

for (const elemento of elementosTag) {
    console.log(elemento)
}

let elementoQS= document.querySelector('#parrafo');
console.log(elementoQS);

let elementoQSClass = document.querySelector('.resaltado');
console.log(elementoQSClass);

let todosQS= document.querySelectorAll('.resaltado');
console.log(todosQS); 

let titulo = document.getElementById('tituloPrincipal');
console.log(titulo);
console.log(titulo.innerText);
console.log(titulo.className);


 let nuevoTexto= prompt('ingresa el nuevo texto para el título')
titulo.innerText = nuevoTexto; 

titulo.className = 'greyBG';

let zapas = document.getElementById('zapas');
zapas.src = 'https://i.pinimg.com/originals/86/de/4c/86de4c10aba76910b854adb7814c2cc7.png'

let contenedor = document.querySelector('#containerPrincipal');
contenedor.innerHTML += '<p>Soy un nuevo párrafo agregado a través del método innerHTML. Enjoy me! </p>';

let nuevoDiv = document.createElement('div');
console.log(nuevoDiv);
nuevoDiv.innerHTML = '<h2>Creando nuevos elementos</h2>';
console.log(nuevoDiv);
document.body.append(nuevoDiv);
document.body.prepend(nuevoDiv);

let imagen = document.querySelector('#zapas');
imagen.remove();


let lista = document.querySelector('#listaPersonajes');
let personajes = ['Tokio', 'El profesor', 'Berlín', 'Río', 'Nairobi', 'Denver'];

for (const personaje of personajes) {
    let li = document.createElement('li');
    li.innerText = personaje;
    lista.appendChild(li);
}

let producto = {
    id: 1,
    nombre: "SMART TV SAMSUNG 32 PULGADAS HD UN32T4300AGCZB",
    precio: 87000,
    imagen: './img/TV32.jpg',
    descripcion: 'Led Smart TV 32" HD. Resolucion 1366x768PX. Sintonizador TDA. Brilllo 250 CD/M2. Frecuencia de barrido 60HZ. Sonido Stereo. Potencia RMS 10W. Wi Fi. HDMI. USB. Salidas de audio Optical. Entrada de video componente.'
};


let concatenado = "ID: " + producto.id + " - Producto: " + producto.nombre + " $ " + producto.precio;
console.log(concatenado);

let plantilla = `ID: ${producto.id} - Producto ${producto.nombre} -$ ${producto.precio} `
console.log(plantilla);


let entrada = prompt('Ingresa tu nombre');
let tarjeta = document.createElement('div');
tarjeta.className = 'card';
tarjeta.innerHTML = `<h1> Bienvenido/a ${entrada}</h1>
<h2> ${producto.nombre} </h2>
<img src="${producto.imagen}" class="imagen" alt="Smart 32"> <br>
<p> ${producto.descripcion} </p>
<p> <span class="resaltado"> $ ${producto.precio} </span></p> `;

nuevoDiv.appendChild(tarjeta);

FIN DEL DOM */

// CAMBIAR IMAGEN NO FUNCIONA

/*
function imagenSeleccion() {
    document.getElementById('imagen-pelicula').style.display = 'flex';
}

for (const peli of peliculas) {
    peli.addEventListener('click', ()=>{
        let peliElegidaImagen = peli.nombre
        let peliSeleccionada = peliculas.find((peli)=>peli.image == peliElegidaImagen);
        imagenSeleccion(peliSeleccionada);
    })
}


<div id="imagen-pelicula"><img id="nombre-peli-image" src="/IMAGES/avengersendgame.jpg" alt=""></div>

*/


/////////////////////////////////////////////////////////////////////////////////////////////

/* DESAFIOS ANTERIORES */


/*  ENTREGA 1 COMPLEMENTARIA
let usuario = prompt("Ingresar el superheroe mas poderoso de Marvel");

while (usuario != "ESC"){
    switch (usuario){
        case "Thor":
            alert("Bienvenido!");
            break;

        case "thor":
            alert("Bienvenido!");
            break;

        default:
            alert("No estas en lo correcto. Te faltan mirar mas peliculas de Marvel");
            break;
    }
    break;
}
*/



 /* ENTREGA 2 

let respuesta = prompt("Quien es el villano mas poderoso en el universo Marvel?");
if (respuesta == "thanos"){
    alert("No tan rapido...");
}else if(respuesta == "ultron"){
    alert("Aun no terminaste de ver todas las peliculas?");
}


/*  ENTREGA 3 */

/*
class Pelicula { 
    constructor(nombre, precio, duracion){
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.duracion = parseFloat(duracion);
    }
}

const spidermanNoWayHome = new Pelicula ("Spiderman No Way Home", 1500, 180);
const avengersEndgame = new Pelicula ("Avengers Endgame", 1500, 185);
const readyPlayerOne = new Pelicula ("Ready Player One", 1000, 160);
const toyStory = new Pelicula ("Toy Story 4", 1200, 145);
const interestellar = new Pelicula ("Interestellar", 900, 165);
const spiderman = new Pelicula ("Spiderman Tres", 1600, 145);
const cars = new Pelicula ("Cars Tres", 900, 130);
const venom = new Pelicula ("Venom", 1000, 130);
const theAmazingSpiderman = new Pelicula ("The Amazing Spiderman", 1200, 160);
const harryPotter = new Pelicula ("Harry Potter", 1600, 170);
const backToTheFuture = new Pelicula ("Back To The Future", 1500, 150); 


let cantidad = " ";
let pelicula = " ";
let acumulado = " ";

 function carrito(){
     while (cantidad != 6) {
        cantidad = prompt("Que pelicula quisieras ver?" + "\n" + "\n" + 
        "1 Spiderman No Way Home" + "\n" + "2 ToyStory" + "\n" + "3 Venom" + "\n" + "4 Harry Potter" + "\n" 
        + "5 Interestellar");
        switch (cantidad) {
            case "1":
                pelicula = "Spiderman No Way Home";
                alert(acumulado = acumulado + "\n" + pelicula);
                break;
            case "2":
                pelicula = "ToyStory";
                alert(acumulado = acumulado + "\n" + pelicula);
                break;
            case "3":
                pelicula = "Venom";
                alert(acumulado = acumulado + "\n" + pelicula);
                break;
            case "4":
                    pelicula = "Harry Potter";
                    alert(acumulado = acumulado + "\n" + pelicula);
                    break;
            case "5":
                        pelicula = "Interestellar";
                        alert(acumulado = acumulado + "\n" + pelicula);
                        break;

        }

    }
    alert("Peliculas seleccionadas" + "\n" + acumulado + "\n" + "\n" + "Gracias por su compra!");
}
    
carrito();
*/

/////////////////////////////////////////////////////

//ENTREGA 5

/*
// Menu de seleccion
let cartelera = "Peliculas de esta semana! \n";
cartelera += "1. Seleccionar pelicula \n";
cartelera += "2. Mostrar seleccion \n";
cartelera += "3. Eliminar seleccion \n";
cartelera += "0. Salir \n";

// carrito
const carrito = [];

const seleccionarPelicula =() =>{
    //  lista de peliculas para el usuario
    let lista = "seleccione la pelicula \n";
    for (const pelicula of peliculas) {
        lista += pelicula.id + "---" + pelicula.nombre + "/" + "$" + pelicula.precio + "/" +  pelicula.duracion + "minutos" + "\n";
    }
    // guardado de la pelicula seleccionada por el usuario
    let peliculaSeleccionada = parseInt(prompt(lista));

    // se ingresa la pelicula en el carrito
    for (const verificarpelicula of peliculas) {
        if (verificarpelicula.id == peliculaSeleccionada) {
            carrito.push(verificarpelicula);
            alert("pelicula agregada");
            return;
        }
    }

    alert("pelicula no disponible");
    return;
}

const mostrarCarrito =() =>{
    let seleccion = "Su pelicula seleccionada \n";
    let index = 1;
    for (const pelicula of carrito) {
        seleccion += index++ + "-" + pelicula.nombre + "\n";   
    }
    alert(seleccion);
}


const eliminarSeleccion =() =>{
    let seleccion = "Su pelicula seleccionada \n";
    let index = 1;
    for (const pelicula of carrito) {
        seleccion += index++ + "-" + pelicula.nombre + "\n";   
    }
    let opcion = parseInt(prompt(seleccion));
    carrito.splice(opcion -1, 1);
    alert("Pelicula seleccionada, eliminada");
}

// MENU continuacion
while(true){
    let seleccion = parseInt(prompt(cartelera));
    switch (seleccion) {
        case 0:
            alert("Operacion cancelada");
            break;
        case 1:
            seleccionarPelicula();
            break;
        case 2:
            mostrarCarrito();
            break;
        case 3:
            eliminarSeleccion();
            break;
    
        default:
            alert("Elija una opcion valida");
            break;
    }
    if(seleccion == 0){
        break;
    }
}






/*
OPCION DE FORMULARIO INCOMPLETO

const containerCards = document.getElementsByClassName('container-cards');
const selectProducts = document.getElementById('select-products');

window.addEventListener('load', listSelect);

selectProducts.addEventListener('change', renderCards);

function renderCards() {
    peliculas.map(pelicula => {pelicula.nombre === selectProducts.value ? createCards(pelicula) : null });
}

function listSelect() {
    peliculas.map( pelicula =>{
        let option = document.createElement('option');
        option.value = pelicula.nombre;
        option.textContent = pelicula.nombre;
        selectProducts.appendChild(option);
    });
}

function createCards(pelicula) {
    const { nombre, id, precio, image} = pelicula

    const card = document.createElement('div');
    card.classList.add('card-product');

    const imgCard = document.createElement('img');
    imgCard.setAttribute('src', image);
    imgCard.setAttribute('alt', `${id}-${nombre}` );
    imgCard.classList.add('img-movie'); 

    const nameCard = document.createElement('p');
    nameCard.textContent = nombre;
    nameCard.classList.add('nombre-movie');

    const priceCard = document.createElement('p');
    priceCard.classList.add('precio-movie'); 
    priceCard.textContent = precio;

    const btnAdd = document.createElement('button');
    btnAdd.setAttribute('id', id);
    btnAdd.classList.add('btn-add');
    btnAdd.textContent = "Agregar pelicula";

    card.appendChild(imgCard);
    card.appendChild(nameCard);
    card.appendChild(priceCard);
    card.appendChild(btnAdd);

    containerCards.appendChild(card);
}

*/