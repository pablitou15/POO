function verificarNumero() {
    let numero = parseFloat(prompt("Por favor ingrese un número: "));

    let mensaje;
    if (numero > 0) {
        mensaje = "El número es positivo.";
    } else if (numero < 0) {
        mensaje = "El número es negativo.";
    } else {
        mensaje = "El número es igual a cero.";
    }

    document.getElementById("mensaje").innerHTML = mensaje;
}