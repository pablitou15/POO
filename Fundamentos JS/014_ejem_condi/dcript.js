function encontrarPrimerosPares() {
    let N = parseInt(prompt("Ingrese el valor de N para encontrar los primeros N números pares:"));
    let numerosPares = [];

    for (let i = 2; numerosPares.length < N; i += 2) {
        numerosPares.push(i);
    }

    document.getElementById("resultado").innerHTML = `Los primeros ${N} números pares son: ${numerosPares.join(', ')}`;
}