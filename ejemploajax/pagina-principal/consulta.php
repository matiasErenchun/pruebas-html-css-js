<?php
    include "conexion.php";
    $conexion=conectar();
    $resultado=pg_query($conexion,"SELECT * FROM recurso");
    $resultadoProcesado = array();
    $contador=0;
    while ($fila=pg_fetch_assoc($resultado))
    {
        $resultadoProcesado[$contador]=$fila;
        $contador++;
    }

    echo json_encode($resultadoProcesado);


?>
