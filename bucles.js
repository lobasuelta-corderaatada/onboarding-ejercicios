let num = prompt("Ingrese numerito")

for (let i=1; i<=num; i++){
    if (num%i===0){
        console.log(i)
        alert(i)
    }
}

//*********Dificultad: Facil***********
//Ejercicio 1

const repeticiones = 3;
for (let i = 0; i < repeticiones; i++) {
    console.log("La persona se levanta.");
    console.log("La persona se sienta.");
}


//Ejercicio 2

const personas = 15;
for (let i = 1; i <= personas; i++) {
    console.log(`persona ${i}:`);
    console.log("poner plato en el centro");
    console.log("poner el tenedor a la izquierda.");
    console.log("colocar el cuchillo a la derecha.");
    console.log("colocar el vaso al frente.");
    console.log();
}

//Ejercicio 3

for (let i = 10; i <= 20; i++) {
    console.log("num: " + i);
}

//Ejercicio 4

for (let i = 10; i <= 20; i++) {
    console.log("num: " + i);
}

//Ejercicio 5

//a) no
//b) no
//c) que la bombilla esté lo suficientemente ligera
//d) si, se podria
//e) bajar de la escalera no necesariamente se realiza siempre
 
//Ejercicio 6

let numero = prompt("Ingresa un número entre 1 y 100:");
numero = parseInt(numero);

if (numero >= 1 && numero <= 100) {
    console.log(`Números descendentes desde ${numero} hasta 0:`);
    for (let i = numero; i >= 0; i--) {
        console.log(i);
    }
} else {
    console.log("El número ingresado no está dentro del rango válido (1 a 100).");
}

//Ejercicio 7

let numero = prompt("Ingresa un número entre 1 y 10 para ver su tabla de multiplicar:");
numero = parseInt(numero);

if (numero >= 1 && numero <= 10) {
    console.log(`Tabla de multiplicar del ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        let resultado = i * numero;
        console.log(`${i}x${numero}=${resultado}`);
    }
} else {
    console.log("El número ingresado no está dentro del rango válido (1 a 10).");
}

//Ejercicio 9

let suma = 0;
let numero;

do {
    numero = prompt("Ingresa un número (ingresa 0 para terminar):");
    let num = parseInt(numero);
    if (!isNaN(num)) {
        suma += num;
    } else {
        console.log("Por favor ingresa un número válido.");
    }

} while (numero !== "0");

console.log(`La suma de los números ingresados es: ${suma}`);


//Ejercicio 10


let persona = {
    nombre: "Jadri",
    apellido: "Romeo",
    origen: "Argentina",
    estudios: "Escritura",
    edad: 21
}

console.log("propiedades del objeto:");

for (let clave in persona) {
    console.log(clave);
}

//Ejercicio 11

let persona = {
    nombre: "Jadri",
    apellido: "Romeo",
    origen: "Argentina",
    estudios: "Escritura",
    edad: 21
}

console.log("propiedades del objeto:");

for (let clave in persona) {
    console.log(persona[clave]);
}

//*********Dificultad: Facil***********

//Ejercicio 1

let numeroSecreto = 42; 
let intentos = 0;
let numeroIngresado;

while (true) {
    numeroIngresado = prompt("Ingresa un número para intentar adivinar el número secreto");
    let num = parseInt(numeroIngresado);
    if (!isNaN(num)) {
        intentos++;
        if (num === numeroSecreto) {
            console.log(`¡Acertaste! El número secreto era ${numeroSecreto} y has realizado ${intentos} intentos`);
            break;
        } else if (num > numeroSecreto) {
            console.log("El número ingresado es mayor que el secreto");
        } else {
            console.log("El número ingresado es menor que el secreto");
        }
    } else {
        console.log("Por favor ingresa un número válido");
    }
}

//Ejercicio 2

let numero = prompt("Ingresa un número para encontrar sus divisores");
numero = parseInt(numero);
if (!isNaN(numero) && numero > 0) {
    console.log(`Los divisores de ${numero} son:`);
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            console.log(i);
        }
    }
} else {
    console.log("Por favor, ingresa un número entero positivo válido");
}

//Ejercicio 3

function RingBell() {
    console.log("Ding Dong");
    return "Ding Dong";
}
let veces = prompt("Ingresa un número para repetir el sonido de la campana:");
veces = parseInt(veces);
if (!isNaN(veces) && veces > 0) {
    for (let i = 0; i < veces; i++) {
        console.log(RingBell());
    }
} else {
    console.log("Por favor, ingresa un número entero positivo válido.");
}

//Ejercicio 4

const dateLimit = new Date("1997-08-03");
const dates = ["1984-02-18", "1998-02-03", "1973-07-15", "2024-10-31", "2081-09-01"];
if (!(dateLimit instanceof Date)) {
    dateLimit = new Date(dateLimit);
}
console.log("Fechas mayores o iguales a la fecha límite:");

for (let date of dates) {
    let currentDate = new Date(date);
    if (currentDate >= dateLimit) {
        console.log(currentDate.toISOString().slice(0, 10));
    }
}

//Ejercicio 5

let colores = ["Rojo", "Verde", "Azul", "Violeta", "Marrón", "Negro", "Blanco"];
console.log("Colores:");

for (let color of colores) {
    console.log(color);
}

//Ejercicio 6

function imprimirColores() {
    let colores = ["Rojo", "Verde", "Azul", "Violeta", "Marrón", "Negro", "Blanco"];
    console.log("Colores:");
    for (let color of colores) {
        console.log(color);
    }
}

imprimirColores();

//Ejercicio 7

let numeros = [5, 7, 1, 3, 50];
for (let numero of numeros) {
    let doble = numero * 2;
    console.log(`El número es ${numero} y su doble es ${doble}`);
}

//Ejercicio 8

let familia = [
    { nombre: 'María', apellido: 'López', edad: 40, miembro: 'madre' },
    { nombre: 'Juan', apellido: 'Pérez', edad: 38, miembro: 'padre' },
    { nombre: 'Romina', apellido: 'Pérez', edad: 13, miembro: 'hija' },
    { nombre: 'Tomás', apellido: 'Pérez', edad: 10, miembro: 'hijo' }
]

function presentarFamilia(familia) {
    for (let miembro of familia) {
        let mensaje = `Hola soy ${miembro.nombre} ${miembro.apellido} (${miembro.miembro}) y tengo ${miembro.edad} años.`;
        console.log(mensaje);
    }
}

presentarFamilia(familia);

//*********Dificultad: Alta***********
//Ejercicio 1

let sumaPares = 0;
let sumaImpares = 0;
function esPar(numero) {
    return numero % 2 === 0;
}

while (true) {
    let numero = prompt("Ingresa un número (ingresa 0 para terminar):");
    numero = parseInt(numero);
    if (!isNaN(numero)) {
        if (numero === 0) {
            break;
        } else if (esPar(numero)) {
            sumaPares += numero;
        } else {
            sumaImpares += numero;
        }
    } else {
        console.log("Por favor, ingresa un número válido.");
    }
}

console.log(`Suma de números pares: ${sumaPares}`);
console.log(`Suma de números impares: ${sumaImpares}`);

//Ejercicio 2

let numeros = [56, 23, 78, 45, 90, 12, 67, 34, 89, 54];
let maximo = numeros[0];
for (let numero of numeros) {
    if (numero > maximo) {
        maximo = numero;
    }
}

console.log(`El número más grande en la matriz es: ${maximo}`);

