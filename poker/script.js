
    let cartas = [], suma = 0, mensaje = "", estaVivo = false, tieneBlackjack = false, conteo = 0;

    // Función para obtener un elemento del DOM por su ID
    const el = id => document.getElementById(id);

    //  almacenar elementos del DOM
    const elementoCartas = el('elemento-cartas');
    const elementoSuma = el('elemento-suma');
    const botonNuevaCarta = el('boton-carta');
    const elementoMensaje = el('elemento-mensaje');
    const elementoConteo = el('elemento-conteo');
    const entradaCarta = el('entrada-carta');

    //   el valor de una carta
    const obtenerValorCarta = carta => ['J', 'Q', 'K'].includes(carta) ? 10 : carta === 'A' ? 11 : parseInt(carta);

    //  el valor de una carta
    const contarCarta = carta => conteo += ['2', '3', '4', '5', '6'].includes(carta) ? 1 : ['10', 'J', 'Q', 'K', 'A'].includes(carta) ? -1 : 0;

    //  comenzar el juego
    const empezarJuego = () => {
        estaVivo = true;
        cartas = [];
        suma = conteo = 0;
        elementoCartas.textContent = "Cartas: ";
        elementoSuma.textContent = "Suma: ";
        elementoConteo.textContent = "Conteo: ";
        elementoMensaje.textContent = mensaje = "Ingresa una carta para comenzar.";
    };

    // Función para renderizar el juego
    const renderizarJuego = () => {
        elementoCartas.textContent = `Cartas: ${cartas.join(" ")}`;
        elementoSuma.textContent = `Suma: ${suma}`;
        elementoConteo.textContent = `Conteo: ${conteo} ${conteo > 0 ? "Apostar" : "Sostener"}`;
        elementoMensaje.textContent = suma < 21 ? "¿Quieres sacar una nueva carta?" :
                                    suma === 21 ? "¡Ganaste!" : "¡Estás fuera del juego!";
        tieneBlackjack = suma === 21;
        estaVivo = suma < 21;
    };

    // Evento click para el botón de nueva carta
    botonNuevaCarta.addEventListener("click", () => {
        if (estaVivo && !tieneBlackjack) {
            let nuevaCarta = entradaCarta.value.toUpperCase();
            if (['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'].includes(nuevaCarta)) {
                cartas.push(nuevaCarta);
                suma += obtenerValorCarta(nuevaCarta);
                contarCarta(nuevaCarta);
                renderizarJuego();
                entradaCarta.value = "";
            } else {
                elementoMensaje.textContent = "Carta inválida, por favor ingresa una carta válida.";
            }
        }
    });



