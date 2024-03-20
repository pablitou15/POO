console.log("vinculado correctamente")
// Ejercicio 1: Declaración de variables
// Instrucciones: Declara dos variables numéricas llamadas 'ahora' y 'Fecha_nac'.
// Luego, calcula y muestra en un mensaje la edad actual basada en el año de nacimiento.

function declararVariables() {
// Tu código aquí
        let ahora = 2024;
        let Fecha_nac = 2006;
        let resultado = ahora - Fecha_nac;
        alert("Mi edad es: " + resultado);
}

// Ejercicio 2: Asignación de valores
// Instrucciones: Completa la función para asignar el valor de 'var1' a 'var2' y luego muestra el valor de 'var2'.
function asignarValores() {
    // Tu código aquí
    let var1 = 16566666;
    let var2 = var1;
    alert("El valor de var2 es: " + var1);


}

// Ejercicio 3: Operaciones matemáticas
// Instrucciones: Completa la función para realizar las siguientes operaciones:
// Suma 'sum1' y 'sum2' y 'sum3' , resta 'num1' de 'num3', multiplica 'num2' por 'num3', y divide 'num1' entre '120'.
// Muestra los resultados en un mensaje.
function realizarOperaciones() {
    // Tu código aquí
    let sum1 = 35;
    let sum2 = 15;
    let sum3 = 11;
    let suma = sum1 + sum2 + sum3;
    let resta = sum1 - sum3;
    let multi = sum2 * sum3;
    let divi = sum1 / 120;
    
    alert("la suma es " + suma + "\n la resta es " + resta + "\n la multi es " + multi + "\n la division es " + divi );

}

// Ejercicio 4: Manipulación de cadenas
// Instrucciones: Completa la función para construir un mensaje utilizando las variables 'direccion' y 'numero Casa.
// Luego, muestra la longitud del mensaje y el antepenultimo carácter en el mensaje.
function manipularCadenas() {
    // Tu código aquí
        let direccion = "pudahuel";
        let numCasa = "1334";
        let mensaje = " la direccion es " + direccion + " su numero de casa es " + numCasa;
        let longitud = mensaje.length;
        alert("Mensaje: " + mensaje +"\nLongitud: " + longitud +"\nPrimer Caracter: " + mensaje[0]);


}

function sumarIndices(){
    let arreglo = [1,2,3,4,5,6,7];
    let = resultado = arreglo[arreglo.length - 1] + arreglo[arreglo.length -2]
    alert("El resultado de la suma es: " + resultado)


}