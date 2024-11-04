function invertirCadena() {
  var cadena = document.getElementById("cadena").value;
  var cadenaInvertida = "";
  for (var i = cadena.length - 1; i >= 0; i--) {
      cadenaInvertida += cadena[i];
  }
  document.getElementById("resultado").innerText = "Cadena invertida: " + cadenaInvertida;
}
