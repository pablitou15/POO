function verificarTemperatura() {
    let temperatura = parseFloat(prompt("Por favor ingrese la temperatura: "));

    let mensaje;
    if (temperatura < 0) {
        mensaje = "Hace frío y la temperatura es baja.";
    } else if (temperatura >= 0 && temperatura < 25) {
        mensaje = "La temperatura es agradable.";
    } else { 
        mensaje = "Hace calor.";
    }

    document.getElementById("mensaje").innerHTML = mensaje;
}
