<?php 

session_start(); 

if(isset($_SESSION['admin'])){
    header('Location:home.php');
}

if($_GET) {
    $mensaje = $_GET['error_login'];
    // echo $mensaje;
    if( $mensaje == 'si' ) {
        echo '<script>alert("Error de credenciales, intente nuevamente :)");</script>';
    }
}

?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ingreso de usuarios</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
</head>
<body>

<div class="container">
    <div class="row align-items-center justify-content-center">
        <div class="col-sm-6 mt-5 pt-5">
            <h3 class="mb-5">Ingreso de usuarios</h3>
            <form action="./login.php" method="post">
                <div class="mb-3">
                    <label for="nombre_usuario" class="form-label">Usuario</label>
                    <input required type="text" placeholder="Ingresa usuario" class="form-control" name="nombre_usuario" aria-describedby="userHelp">
                    <div id="userHelp" class="form-text">Proporcionado por administrador.</div>
                </div>
                <div class="mb-3">
                    <label for="contrasena" class="form-label">Password</label>
                    <input required placeholder="Ingresa contraseña" type="password" class="form-control" name="contrasena">
                </div>
                <button type="submit" class="btn btn-primary">Ingresar</button>
            </form>
        </div>
    </div>
</div>

</body>
</html>