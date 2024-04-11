function calcularSuma() {
    let suma = 0;
    let contador = 1;
    let sumaTexto = "";

    while (contador <= 10) {
        suma += contador;
        if (contador < 10) {
            sumaTexto += contador + "+";
        } else {
            sumaTexto += contador;
        }
        contador++;
    }

    document.getElementById("resultado").innerHTML = `${sumaTexto} = ${suma}`;
}