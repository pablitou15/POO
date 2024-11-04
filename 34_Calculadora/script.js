let prev = ''; // Guarda el primer número
let op = '';   // Guarda el operador
let resultShown = false; // Para saber si se ha mostrado un resultado

// Función cuando se presiona un número
function press(num) {
    let display = document.getElementById('display');

    // Si el resultado ya se mostró, reiniciamos el display
    if (resultShown) {
        display.innerText = num; // Reemplazamos el resultado con el nuevo número
        resultShown = false; // Indicamos que ya no se está mostrando el resultado
    } else {
        // Comprobamos si el display muestra '0'
        if (display.innerText === '0') {
            display.innerText = num; // Reemplazamos '0' por el número presionado
        } else {
            display.innerText += num; // Añadimos el número presionado al final
        }
    }
}

// Función cuando se selecciona un operador
function setOP(operator) {
    let display = document.getElementById('display');
    
    // Si no hay un número previo, guardamos el número actual
    if (prev === '') {
        prev = display.innerText; // Guardamos lo que está en pantalla
    } else if (!resultShown) {
        calculate(); // Si ya hay un número previo y no hemos mostrado el resultado, hacemos el cálculo
    }

    op = operator; // Guardamos el operador seleccionado
    display.innerText = '0'; // Reseteamos el display para el próximo número
    resultShown = false; // Aseguramos que no se está mostrando un resultado
}

// Función para realizar el cálculo
function calculate() {
    let display = document.getElementById('display');
    let curr = parseFloat(display.innerText); // Convertimos el número actual a float
    let result = 0; // Variable para el resultado
    prev = parseFloat(prev); // Convertimos el número previo a float

    // Usando solo switch para las operaciones
    switch (op) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = prev / curr;
            break;
    }

    display.innerText = result; // Muestra el resultado en el display
    prev = ''; // Resetea el número previo
    op = '';   // Resetea el operador
    resultShown = true; // Indicamos que se mostró un resultado
}

// Función para limpiar la calculadora
function clr() {
    document.getElementById('display').innerText = '0'; // Resetea el display a 0
    prev = ''; // Resetea el número previo
    op = '';   // Resetea el operador
    resultShown = false; // Indicamos que no se ha mostrado un resultado
}

// Manejo de teclado
document.onkeydown = function (event) {
    let key = event.key;
    switch (key) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            press(key);
            break;
        case '+':
            setOP('+');
            break;
        case '-':
            setOP('-');
            break;
        case '*':
            setOP('*');
            break;
        case '/':
            setOP('/');
            break;
        case 'Enter':
            calculate();
            break;
        case 'Backspace':
        case 'c':
        case 'C':
            clr();
            break;
    }
};
