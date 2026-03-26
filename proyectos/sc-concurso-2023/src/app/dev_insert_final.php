<?php 

// Configuracion
require('./config.php');

$cod1 = 'r225';
$num1 = 9000000;
$num2 = 3;
$numfinal;
$ceros;
// rbbr 0030837 696

// date
$fecha_registro = date('Y:m:d');

// insert
$sql = "INSERT INTO codigos_concurso
(codigo_prod,rutUsuario,enUso,fecha_registro)
VALUES (?,?,?,?)";
$insert = $pdo->prepare($sql);

function calcularnum1($residuo){
    if(strlen($residuo) === 1) {
        return $ceros = '000000';
    }
    if(strlen($residuo) === 2) {
        return $ceros = '00000';
    }
    if(strlen($residuo) === 3) {
        return $ceros = '0000';
    }
    if(strlen($residuo) === 4) {
        return $ceros = '000';
    }
    if(strlen($residuo) === 5) {
        return $ceros = '00';
    }
    if(strlen($residuo) === 6) {
        return $ceros = '0';
    }
    if(strlen($residuo) === 7) {
        return $ceros = '';
    }
}

function calcularnum2($residuo2){
    if(strlen($residuo2) === 1) {
        return $ceros = '00';
    }
    if(strlen($residuo2) === 2) {
        return $ceros = '0';
    }
    if(strlen($residuo2) === 3) {
        return $ceros = '';
    }
}

for($a = 1; $a <= $num1; $a ++){
    if($a < $num1){
        // echo $cod1 . calcularnum1($a) . '' . $a . '' . calcularnum2($num2) . '' . $num2 . '<br>';
        $fullcode = $cod1 . calcularnum1($a) . '' . $a . ' ' . calcularnum2($num2) . '' . $num2;
        echo $fullcode . '<br>';
        // $insert->execute([$fullcode,NULL,0,$fecha_registro]);
        $num2 += 7;
        if($num2 === 1004){
            $num2 = 3;            
        }
    }
}

echo 'Listo! <br>';

// echo $fullcode;

// empty data and close conn.
$insert = null;
$pdo = null;
exit();

?>