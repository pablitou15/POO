function modificarMensaje() {
  const mensajeInicial = ["Hola", "a", "todos", "los", "estudiantes", "de", "programación", "de", "4to", "C"];
  let valoresEliminados = [];
  let valoresAgregados = ["Somos", "nosotros", "...", "los", "mejores", "del mundo"];
  
  // Modificar el mensaje inicial
  valoresEliminados.push(mensajeInicial.shift()); // Elimina "Hola"
  valoresEliminados.push(mensajeInicial.shift()); // Elimina "a"
  mensajeInicial.pop(); // Elimina "C", pero no lo necesitamos en valoresEliminados según el objetivo final
  mensajeInicial.unshift("Somos", "nosotros"); // Agrega al inicio
  mensajeInicial.push("los", "mejores", "del mundo"); // Agrega al final

  // Mostrar resultados
  alert(`Arreglo inicial: Hola, a, todos, los, estudiantes, de, programación, de, 4to, C\nArreglo final: ${mensajeInicial.join(", ")}\nValores eliminados: ${valoresEliminados.join(", ")}\nValores agregados: ${valoresAgregados.join(", ")}`);
}

function operandoMetodos() {
  let arreglo = [100, 16, 70, 60, 64, 777, 666, 102, 567];
  let arreglo_inicial = [100, 16, 70, 60, 64, 777, 666, 102, 567];
  let eliminados = [];
  let insertados = [];

  eliminados.push(arreglo.pop());
  eliminados.push(arreglo.pop());
  eliminados.push(arreglo.pop());
  eliminados.push(arreglo.pop());
  eliminados.push(arreglo.pop());
  eliminados.push(arreglo.pop());
  eliminados.push(arreglo.pop());
  eliminados.push(arreglo.pop());
  eliminados.push(arreglo.pop());

  insertados.unshift(1);
  insertados.unshift(2);
  insertados.unshift(3);
  insertados.unshift(4);
  insertados.unshift(5);
  insertados.unshift(6);
  insertados.unshift(7);
  insertados.unshift(8);

  const sumaFinal = arreglo_inicial.reduce((a, b) => a + b, 0); // Calcula la suma de los elementos en el arreglo_inicial

  let suma = 0; // Declaración de la variable suma

  // Suma de valores en el arreglo después de todas las operaciones
  arreglo.forEach(numero => {
      suma += numero;
  });

  // Construir la cadena con toda la información
  let mensaje = `Los números iniciales son: ${arreglo_inicial}\n`;
  mensaje += `Los números eliminados son: ${eliminados}\n`;
  mensaje += `Los números insertados son: ${insertados}\n`;
  mensaje += `La suma final de los números iniciales es: ${sumaFinal}\n`;
  mensaje += `El arreglo final es: ${arreglo}\n`;
  mensaje += `La suma de todos los elementos es: ${suma}`;

  // Mostrar el mensaje de alerta final
  alert(mensaje);
}

