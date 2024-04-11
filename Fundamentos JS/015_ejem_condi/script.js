function calcularPromedio() {
    let suma = 0;

    for (let i = 1; i <= 5; i++) {
        let calificacion = parseFloat(prompt(`Ingrese la calificación ${i}:`));
        suma += calificacion;
    }

    let promedio = suma / 5;

    document.getElementById("resultado").innerHTML = `El promedio de las 5 calificaciones es: ${promedio.toFixed(2)}`;
}