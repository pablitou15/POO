function generarTabla() {
    var numero = parseInt(document.getElementById("numero").value);
    var tablaHTML = "<h2>Tabla de multiplicaciones de " + numero + "</h2><table>";
    for (var i = 1; i <= 10; i++) {
        tablaHTML += "<tr><td>" + numero + " x " + i + "</td><td>=</td><td>" + (numero * i) + "</td></tr>";
    }
    tablaHTML += "</table>";
    document.getElementById("resultado").innerHTML = tablaHTML;
}
