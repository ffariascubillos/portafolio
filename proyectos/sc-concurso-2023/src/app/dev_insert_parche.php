<?php 

// Configuracion
require('./config.php');

// $cod1 = 'asad';
// $cod1 = 'cdes'; 
// $cod1 = 'chil';
// $cod1 = 'cost';
// $cod1 = 'lvet';
// $cod1 = 'plat';
// $cod1 = 'ppna';
// $cod1 = 'r225';
// $cod1 = 'r245';
// $cod1 = 'rbbr';
// $cod1 = 'rmyb';
// $cod1 = 'rmyz';
// $cod1 = 'rplb';
// $cod1 = 'rplz';
// $cod1 = 'saca';
// $cod1 = 'rcos';
// $cod1 = 'rmya';
// $cod1 = 'cchi';
// $cod1 = 'desh';
$inter = 1000;

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

// insert
$sql = "INSERT INTO codigos_concurso_parche (codigo_prod) VALUES (?)";
$insert = $pdo->prepare($sql);


for( $i = 3; $i < $inter; $i += 7 ){
    // $insert->execute([$cod1.calcularnum2($i).$i]);
    echo $cod1.calcularnum2($i).$i . '<br>';
}

?>