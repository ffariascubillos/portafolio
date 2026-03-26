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
    global $respuesta;

    $nombre = $_POST['nombre'];
    $rutUsuario = $_POST['rut'];
    $region = $_POST['region'];
    $punto_compra = $_POST['punto_compra'];
    $email = $_POST['email'];
    $code = $_POST['code'];
    $fecha_registro = date('Y:m:d');

    if(filter_var($email, FILTER_VALIDATE_EMAIL)){

        if($nombre != '' && $rutUsuario != '' && $region != '' && $email != '' && $punto_compra != '' && $code != ''){

            // validar si existe el cod.
            $sql_cod = "SELECT codigo_prod FROM codigos_concurso WHERE codigo_prod = ?";
            $sql_cod_select = $pdo->prepare($sql_cod); 
            if($sql_cod_select->execute(array($code)) ){ 
                if($sql_cod_select->fetch()){   
                    // echo '<br>El código existe';
                    // validar si es que el código
                    // se encuentra en uso.
                    $sql_cod_enuso = "SELECT codigo_prod, enUso FROM codigos_concurso WHERE codigo_prod = ? AND enUso = ?";
                    $sql_cod_enuso_select = $pdo->prepare($sql_cod_enuso); 
                    if($sql_cod_enuso_select->execute(array($code,1)) ){ 
                        if($sql_cod_enuso_select->fetch()){   
                            // echo ', pero está en uso.';
                            $response = 3;
                        } else {
                            // echo ', y está sin uso.';

                            // si se cumple lo anterior
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

                            // si se cumple lo anterior
                            // actualizar registro
                            $sql_update = "UPDATE codigos_concurso
                            SET 
                            codigo_prod = ?,
                            rutUsuario = ?,
                            enUso = ?,
                            fecha_registro = ?
                            WHERE codigo_prod = '$code' AND enUso = 0";
                            $insert = $pdo->prepare($sql_update);
                            if($insert->execute([$code,$rutUsuario,1,$fecha_registro])) {
                                if($sql_update){
                                    $response = 4;
                                    // echo 'Se actualizó el registro!';
                                } else {
                                    $response = 5;
                                    // echo 'No se pudo actualizar!';
                                }
                            }
                            // vaciar data
                            $insert = null;
                            $pdo = null;
                        }
                    }
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