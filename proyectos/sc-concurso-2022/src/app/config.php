<?php 

// servidor local
$servername = "localhost";
$username = "root";
$password = "";
$db = "supercerdo";

// servidor local
// $servername = "mysql.supercerdo.cl";
// $username = "forge";
// $password = "518f2Zej0vUvJViZZAhE";
// $db = "sc_prod";

$charset = array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8");

try {
    $pdo = new PDO("mysql:host=$servername;dbname=$db", $username, $password, $charset);
    // echo "<br><br>Conexion Exitosa <br><br>";
} catch (PDOException $e) {
    print " Conexion fallida " . $e->getMessage() . "<br/>";
    die();
}

?>