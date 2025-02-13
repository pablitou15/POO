// Selección de elementos (sin cambios)
const fileInput = document.getElementById('file-input');
const dropArea = document.getElementById('drop-area');
const fileList = document.getElementById('file-list');
const uploadAllButton = document.getElementById('upload-all');

// Array para almacenar archivos seleccionados (sin cambios)
let selectedFiles = [];

// Eventos (sin cambios)
fileInput.addEventListener('change', handleFileSelect);
dropArea.addEventListener('dragover', (e) => e.preventDefault());
dropArea.addEventListener('drop', handleFileDrop);
uploadAllButton.addEventListener('click', uploadAllFiles);

// Funciones para manejar archivos (sin cambios)
function handleFileSelect(event) {
    addFilesToList(event.target.files);
}

function handleFileDrop(event) {
    event.preventDefault();
    addFilesToList(event.dataTransfer.files);
}

function addFilesToList(files) {
    Array.from(files).forEach(file => {
        if (!selectedFiles.includes(file)) {
            selectedFiles.push(file);
            displayFile(file);
        }
    });
    toggleUploadButton();
}

// Mostrar archivo en la lista con su tamaño (sin cambios)
function displayFile(file) {
    const li = document.createElement('li');
    const fileSize = (file.size / 1024).toFixed(2); // Convertir bytes a KB y redondear a 2 decimales
    li.innerHTML = `
        <span class="file-name">${file.name} (${fileSize} KB)</span>
        <button class="remove-button" onclick="removeFile('${file.name}')">Eliminar</button>
    `;
    fileList.appendChild(li);
}

function removeFile(fileName) {
    selectedFiles = selectedFiles.filter(file => file.name !== fileName);
    const items = Array.from(fileList.children);
    items.forEach(item => {
        if (item.querySelector('.file-name').textContent.startsWith(fileName)) {
            item.remove();
        }
    });
    toggleUploadButton();
}

function toggleUploadButton() {
    uploadAllButton.disabled = selectedFiles.length === 0;
}

function uploadAllFiles() {
    const formData = new FormData();

    selectedFiles.forEach(file => {
        formData.append('files[]', file);
    });

    uploadAllButton.removeEventListener('click', uploadAllFiles);
    uploadAllButton.disabled = true;
    uploadAllButton.textContent = "Subiendo...";

    
 fetch('upload.php', {
    method: 'POST',
    body: formData,
})
.then(response => {
    if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
    }
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Respuesta no es JSON');
    }
    return response.text(); // Primero obtener el texto
})
.then(text => {
    try {
        const result = JSON.parse(text); // Intentar convertir el texto a JSON
        console.log(result);
        // Procesar resultado
    } catch (error) {
        throw new Error('Error al analizar la respuesta JSON');
    }
})
.catch(error => {
    console.error('Error:', error);
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: `Error al subir los archivos: ${error.message}`,
    });
});
    
}