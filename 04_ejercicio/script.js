function verificarTemperatura() {
    let temperatura = parseFloat(prompt("Por favor ingrese la temperatura en grados Celsius: "));

    let mensaje;
    if (temperatura < 0) {
        mensaje = `Hace frío y la temperatura es baja: <h2>${temperatura} °C</h2>`;
    } else if (temperatura >= 0 && temperatura < 25) {
        mensaje = `La temperatura es agradable: <h2>${temperatura} °C</h2>`;
    } else {
        mensaje = `Hace calor: <h2>${temperatura} °C</h2>`;
    }

    document.getElementById("mensaje").innerHTML = mensaje;
}
