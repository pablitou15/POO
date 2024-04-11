function contadorIN(){
    let contador = 20;
    let array = [];

    while (contador > 10) {
        array.push(contador);
        contador--;
    }
    document.getElementById("lista").innerHTML = `<p>Numeros del 20 al 10:</p> <br><h2> ${array}</h2>`;
}
function contadorFor() {
    let array = [];

    for (let i = 20; i >= 10; i--) {
        array.push(i);
    }
    document.getElementById("lista").innerHTML = `<p>Numeros del 20 al 10 con For:</p> <br><h2> ${array}</h2>`;

}