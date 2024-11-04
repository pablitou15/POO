function operandoMetodos() {
    // Declaración e inicialización de la variable `arregloInicial`
    let arregloInicial = [997, 777, 234, 160706, 2112, 343, 89, 800, 234];
  
    // Cálculo de la suma inicial
    const sumaInicial = arregloInicial.reduce((a, b) => a + b, 0);
  
    // Modificaciones al arreglo
    arregloInicial.push(1100); // Agregamos un elemento al final
    arregloInicial.unshift(89); // Agregamos un elemento al inicio
    arregloInicial.shift(); // Eliminamos un elemento del inicio
    arregloInicial.pop(); // Eliminamos un elemento del final
  
    // Cálculo de la suma final
    const sumaFinal = arregloInicial.reduce((a, b) => a + b, 0);
  
    // Obtener valores eliminados y agregados
    const valoresEliminados = [arregloInicial[0], arregloInicial[arregloInicial.length - 1]];
    const valoresAgregados = [arregloInicial[0], arregloInicial[arregloInicial.length - 1]];
  
    // Mostramos resultados
    alert(`Arreglo inicial: ${arregloInicial.join(", ")}`);
    alert(`Arreglo final: ${arregloInicial.join(", ")}`);
    alert(`Valores eliminados: ${valoresEliminados.join(", ")}`);
    alert(`Valores agregados: ${valoresAgregados.join(", ")}`);
    alert(`Suma inicial: ${sumaInicial}`);
    alert(`Suma final: ${sumaFinal}`);
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

// Llamada a la función
operandoMetodos();
