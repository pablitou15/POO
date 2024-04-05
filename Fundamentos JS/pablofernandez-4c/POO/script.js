var global ="Global";

let local = "Local";

const constante = "constante";

console.log("Variables: Global"+ global + "- Local: " + local + " - Constante: " + constante);

let num = 4;
let decimal = 3.1416;
let string = "texto"
let bool = true;
let array = ["perro",20, "Gato", 50];
let objeto = {
    Edad:20, 
    Nombre: "Mario",
    Telefono: "908767",
    Direccion: "los mereyes 2098"
};
let indefinida;
let nula = null;

function sumar(num1, num2){
return num1 + num2;
};
console.log(
    sumar(10,5)
);



console.log("variables:\nNum: " + num + " \nDecimal: " + decimal + "\nString: " + String + "\nBool: " + bool + "\nArray: " + Array + "\nObjeto: " + JSON.stringify(objeto) + "\nIndefinida: " + indefinida + "\nNula: " + nula + "\nResultado de funcion: " + sumar());
