<?php 

// Configuracion
require('./config.php');

// validaciones
if($_SERVER["REQUEST_METHOD"] == "POST"){

    // form data
    global $nombre;
    global $rutUsuario;
    global $region;
    global $punto_compra;
    global $email;
    global $code;
    global $fecha_registro;
    global $response;

    $nombre = $_POST['nombre'];
    $rutUsuario = $_POST['rut'];
    $region = $_POST['region'];
    $punto_compra = $_POST['punto_compra'];
    $email = $_POST['email'];
    $code = $_POST['code'];
    $fecha_registro = date('Y:m:d');

    $frag1 = substr($code, -14, 4);
    $frag2 = substr($code, -3);

    if(filter_var($email, FILTER_VALIDATE_EMAIL)){

        if($nombre != '' && $rutUsuario != '' && $region != '' && $punto_compra != '' && $email != '' && $code != ''){
            
            // validar si existe el cod.
            $sql_cod = "SELECT codigo_prod FROM codigos_concurso_parche WHERE codigo_prod = ?";
            $sql_cod_select = $pdo->prepare($sql_cod); 
            if($sql_cod_select->execute(array($frag1.$frag2)) ){ 
                if($sql_cod_select->fetch()){   
                    // echo '<br>El código existe';
                    // actualizar registro
                    $sql_update = "INSERT INTO usuarios_registrados
                    SET 
                    rutUsuario = ?,
                    codigo_prod = ?,
                    nombre = ?,
                    region = ?,
                    punto_compra = ?,
                    email = ?,
                    fecha_registro = ?";
                    $insert_usuario = $pdo->prepare($sql_update);
                    if($insert_usuario->execute([$rutUsuario,$code,$nombre,$region,$punto_compra,$email,$fecha_registro])) {
                        if($insert_usuario){
                            $response = 4;
                            // echo 'Se ingresó el usuario!';
                        } else {
                            $response = 5;
                            // echo 'No se pudo ingresar el usuario!';
                        }
                    }
                    // vaciar data
                    $insert_usuario = null;
                } else {
                    // echo '<br>El código no existe';
                    $response = 6;
                }

            }  

            // vaciar data.
            $sql_rut_select = null;
            $pdo = null;
        }

    } else {
        $response = 1;
    }

    // echo $response;
    echo json_encode($response);
    exit;

}

?>