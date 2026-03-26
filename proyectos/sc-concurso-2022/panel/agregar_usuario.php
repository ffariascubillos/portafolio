<?php

include_once '../src/app/config.php';

// echo password_hash("sc2022@", PASSWORD_DEFAULT)."\n";
// captura de variables por POST
$usuario_nuevo = $_POST['nombre_usuario'];
$contrasena = $_POST['contrasena'];
$contrasena2 = $_POST['contrasena2'];

// verifica si usuario existe
$sql = 'SELECT * FROM usuarios WHERE nombre = ?';
$sentecia = $pdo->prepare($sql);
$sentecia->execute(array($usuario_nuevo));
$resultado = $sentecia->fetch();

var_dump($resultado);

// si existe usuario matamos la operación
if($resultado){
    echo '<br>Existe este usuario';
    die();
}

// die();

$contrasena = password_hash($contrasena, PASSWORD_DEFAULT);

echo '<pre>';
var_dump($usuario_nuevo);
var_dump($contrasena);
var_dump($contrasena2);
echo '</pre>';


// Ver el ejemplo de password_hash() para ver de dónde viene este hash.
$hash = $contrasena;

if (password_verify($contrasena2, $hash)) {

    echo 'La contraseña es válida!';

    // require('./email.php');
    $sql = "INSERT INTO usuarios (nombre,contrasena) VALUES (?,?)";
    $insert = $pdo->prepare($sql);

    if( $insert->execute([$usuario_nuevo,$contrasena]) ){
        echo '<br>Agregado<br>';
    } else {
        echo '<br>Error<br>';
    }
    $insert = null;
    $pdo = null;
    //header('Location:index.php');

} else {
    echo 'La contraseña no es válida.';
}

?>