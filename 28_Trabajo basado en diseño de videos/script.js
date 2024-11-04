function playVideo(secondaryContainer) {
    // Selecciona el video principal
    var mainVideo = document.getElementById("mainVideo");
    var mainSource = mainVideo.querySelector('source');
    
    // Selecciona el título del video principal
    var mainTitle = document.getElementById("mainTitle");

    // Selecciona el video secundario dentro del contenedor
    var secondaryVideo = secondaryContainer.querySelector('video');
    var secondarySource = secondaryVideo.querySelector('source');

    // Selecciona el título del video secundario
    var secondaryTitle = secondaryContainer.querySelector('.video-title');

    // Guarda temporalmente el src y el título del video principal
    var tempSrc = mainSource.src;
    var tempTitle = mainTitle.textContent;

    // Cambia el src del video principal al del video secundario
    mainSource.src = secondarySource.src;

    // Cambia el título del video principal al del video secundario
    mainTitle.textContent = secondaryTitle.textContent;

    // Cambia el src del video secundario al que tenía el video principal
    secondarySource.src = tempSrc;

    // Cambia el título del video secundario al que tenía el video principal
    secondaryTitle.textContent = tempTitle;

    // Recarga los videos
    mainVideo.load();
    secondaryVideo.load();

    // Reproduce el video principal después del intercambio
    mainVideo.play();
}
