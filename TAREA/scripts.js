   //EJERCICIO 1
   
   /* let nombre = prompt("Escribir un nombre: ");
    let apellido = prompt("Escribir un apellido: ");
    let edad = prompt("Escribe tu Edad");

function mostrarDatos(nombre, apellido, edad){
    console.log(`El nombre completo es: ${nombre} ${apellido}`);
    console.log(`La edad es: ${edad}`);

    
    }
    mostrarDatos(nombre, apellido, edad);
*/



//EJERCICIO 2

/*
let numero = parseInt(prompt("Ingrese un número: "));

function calcularNumero(num) {
    let resultado = ((num / 3) + 10) * 2; 
    return resultado;
}

let resultado = calcularNumero(numero);
console.log(`El resultado es: ${resultado}`);
*/


//EJERCICIO 3

/*

let numero1 = parseInt(prompt("Ingrese el primer número:"));
let numero2 = parseInt(prompt("Ingrese el segundo número:"));

function verificarOrden(num1, num2) {
    if (num1 < num2) {
        console.log("Los números están en orden creciente.");
    } else {
        console.log("Los números están en orden decreciente.");
    }
}

verificarOrden(numero1, numero2);
*/


//EJERCICIO 4
/*
function calcularPromedio() {
    let suma = 0;
    for (let i = 0; i < 5; i++) {-
        let numero = parseFloat(prompt("Ingrese un número:"));
        suma += numero;
    }
    let promedio = suma / 5;
    console.log("El promedio es: " + promedio);
}

calcularPromedio();

*/

//EJERCICIO 5


/* 
let n = parseInt(prompt("Ingrese un número: "))

function sumarN(numero){
    let array = [];
    let suma = 0;
    for(let i = 1; i <= numero; i++ ){
        array.push(i);
        suma += i;
    };
    console.log(`Los numeros naturales son: ${array.join(" + ")}`);
    return suma;

}
console.log(`la suma es: ${sumarN(n)}`);
*/

//EJERCICIO 6

/*
function escribirPares() {
    let contador = 0;
    for (let i = 0; contador < 100; i++) {
        if (i % 2 === 0) {
            console.log(i);
            contador++;
        }
    }
}

escribirPares();

*/

//EJERCICIO 8

/*

function sumarCienNumeros() {
    let suma = 0;
    for (let i = 0; i < 100; i++) {
        let numero = parseFloat(prompt("Ingrese un número:"));
        suma += numero;
    }
    console.log("La suma de los 100 números es: " + suma);
}

sumarCienNumeros();


*/



//EJERCICIO 9
/*

function sumarNNumeros() {
    let N = parseInt(prompt("Ingrese el valor de N:"));
    let suma = 0;
    for (let i = 0; i < N; i++) {
        let numero = parseFloat(prompt("Ingrese un número:"));
        suma += numero;
    }
    console.log("La suma de los " + N + " números es: " + suma);
}

sumarNNumeros();


*/


//EJERCICIO 10
/*
function operacionesConNumeros() {
    let numero1 = parseFloat(prompt("Ingrese el primer número:"));
    let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
    let opcion = prompt("Ingrese la operación a realizar (sumar, restar, multiplicar, dividir):");

    switch (opcion.toLowerCase()) {
        case "sumar":
            console.log("La suma es: " + (numero1 + numero2));
            break;
        case "restar":
            console.log("La resta es: " + (numero1 - numero2));
            break;
        case "multiplicar":
            console.log("La multiplicación es: " + (numero1 * numero2));
            break;
        case "dividir":
            if (numero2 !== 0) {
                console.log("La división es: " + (numero1 / numero2));
            } else {
                console.log("No se puede dividir por cero.");
            }
            break;
        default:
            console.log("Opción no válida.");
    }
}

operacionesConNumeros();

*/




//EJERCICIO  11
/*
function sumarNNumerosPares() {
    let N = parseInt(prompt("Ingrese el valor de N:"));
    let suma = 0;
    for (let i = 0; i < N; i++) {
        let numero = parseFloat(prompt("Ingrese un número:"));
        if (numero % 2 === 0) {
            suma += numero;
        }
    }
    console.log("La suma de los " + N + " números pares es: " + suma);
}

sumarNNumerosPares();

*/



