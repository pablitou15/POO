<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Carpeta Planillas</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
    <div class="container">
        <h3>Planillas de Rendición de Cuentas subidas</h3>
        <div class="row">
            <div class="col-md-6">
                <table class="table table-striped">
                    <thead class="thead-dark">
                        <tr>
                            <th>Archivo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                        $directorio = 'uploads';
                        if (is_dir($directorio)) {
                            $archivos = scandir($directorio);
                            foreach ($archivos as $archivo) {
                                if ($archivo != "." && $archivo != "..") { ?>
                                    <tr>
                                        <td>
                                            <a href="<?php echo htmlspecialchars($directorio . '/' . $archivo); ?>" target="_blank">
                                                <?php echo htmlspecialchars($archivo); ?>
                                            </a>
                                        </td>
                                    </tr>
                                <?php
                                }
                            }
                        } else {
                            echo "<tr><td>No se encontró el directorio 'uploads'.</td></tr>";
                        }
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