//Tipos de datos
// String cadena de caracteres
// Number numero
// Boolean true o false
// Null valor vacio
// Undefined sin valor


// console.log('"hola mundo"');
// console.log("'hola mundo'");
// console.log(`hola mundo`);

// console.log(1982);



//Una variable es una caja que puede contener un valor.
//Se declara en camelCase o snake_case o PascalCase 

//camelcase = miVariable
//snake_case = mi_variable
//PascalCase = MiVariable

//var no recomendamos usar var, solo let y const
//let no se puede redeclarar

// let datoImportante = "hola mundo"
// console.log(datoImportante);
// datoImportante = 5
// console.log(datoImportante);

const DNI = 12345678


// console.log(DNI);

//Boleanos true o false

// let esVerdad = false
// console.log(!esVerdad)

//Operadores de comparacion

//>
//>=
//<
//<=
//==
//===

// let a = 5

// console.log(a < 6);

//let b = 5

//console.log(a <= b);

//Operadores aritmeticos
// + - * / % **

// let saludo = "hola";
// let nombre = "Pepe";

// let saludarA = saludo + "pepe " + nombre;
// let saludarA2 = `${saludo}  pepe   ${nombre}`;
// console.log(saludarA);
// console.log(saludarA2);

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**2);

//Operadores logicos

// && || !

// console.log(true && true);
// console.log(true && false);
// console.log(false && false);
// console.log(false && true);

// console.log(true || true);
// console.log(true || false);
// console.log(false || false);
// console.log(false || true); 


// console.log(!!!!true);

//Objeto es una coleccion de datos/propiedades/atrubutos  

// let auto = {
//    color  : "negro",
//    marca  : "ford",  
//    modelo : "fiesta",
//    anio   : 2020
// }

// console.log(auto);

// console.log(auto.color);
// console.log(auto["color"]);

//[] Corchetes
//{} llaves

// alert("hola mundo");

// let nombre = prompt("ingrese su nombre")
// console.log(`hola ${nombre} que feo nombre`);


// let estaEmbarzada = confirm("estas embarazada?")

// console.log(estaEmbarzada);

//let edad = prompt("ponga su altura por favor");
//console.log(Number(edad) + 1);

let myName = "Jadranka";
let myLastName = "Romeo";
let myAge = 21;
let petName = "Suki";
let petAge = 2;
let fullName = myName + myLastName;
let presentationText = "My\n name is \n" + myName + " " + myLastName
                       + ", I'm " + myAge + " years old.\n" 
                       + "My Pet's name is " + petName 
                       + ". She is " + petAge + " years old."
 
console.log(presentationText);

let nombre = "Buen día";

console.log(nombre);

let diaMayuscula = nombre.replace("d" , "D");

console.log(diaMayuscula);

nombre[5] = nombre[5].replace("d", "D")