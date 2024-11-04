function identificarMayor()
{
let num1 = parseFloat(prompt("Por favor ingrese el primer número: "));
let num2 = parseFloat(prompt("Por favor ingrese el segundo número: "));

let resultado;
if (num1 > num2) {
    resultado = `El primer número (${num1}) es mayor que el segundo número (${num2}).`;
} else if (num2 > num1) {
    resultado = `El segundo número (${num2}) es mayor que el primer número (${num1}).`;
}
document.getElementById(`lista`).innerHTML = resultado;
}