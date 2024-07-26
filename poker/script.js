let count = 0;//se activa primero

document.getElementById('count-button').addEventListener('click', () => {
    const cardInput = document.getElementById('card-input').value.trim();
    const cards = cardInput.split(/[\s,]+/); //  split telo guarda en un arreglo
    cards.forEach(countCard); //esta esta iterando el array repetir
    document.getElementById('card-input').value = ''; //valor igual a lo que inresa
});

function countCard(card) {
    switch (card) {
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
            count += 1;
            break;
        case '7':
        case '8':
        case '9':
            count += 0;
            break;
        case '10':
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count -= 1;
            break;
        default:
            console.error(`Invalid card: ${card}`);
            return;
    }

    if (count % 5 === 0) {
        count = 0;
    }
}

document.getElementById('count-button').addEventListener('click', () => {
    const result = count > 0 ? ` ${count} Bet` : ` ${count} Hold`;
    document.getElementById('result').innerText = result;
});