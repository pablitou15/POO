let cards = [], sum = 0, message = "", isAlive = false, hasBlackjack = false, count = 0;

const cardElement = document.getElementById('card-element'),
      sumElement = document.getElementById('sum-element'),
      newCardButton = document.getElementById('card-btn'),
      msgElement = document.getElementById('message-element'),
      countElement = document.getElementById('count-element'),
      cardInput = document.getElementById('card-input');

const getCardValue = card => {
    if (['J', 'Q', 'K'].includes(card)) return 10;
    if (card === 'A') return 11;
    return parseInt(card);
}

const countCard = card => {
    if (['2', '3', '4', '5', '6'].includes(card)) count += 1;
    else if (['10', 'J', 'Q', 'K', 'A'].includes(card)) count -= 1;
}

const startGame = () => {
    isAlive = true;
    cards = [];
    sum = 0;
    count = 0;
    cardElement.textContent = "Cartas: ";
    sumElement.textContent = "Suma: ";
    countElement.textContent = "Conteo: ";
    message = "Ingresa una carta para comenzar.";
    msgElement.textContent = message;
}

const renderGame = () => {
    cardElement.textContent = `Cartas: ${cards.join(" ")}`;
    sumElement.textContent = `Suma: ${sum}`;
    countElement.textContent = `Conteo: ${count} ${count > 0 ? "Bet" : "sostener"}`;
    if (sum < 21) message = "¿Quieres sacar una nueva carta?";
    else if (sum === 21) message = "¡Ganaste!", hasBlackjack = true;
    else message = "¡Estás fuera del juego!", isAlive = false;
    msgElement.textContent = message;
}

newCardButton.addEventListener("click", () => {
    if (isAlive && !hasBlackjack) {
        let newCard = cardInput.value.toUpperCase();
        if (['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'].includes(newCard)) {
            cards.push(newCard);
            sum += getCardValue(newCard);
            countCard(newCard);
            renderGame();
            cardInput.value = "";
        } else {
            msgElement.textContent = "Carta inválida, por favor ingresa una carta válida.";
        }
    }
});

