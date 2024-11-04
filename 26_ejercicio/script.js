/*let nombre = prompt("Escribe tu nombre")
let apellido = prompt("Escribe tu apellido")
let edad = prompt("Escribe tu edad")

function mostrardaros(nombre,apellido,edad){
console.log(`El nombre es: ${nombre} Apellido ${apellido}`)
console.log(`Y la edad es: ${edad}`)
}

mostrardaros(nombre,apellido,edad)*/

//Ejercicio uno listo


/*function calculateResult(initialValue, multiplier) {
  const num = prompt("Ingresa el valor: ");
  const part = num / 3;
  const result = (part + initialValue) * multiplier;
  console.log(`El resultado es: ${result}`);
}

calculateResult(10, 2); */
//Trabjo 2 listo 

/*function checkOrder(num1, num2) {
  if (num1 < num2) {
    console.log(`Los números están en orden creciente: ${num1} -> ${num2}`);
  } else if (num1 > num2) {
    console.log(`Los números están en orden decreciente: ${num1} -> ${num2}`);
  } else {
    console.log(`Los números son iguales: ${num1} == ${num2}`);
  }
}

checkOrder(3, 5); 
checkOrder(5, 3); 
checkOrder(5, 5); */
//Ejercicio 3 listo 




/*function calcularPromedio(cantidadNumeros) {
    let suma = 0;
    for (let i = 0; i < cantidadNumeros; i++) {
      let numero = parseFloat(prompt(`Ingrese el número ${i + 1}:`));
      suma += numero;
    }
    let promedio = suma / cantidadNumeros;
    return promedio;
  }
  
  // Función para imprimir el resultado
  function imprimirResultado(promedio) {
    console.log(`El promedio es: ${promedio}`);
  }
  
  // Llamar a las funciones
  let cantidadNumeros = 5;
  let promedio = calcularPromedio(cantidadNumeros);
  imprimirResultado(promedio);*/
  //Ejercicio 4 listo



  /*function sumaNaturales(n) {
    let suma = 0;
    for (let i = 1; i <= n; i++) {
      suma += i;
    }
    return suma;
  }
  const n = parseInt(prompt("Ingrese el valor de N: "));
  const resultado = sumaNaturales(n);
  console.log(`La suma de los ${n} primeros números naturales es: ${resultado}`);
  const datos = [
    { funcion: "sumaNaturales", parametros: [n], resultado: resultado }
  ];
  
  console.log(datos);*/
//Ejercicio 5





/*function obtenerNumerosPares(cantidad) {
    const numerosPares = [];
    for (let i = 2; i <= cantidad * 2; i += 2) {
      numerosPares.push(i);
    }
    return numerosPares;
  }
  
  const primeros100NumerosPares = obtenerNumerosPares(100);
  console.log(primeros100NumerosPares.join(', '));*/
//Ejercicio 6





  /*function obtenerNumerosImpares(cantidad) {
    const numerosImpares = [];
    for (let i = 1; i <= cantidad * 2; i += 2) {
      numerosImpares.push(i);
    }
    return numerosImpares;
  }
  
  const primeros100NumerosImpares = obtenerNumerosImpares(100);
  console.log(primeros100NumerosImpares.join(', '));*/
//Ejercicio 7






  /*function sumarNumeros(cantidadNumeros) {
    let suma = 0;
    for (let i = 0; i < cantidadNumeros; i++) {
      let numero = parseInt(prompt(`Ingrese el número ${i + 1}:`));
      suma += numero;
    }
    return suma;
  }
  
  let resultado = sumarNumeros(5);
  console.log(`La suma de los 5 números es: ${resultado}`);*/
//ejercicio 8





/*function sumarNumeros(cantidadNumeros) {
  let numeros = [];
  let suma = 0;
  for (let i = 0; i < cantidadNumeros; i++) {
    let numero = parseInt(prompt(`Ingrese el número ${i + 1}:`));
    numeros.push(numero);
  }
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }

  return suma;
}
let n = parseInt(prompt("Ingrese el valor de N:"));
let resultado = sumarNumeros(n);
console.log(`La suma de los ${n} números es: ${resultado}`);*/
//Ejercio 9





/*function sumar(a, b) { return a + b; }
function restar(a, b) { return a - b; }
function multiplicar(a, b) { return a * b; }
function dividir(a, b) { return b === 0 ? 'No se puede dividir por cero' : a / b; }

let num1 = parseFloat(prompt('Ingrese el primer número:'));
let num2 = parseFloat(prompt('Ingrese el segundo número:'));

let opcion = prompt('Ingrese la opción:\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir');

let resultado;
switch (opcion) {
  case '1':
    resultado = sumar(num1, num2);
    break;
  case '2':
    resultado = restar(num1, num2);
    break;
  case '3':
    resultado = multiplicar(num1, num2);
    break;
  case '4':
    resultado = dividir(num1, num2);
    break;
  default:
    resultado = 'Opción inválida';
}

alert(`El resultado es: ${resultado}`);*/
//Ejercicio 10




/*function sumarPares(n) {
  let suma = 0;
  let pares = [];
  for (let i = 2; i <= n * 2; i += 2) {
    pares.push(i);
    suma += i;
  }
  console.log(`Los ${n} números pares son: ${pares}`);
  return suma;
}

let n = 5;
console.log(`La suma de los ${n} números pares es: ${sumarPares(n)}`);*/
//Ejercicio 11





