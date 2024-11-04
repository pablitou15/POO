function obtenerPrimerosPares() {
    let contador = 2;
    let arrayPares = [];

    while (arrayPares.length < 10) {
        arrayPares.push(contador);
        contador += 2;
    }

    document.getElementById("resultado").innerHTML = `Los primeros 10 números pares son: ${arrayPares.join(', ')}`;
}
