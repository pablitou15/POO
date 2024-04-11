function contar() {
    let contador = 0;
    let array = [];

    while (contador <= 100) {
        array.push(contador);
        contador += 5;
    }

    document.getElementById("lista").innerHTML = `Números de 0 a 100 de 5 en 5: ${array}`;
}