//EJERCICIO 12
/*

function sumarNPrimerosPares() {
    let N = parseInt(prompt("Ingrese el valor de N:"));
    let suma = 0;
    let contador = 0;
    let numero = 0;
    while (contador < N) {
        if (numero % 2 === 0) {
            suma += numero;
            contador++;
        }
        numero++;
    }
    console.log("La suma de los primeros " + N + " números pares es: " + suma);
}

sumarNPrimerosPares();


*/



//EJERCICIO  13
/*
function sumarNNumerosImpares() {
    let N = parseInt(prompt("Ingrese el valor de N:"));
    let suma = 0;
    for (let i = 0; i < N; i++) {
        let numero = parseFloat(prompt("Ingrese un número:"));
        if (numero % 2 !== 0) {
            suma += numero;
        }
    }
    console.log("La suma de los " + N + " números impares es: " + suma);
}

sumarNNumerosImpares();

*/



//EJERCICIO 14
/*
function sumarNPrimerosImpares() {
    let N = parseInt(prompt("Ingrese el valor de N:"));
    let suma = 0;
    let contador = 0;
    let numero = 0;
    while (contador < N) {
        if (numero % 2 !== 0) {
            suma += numero;
            contador++;
        }
        numero++;
    }
    console.log("La suma de los primeros " + N + " números impares es: " + suma);
}

sumarNPrimerosImpares();

*/







//EJERCICIO 15
/*
function sumarNPrimerosMultiplosDe3() {
    let N = parseInt(prompt("Ingrese el valor de N:"));
    let suma = 0;
    let contador = 0;
    let numero = 0;
    while (contador < N) {
        if (numero % 3 === 0) {
            suma += numero;
            contador++;
        }
        numero++;
    }
    console.log("La suma de los primeros " + N + " múltiplos de 3 es: " + suma);
}

sumarNPrimerosMultiplosDe3();

*/




//EJERCICIO  16
/*
function calcularFactorial() {
    let N = parseInt(prompt("Ingrese el valor de N:"));
    let factorial = 1;
    for (let i = 1; i <= N; i++) {
        factorial *= i;
    }
    console.log("El factorial de " + N + " es: " + factorial);
}

calcularFactorial();

*/




//EJERCICIO 17
/*
function convertirCelsiusAFahrenheit() {
    let celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius:"));
    let fahrenheit = (celsius * 9/5) + 32;
    console.log(celsius + " grados Celsius son " + fahrenheit + " grados Fahrenheit.");
}

convertirCelsiusAFahrenheit();

*/



//EJERCICIO 18  
/*
function palabraMasLarga() {
    let frase = prompt("Ingrese una frase:");
    let palabras = frase.split(" ");
    let palabraMasLarga = "";
    for (let palabra of palabras) {
        if (palabra.length > palabraMasLarga.length) {
            palabraMasLarga = palabra;
        }
    }
    console.log("La palabra más larga es: " + palabraMasLarga);
}

palabraMasLarga();

*/





//EJERCICIO 19
/*
function imprimirNumerosPrimos() {
    let numero = parseInt(prompt("Ingrese un número:"));
    for (let i = 2; i <= numero; i++) {
        let esPrimo = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                esPrimo = false;
                break;
            }
        }
        if (esPrimo) {
            console.log(i);
        }
    }
}

imprimirNumerosPrimos();

*/




//EJERCICIO 20
/*
function contarCaracteres() {
    let cadena = prompt("Ingrese una cadena de texto:");
    let contador = {};
    for (let caracter of cadena) {
        if (contador[caracter]) {
            contador[caracter]++;
        } else {
            contador[caracter] = 1;
        }
    }
    console.log(contador);
}

contarCaracteres();

*/

let N = parseInt(prompt("Ingrese la cantidad de números:"));
let numeros = [];

for (let i = 0; i < N; i++) {
    numeros.push(parseFloat(prompt(`Ingrese el número ${i + 1}:`)));
}

function imprimirPares(nums) {
    let pares = nums.filter(num => num % 2 === 0);
    console.log("Los números pares son:", pares.join(", "));
}

imprimirPares(numeros);
