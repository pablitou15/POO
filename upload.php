<?php
// Mostrar todos los errores (solo en el entorno de desarrollo)
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require __DIR__ . '/vendor/autoload.php';
use PhpOffice\PhpSpreadsheet\IOFactory;
use League\Flysystem\Filesystem;
use League\Flysystem\Local\LocalFilesystemAdapter;


$response = ['success' => false, 'message' => '', 'errors' => []];

$servername = "localhost";
$username = "pablo";
$password = "123456";
$database = "subir_archivos";

try {
    $conn = new mysqli($servername, $username, $password, $database);
    if ($conn->connect_error) {
        throw new Exception("Error de conexión: " . $conn->connect_error);
    }

    if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_FILES["files"])) {

        $adapter = new LocalFilesystemAdapter(__DIR__ . '/uploads'); // Adaptador para el sistema de archivos local
        $filesystem = new Filesystem($adapter);

        $fileCount = count($_FILES["files"]["name"]);
        $successCount = 0;

        for ($i = 0; $i < $fileCount; $i++) {
            $fileError = $_FILES["files"]["error"][$i];
            if ($fileError === UPLOAD_ERR_OK) {
                $fileName = basename($_FILES["files"]["name"][$i]);
                $fileTmpPath = $_FILES["files"]["tmp_name"][$i];
                $targetFilePath = $fileName; // Ruta relativa para Flysystem

                $allowedExtensions = ['xls', 'xlsx'];
                $fileExtension = strtolower(pathinfo($fileName, PATHINFO_EXTENSION));

                if (!in_array($fileExtension, $allowedExtensions)) {
                    $response['errors'][] = "Archivo $fileName: Solo se permiten archivos Excel (.xls, .xlsx).";
                    continue; // Saltar al siguiente archivo
                }

                try {
                    // Subir el archivo usando Flysystem
                    $filesystem->writeStream($targetFilePath, fopen($fileTmpPath, 'r'));

                    try {
                        // Cargar el archivo Excel (usando la ruta relativa)
                        $spreadsheet = IOFactory::load($adapter->path($targetFilePath)); // Usar $adapter->path() para obtener la ruta real

                        $sheet = $spreadsheet->getActiveSheet();

                        // Extraer valores de celdas y guardarlos en la base de datos...
                        $nombre_entidad = $sheet->getCell('E5')->getValue();
                        $rut_entidad = $sheet->getCell('J5')->getFormattedValue();
                        $codigo_establecimiento = $sheet->getCell('C9')->getValue();
                        // ... extraer otros datos

                        $stmt = $conn->prepare("INSERT INTO uploads (file_name, file_path, nombre_entidad, rut_entidad, codigo_establecimiento /* ... otros campos */) VALUES (?, ?, ?, ?, ? /* ... otros valores */)");
                        $stmt->bind_param("sssss", $fileName, 'uploads/' . $targetFilePath, $nombre_entidad, $rut_entidad, $codigo_establecimiento /* ... otros datos */); // Guarda la ruta completa en la BD

                        if ($stmt->execute()) {
                            $successCount++;
                        } else {
                            $response['errors'][] = "Archivo $fileName: Error al guardar en la base de datos: " . $stmt->error;
                        }

                        $stmt->close();

                    } catch (Exception $e) {
                        $response['errors'][] = "Archivo $fileName: Error al procesar Excel: " . $e->getMessage();
                        // Si hay un error con el Excel, elimina el archivo subido
                        $filesystem->delete($targetFilePath);
                    }
                } catch (Exception $e) {
                    $response['errors'][] = "Archivo $fileName: Error al subir con Flysystem: " . $e->getMessage();
                }


            } else {
                // ... (código para manejar errores de carga) ...
            }
        }

        // ... (código para enviar la respuesta JSON) ...

    }

} catch (Exception $e) {
    // ... (código para manejar errores generales) ...
} finally {
    // ... (código para cerrar la conexión) ...
}

?>