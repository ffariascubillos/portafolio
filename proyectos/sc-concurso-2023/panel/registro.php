<?php 

session_start(); 

if( !isset($_SESSION['admin']) ){
    header('Location:./index.php');
}

?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <title>Formulario</title>
</head>
<body>

<div class="container">
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
    <div class="row">
        <div class="col-6">
            <h3>Registro usuarios</h3>
            <form action="agregar_usuario.php" method="post">
                <input type="text" name="nombre_usuario" placeholder="Ingresa usuario">
                <input type="password" name="contrasena" placeholder="Ingresa contraseña">
                <input type="password" name="contrasena2" placeholder="Confirma tu contraseña">
                <button type="submit">Guardar</button>
            </form>
        </div>
    </div>
</div>

</body>
</html>