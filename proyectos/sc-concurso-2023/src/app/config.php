<?php 

// servidor local
$servername = "localhost";
$username = "root";
$password = "";
$db = "supercerdo_concurso_122023";

// servidor producción
// $servername = "mysql.supercerdo.cl";
// $username = "forge";
// $password = "518f2Zej0vUvJViZZAhE";
// $db = "supercerdo_concurso_verano_23";

$charset = array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8");

try {
    $pdo = new PDO("mysql:host=$servername;dbname=$db", $username, $password, $charset);
    // echo "<br><br>Conexion Exitosa <br><br>";
} catch (PDOException $e) {
    print " Conexion fallida " . $e->getMessage() . "<br/>";
    die();
}

?>