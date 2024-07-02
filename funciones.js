//*********Dificultad: Facil***********
//Ejercicio 1

function add() {
    const resultado = 100 * 20;
    console.log(resultado);
}

//Ejercicio 2

function add() {
    const resultado = 100 * 20;
    console.log(resultado);
}

add();

//Ejercicio 3

function add(a, b) {
    const resultado = a * b;
    console.log(resultado);
}

add(100, 20);

//Ejercicio 4

function add(a, b) {
    const resultado = a * b;
    console.log(resultado);
}

add(100, 20); 
add(50, 4); 
add(10, 10);

//Ejercicio 5

function add(a, b) {
    const resultado = a * b;
    return resultado;
}

let resultadoDeAdd = add();
console.log(resultadoDeAdd);

//Ejercicio 6

let add = function() {
    const resultado = 100 * 20;
    return resultado;
}

let resultadoDeAdd = add();
console.log(resultadoDeAdd);

//*********Dificultad: Media***********
//Ejercicio 1 

function saludar(nombre) {
    console.log("Holi" + nombre + "!" + "Bienvenida.");
}

saludar("Jadri");

//Ejercicio 2 

let multiplicacion = function(a, b) {
    return a * b;
}

let resultado1 = multiplicacion(5, 3);
let resultado2 = multiplicacion(10, 2);

console.log(resultado1);
console.log(resultado2);

//Ejercicio 3

function area(base, altura) {
    let areaTriangulo = (base * altura) / 2;
    return areaTriangulo;
}

let resultado = area(10, 5);
console.log("El área del triángulo es:", resultado);

//Ejercicio 4

function perímetro(lado1, lado2, lado3) {
    let perímetroTriángulo = lado1 + lado2 + lado3;
    return perímetroTriángulo;
}

let resultadoPerímetro = perímetro(5, 7, 9);
console.log("El perímetro del triángulo es:", resultadoPerímetro); // Imprime "El perímetro del triángulo es: 21" en la consola

//Ejercicio 5 

function calcularPrecioTotal(precio, cantidad) {
    let precioTotal = precio * cantidad;

    if (cantidad >= 20) {
        precioTotal *= 0.8;
    } else if (cantidad >= 10) {
        precioTotal *= 0.9;
    }

    return precioTotal;
}

let precioTotal1 = calcularPrecioTotal(10, 5); 
console.log("Precio total 1:", precioTotal1);

let precioTotal2 = calcularPrecioTotal(20, 15);
console.log("Precio total 2:", precioTotal2);

let precioTotal3 = calcularPrecioTotal(30, 25);
console.log("Precio total 3:", precioTotal3); 

//Ejercicio 6 

function isAnAdult(edad) {
    if (edad >= 18) {
        return "Usted es un adulto";
    } else {
        return "Usted no es un adulto";
    }
}

console.log(isAnAdult(20)); 
console.log(isAnAdult(16)); 
console.log(isAnAdult(18));
console.log(isAnAdult(25)); 
console.log(isAnAdult(10));

//*********Dificultad: Alta***********
//Ejercicio 1 

function calcularImpuesto(ingresoAnual) {
let impuesto;

if (ingresoAnual <= 10000) {
    impuesto = ingresoAnual * 0.1;
} else if (ingresoAnual <= 20000) {
    impuesto = ingresoAnual * 0.15;
} else {
    impuesto = ingresoAnual * 0.2;
}

return impuesto;
}

console.log("Impuesto para $8000", calcularImpuesto(8000)); // Imprime 800 (10% de $8000)
console.log("Impuesto para $15000:", calcularImpuesto(15000)); // Imprime 2250 (15% de $15000)
console.log("Impuesto para $25000:", calcularImpuesto(25000)); // Imprime 5000 (20% de $25000)

//Ejercicio 2

function verificarDia(numero) {
    let mensaje;
    switch (numero) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            mensaje = "Es un día hábil";
            break;
        case 6:
        case 7:
            mensaje = "Es fin de semana";
            break;
        default:
            mensaje = "Número de día inválido";
    }

    return mensaje;
}

console.log(verificarDia(1));
console.log(verificarDia(3));
console.log(verificarDia(6));
console.log(verificarDia(8));

//Ejercicio 3 

function ingresarInformacionPersonal() {
let nombre = prompt("Ingrese su Nombre:");

if (!nombre) {
    console.error("El nombre no puede estar vacío");
    return; 
}

let apellido = prompt("Ingrese su Apellido:");

if (!apellido || apellido !== nombre) {
    console.error("El apellido no puede estar vacío o no coincide con el nombre ingresado");
    return; 
}

let edad = prompt("Ingrese su Edad:");

    edad = Number(edad);

if (isNaN(edad) || edad <= 0) {
    console.error("La edad debe ser un número válido y mayor que cero");
    return; 
}

let informacionPersonal = {
    nombre: nombre,
    apellido: apellido,
    edad: edad
};

    console.log("Información Personal:");
    console.log(informacionPersonal);
}

ingresarInformacionPersonal();

//Ejercicio 4

function saludo(nombre) {
    return `Hola, mi nombre es ${nombre}`;
}

function calcularEdad(anioNacimiento, anioActual) {
    return anioActual - anioNacimiento;
}

function present() {
    let nombre = prompt("Ingrese su nombre:");
    let anioNacimiento = prompt("Ingrese su año de nacimiento:");
    let anioActual = new Date().getFullYear();
    let edad = calcularEdad(anioNacimiento, anioActual);
    let mensaje = saludo(nombre) + `\nTengo ${edad} años.`;
    alert(mensaje);
}

present();

