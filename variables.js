//*********Dificultad: Facil***********
//Ejercicio 1

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


//*********Dificultad: Media***********
//Ejercicio 1

let miEdad = 21;
let edadMascota = 2;
let sumaEdades = miEdad + edadMascota;
let restaEdades = miEdad - edadMascota;
let productoEdades = miEdad * edadMascota;
let divisionEdades = miEdad / edadMascota;

//Ejercicio 2
let estudiante = {
    nombre: "Jadri",
    edad: 21,
    altura: 165,
    pelo: "Pelirrojo",
    ojos: "Verdes"
}

console.table(estudiante);

//Ejercicio 3
let mascota = {
    nombre: "Suki",
    edad: 2,
    altura: 35,
    pelo: "Naranja",
    ojos: "Marrones"
}

console.table(mascota);
console.log(mascota.nombre);
console.log(mascota.edad);
console.log(mascota.altura);
console.log(mascota.pelo);
console.log(mascota.ojos);


//Ejercicio 4
let frutas = ["bananas", "manzanas", "peras", "naranjas", "frutillas"];
console.table(frutas);
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);
console.log(frutas[4]);

//*********Dificultad: Alta***********
//Ejercicio 1

let IamAdult = prompt("Ingrese la edad: ");

if (IamAdult > 18) {
    alert ("Es un adulto " + IamAdult)    
} 

//Ejercicio 2
let numbers = [6,7,8,9,10];
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[4]);
console.log(numbers);


//Ejercicio 3
let family = [{
    nombre: "Jadri",
    edad: 21,
},{
    nombre: "Sony",
    edad: 15,
},{
    nombre: "Ciro",
    edad: 9,
},{
    nombre: "Amelia",
    edad: 1,
},{
    nombre: "Suki",
    edad: 2,
}]

console.log(family);
console.table(family[0]);
console.table(family[1]);
console.table(family[2]);
console.table(family[3]);
console.table(family[4]);


//Ejercicio 4
let randomText = `Me gustan las ${frutas[1]} mi mascota tiene el pelo ${mascota.pelo} y se llama ${family[4].nombre}`
console.log(randomText);
