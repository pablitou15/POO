<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Datos Extraídos</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
    <div class="container">
        <h3>Datos Extraídos de los Archivos Subidos</h3>
        <div class="row">
            <div class="col-md-12">
                <table class="table table-striped">
                    <thead class="thead-dark">
                        <tr>
                            <th>Clave</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                        $servername = "localhost";
                        $username = "root";
                        $password = "";
                        $database = "subir_archivos";

                        $conn = new mysqli($servername, $username, $password, $database);

                        if ($conn->connect_error) {
                            die("Error de conexión: " . $conn->connect_error);
                        }

                        $sql = "SELECT data_key, data_value FROM extracted_data";
                        $result = $conn->query($sql);

                        if ($result->num_rows > 0) {
                            while ($row = $result->fetch_assoc()) {
                                echo "<tr><td>" . htmlspecialchars($row["data_key"]) . "</td><td>" . htmlspecialchars($row["data_value"]) . "</td></tr>";
                            }
                        } else {
                            echo "<tr><td colspan='2'>No se encontraron datos extraídos.</td></tr>";
                        }

                        $conn->close();
                        ?>
                    </tbody>
                </table>
            </div>
        </div>
        <hr>
        <input type="button" value="< Atrás" name="btn_atras" id="btn_atras" onclick="window.location.href='index.html'" class="btn btn-secondary">
        <p>&nbsp;</p>
        <footer class="footer mt-auto py-1 bg-dark text-white">
            <div class="container text-center">
                <?php
                    echo "Unidad de Gestión Tecnológica - Subsecretaría de Educación Parvularia";
                ?>
            </div>
        </footer>
    </div>
</body>
</html>