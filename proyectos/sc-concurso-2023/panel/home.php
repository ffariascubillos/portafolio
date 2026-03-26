<?php 

session_start(); 

if(!isset($_SESSION['admin'])){
    header('Location:./');
}

include_once '../src/app/config.php';

$sql_mostrar = 'SELECT * FROM usuarios_registrados';
$sql_agregar = $pdo->prepare($sql_mostrar);
$sql_agregar->execute();
$re = $sql_agregar->fetchAll();
json_encode($re);

// var_dump($re);

?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Plataforma</title>
    <link rel="stylesheet" href="./css/datatables.min.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/buttons/2.2.3/css/buttons.dataTables.min.css">
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>

    <div class="container mt-5 pt-5">
        <div class="row my-5">
            <h4 class="text-capitalize"><?php echo 'Bienvenido ' . $_SESSION['admin'] . ' !'; ?></h4>
        </div>
        <div class="row">
            <div class="col-12 mb-5">
                <a class="btn btn-primary" href="cerrar.php">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"></path>
                        <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"></path>
                    </svg>
                    Cerrar Sesión
                </a>
            </div>
        </div>
        <table id="tablaMostrar" class="table table-striped">
            <thead>
                <th>id</th>
                <th>Rut</th>
                <th>Código Producto</th>
                <th>Nombre</th>
                <th>Región</th>
                <th>Punto de Compra</th>
                <th>Email</th>
                <th>fecha registro</th>
            </thead>
            <tbody>
                <?php foreach($re as $r): ?>
                    <tr>
                        <td><?php echo $r['idSolicitud']; ?></td>
                        <td><?php echo $r['rutUsuario']; ?></td>
                        <td><?php echo $r['codigo_prod']; ?></td>
                        <td><?php echo $r['nombre']; ?></td>
                        <td><?php echo $r['region']; ?></td>
                        <td><?php echo $r['punto_compra']; ?></td>
                        <td><?php echo $r['email']; ?></td>
                        <td><?php echo $r['fecha_registro']; ?></td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>

    <script src="./js/jquery-3.6.0.min.js"></script>
    <script src="./js/datatables.min.js"></script>
    <script src="https://cdn.datatables.net/buttons/2.2.3/js/dataTables.buttons.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
    <script src="https://cdn.datatables.net/buttons/2.2.3/js/buttons.html5.min.js"></script>
    <script src="https://cdn.datatables.net/buttons/2.2.3/js/buttons.print.min.js"></script>
    <script>
        $('#tablaMostrar').DataTable({
            dom: 'Bfrtip',
            "pageLength": 50,
            buttons: [
                'csv', 'excel'
            ]
        });
    </script>
</body>
</html>