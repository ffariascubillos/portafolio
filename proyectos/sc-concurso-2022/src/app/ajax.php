<?php 

// Configuracion
require('./config.php');

// validaciones
if($_SERVER["REQUEST_METHOD"] == "POST"){

    // form data
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $region = $_POST['region'];
    $receta = $_POST['receta'];
    $fecha = date('Y:m:d');
    $urlimg = 'Nulo';

    $response = 0;

    if(filter_var($email, FILTER_VALIDATE_EMAIL)){

        if($nombre != '' && $email != '' && $region != '' && $receta != ''){

            require('./email.php');
            $sql = "INSERT INTO concursosc (nombre,email,region,receta,url_img,fecha_registro) VALUES (?,?,?,?,?,?)";
            $insert = $pdo->prepare($sql);
            $insert->execute([$nombre,$email,$region,$receta,$urlimg,$fecha]);
            $insert = null;
            $pdo = null;
    
            $response = 1;
        }

    } else {
        $response = 2;
    }

    // echo $response;
    echo json_encode($response);
    exit;

}

?>