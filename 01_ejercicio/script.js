//////ejercicios creacion de variables 

//una variable
var Global= "Global"
//variable local
let Local ="Local"
//constante
const Constante = "Constante"

console.log("variables: Global:" + Global + "Local: "
            + Local + "- Constante" + Constante); 



 // Declaración de variables
let numeroDecimal = 6.5;
let cadenaTexto = "¡Que pasa chavalessss!";
let booleano = true;
let arreglo = [1, 2, 3, 4, 5];
let objeto = { Nombre: "Benjamin", Apellido: "Farias", Rut: "22162563-3" };
let variableIndefinida;
let variableNula = null;

function sumar(num1, num2) {
    return num1 + num2;
}

console.log("Variables:\ndecimal:" + numeroDecimal + "\ncadena de texto:" + cadenaTexto + "\nbooleano: " + booleano + "\narreglo : " + arreglo + "\nobjeto: " + JSON.stringify(objeto) + "\nindefonida" + variableIndefinida + "\nnulo:" + variableNula + "\nresultado de funcion:" +
+ sumar());
console.log( sumar ())














































                           

function encontrarMayorMenor(array) {
    if (array.length === 0) {
        return "Array vacío";
    }

    let mayor = array[0];
    let menor = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > mayor) {
            mayor = array[i];
        } else if (array[i] < menor) {
            menor = array[i];
        }
    }

    return {
        mayor: mayor,
        menor: menor
    };
};

let resultado = encontrarMayorMenor([3, 5, 7, 2, 200, 33, 100, 3, 400]);
console.log(resultado);
alert(`Mayor: ${resultado.mayor}, Menor: ${resultado.menor}`); 