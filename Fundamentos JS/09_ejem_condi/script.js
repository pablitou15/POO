function determinarPuntuacion() {
    let puntuacion = parseInt(prompt("Por favor ingrese la puntuación: "));

    let mensaje;
    if (puntuacion >= 90) {
        mensaje = "Excelente.";
    } else if (puntuacion >= 70 && puntuacion <= 89) {
        mensaje = "Buen trabajo.";
    } else {
        mensaje = "Necesitas mejorar.";
    }

    document.getElementById("mensaje").innerHTML = mensaje;
}