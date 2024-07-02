//*********Dificultad: Facil***********
//Ejercicio 1
// Si piedra y ​piedra entonces empate
// Si piedra y papel entonces pierde
// Si piedra y tijera entonces gana

// Si papel y piedra entonces gana
// Si papel y papel entonces empate
// Si papel y ​​tijera entonces pierde

// Si tijera y piedra entonces pierde
// Si tijera y ​​papel entonces gana
// Si tijera y tijera entonces empate

//Ejercicio 2
//En el documento .word

//Ejercicio 3
//En el documento .word

//Ejercicio 4
let num1 = 4
let num2 = 5

if (num1 > num2) {
    console.log(num1);
} else {
    console.log(num2);
}

//Ejercicio 5
if (num1 > num2) {
    console.log(num1);
} else if (num2 > num1) {
    console.log(num2);
} else {
    console.log("Los numeros son iguales");
}

//Ejercicio 6
if (num1 === num2) {
    console.log("Los números son iguales");
} else {
    console.log("Los números son diferentes");
}

//Ejercicio 7
let fecha1 = "2018-9-2"
let fecha2 = "2023-7-5"

if (fecha1 > fecha2) {
    console.log(`La fecha ${fecha1} es mayor que ${fecha2}`);
} else if (fecha1 === fecha2) {
    console.log("Las fechas son iguales");
}

//*********Dificultad: Medium***********
//Ejercicio 1
//Pseudo-code
////////Diagrama 1

// Inicio
// Ejecutar Tarea1
// Si la condición es SÍ
//     Ejecutar Tarea2
//     Ejecutar Tarea3
// Ejecutar Tarea4
// Fin

// ////////Diagrama 2

// Inicio
// Ejecutar Tarea1
// Si la condición es SÍ
//     Ejecutar Tarea2
//     Ejecutar Tarea3
// Si la condición es NO
//     Ejecutar Tarea4
// Fin

// ////////Diagrama 3

// Inicio
// Ejecutar Tarea1
// Si la condición es SÍ
//     Ejecutar Tarea2
// Fin

// ////////Diagrama 4

// Inicio
// Ejecutar Tarea1
// Si la condición es SÍ
//     Si la condición es SI
//     Ejecutar Tarea2
// Fin


// //Ejercicio 2

// ////////Diagrama 1

// Inicio
// Levantarse
// Si hace frio
//     Cerrar la ventana
//     Cerrar la cortina
// Cambiarse
// Fin

// ////////Diagrama 2

// Inicio
// Levantarse
// Si hace frio
//     Cerrar la ventana
//     Cerrar la cortina
// Si hace calor
//     Prender el aire
// Fin

// ////////Diagrama 3

// Inicio
// Abrir los ojos
// Si es de día
//     Levantarse
// Fin

// ////////Diagrama 4

// Inicio
// Abrir los ojos
// Si es de día
//     Si es dia habil
//     Trabajar
// Fin

// //Ejercicio 3

// En el caso del primer diagrama 
//     las tareas 2 y 3 se ejecutan 
//     solo en el caso de que la condicion
//     sea verdadera. La tarea 4 se ejecuta siempre.

// //Ejercicio 4

colour = prompt("Elija el color");

switch (colour) {
    case "red":
        alert("The color of passion");
        break;
    case "blue":
        alert("The color of the sea");
        break;
    case "green":
        alert("The color of nature");
        break;
}

//Ejercicio 5

numero1 = prompt("Elija un numero (del 1 al 100)");
numero2 = prompt("Elija un numero (del 1 al 100)");
operacion = prompt("Elija una operación (suma, resta, multiplicacion, division)");

switch (operacion) {
    case "suma":
        alert((numero1+numero2));
        break;
    case "resta":
        alert((numero1-numero2));
        break;
    case "multiplicacion":
        alert((numero1*numero2));
        break;
    case "division":
        alert((numero1/numero2));
        break;
}

//Ejercicio 6

let persona1 = {
    nombre: "Jadri",
    edad: 21,
    altura: 165,
}

let persona2 = {
    nombre: "Leo",
    edad: 26,
    altura: 180,
}

if (persona1.altura > persona2.altura){
    console.log("Jadri es mas alta que Leo"); 
} else {
    console.log("Leo es más alto que Jadri");
}

if (persona1.edad > persona2.edad){
    console.log("Jadri es mas grande que Leo"); 
} else {
    console.log("Leo es más grande que Jadri");
}

//Ejercicio 7

nombre = prompt("Inserte su nombre");
edad = prompt("Inserte su edad");
altura = prompt("Inserte su altura");
vision = prompt("Inserte su vision");

if (edad >= 18){
    alert("Usted esta calificado para conducir");
} else {
    alert("Usted no esta calificado para conducir")
}

//Ejercicio 8

edad = prompt("Inserte su edad aqui");

if (edad <= 12){
    alert("Usted es infante");
} else if (edad <= 18){
    alert("Usted es adolescente");
} else if (edad <= 45){
    alert("Usted es un joven mayor");
} else {
    alert("¿Es realmente tan viejo?");
}

//Ejercicio 9

numero = prompt("Inserte un numero del 1 al 3");

if (numero <= 1){
    alert("El numero ingresado es 1");
} else if (numero <= 2) {
    alert("El numero ingresado es 2");
} else if (numero <= 3) {
    alert("El numero ingresado es 3");
} else {
    alert("Ese valor no esta permitido");
}

//*********Dificultad: Alta***********
//Ejercicio 1

nombre = prompt("Inserte su nombre");

if (nombre === "Jadri"){
    alert("Bienvenida");
} else if (confirm("¿Tiene pase VIP?") == true){
    alert("Bienvenida");
} else if (confirm("¿Quiere usar su Ticket?") == true){
    alert("Bienvenida");
} else if (confirm("¿Quiere comprar un Ticket?") == true){
    plata = prompt("Inserte su dinero disponible")
    if (plata >= 1000){
    alert("¡Venta realizada con exito! ¡Bienvenida!");
    } else {
    alert("Lamentablemente usted no dispone de saldo disponible");
    }
} else {
    alert("¡Adios!");
}
