<?php

session_start();

include_once '../src/app/config.php';

$usuario_login = $_POST['nombre_usuario'];
$contrasena_login = $_POST['contrasena'];

echo '<pre>';
var_dump($usuario_login);
var_dump($contrasena_login);
echo '</pre>';

// verifica si usuario existe
$sql = 'SELECT * FROM usuarios WHERE nombre = ?';
$sentecia = $pdo->prepare($sql);
$sentecia->execute(array($usuario_login));
$resultado = $sentecia->fetch();

echo '<pre>';
var_dump($resultado);
echo '</pre>';

if(!$resultado){
    echo 'No existe usuario';
    header('Location:./?error_login=si');
    die();
}

// echo 'Usuario verificado';

echo '<pre>';
var_dump($resultado['contrasena']);
echo '</pre>';

if( password_verify($contrasena_login, $resultado['contrasena']) ){
    // las contraseñas son iguales
    echo 'Las contraseñas son iguales';
    $_SESSION['admin'] = $usuario_login;
    header('Location:home.php');
} else {
    echo 'No son iguales las contraseñas';
}