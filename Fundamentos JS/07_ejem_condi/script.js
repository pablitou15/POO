function verificarAcceso() {
    let nombreUsuario = prompt("Ingrese su nombre de usuario: ");
    let contraseña = prompt("Ingrese su contraseña: ");

    let mensaje;
    if (nombreUsuario === "usuario123" && contraseña === "secreto") {
        mensaje = "Acceso concedido.";
    } else {
        mensaje = "Acceso denegado.";
    }

    document.getElementById("mensaje").innerHTML = mensaje;
}