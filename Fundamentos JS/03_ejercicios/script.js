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
  // Crear un arreglo vacío y llenarlo con 10 números aleatorios.
  var arregloNumeros = [];
  for (var i = 0; i < 10; i++) {
      arregloNumeros[i] = Math.floor(Math.random() * 100);
  }
  var valoresEliminados = [];
  var sumaElementos = 0;

  // Guardar el arreglo inicial para mostrar luego.
  // Para clonar un arreglo de forma básica, también usamos un bucle.
  var arregloInicial = [];
  for (var i = 0; i < arregloNumeros.length; i++) {
      arregloInicial[i] = arregloNumeros[i];
  }

  // Modificaciones
  valoresEliminados.push(arregloNumeros.pop()); // Elimina el último elemento
  valoresEliminados.push(arregloNumeros.shift()); // Elimina el primer elemento
  arregloNumeros.push(111); // Agrega un valor al final
  arregloNumeros.unshift(999); // Agrega un valor al inicio

  // Calcula la suma de todos los elementos del arreglo modificado.
  // Hacemos esto con un bucle for para mantenerlo simple.
  for (var i = 0; i < arregloNumeros.length; i++) {
      sumaElementos += arregloNumeros[i];
  }

  // Mostrar resultados
  alert("Arreglo inicial: " + arregloInicial.join(", ") + "\nArreglo final: " + arregloNumeros.join(", ") + "\nValores eliminados: " + valoresEliminados.join(", ") + "\nSuma de todos los elementos: " + sumaElementos);
}
