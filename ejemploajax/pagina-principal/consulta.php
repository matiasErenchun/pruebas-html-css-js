<?php
    include "conexion.php";
    $conexion=conectar();
    $resultado=pg_query($conexion,"SELECT * FROM recurso");
    $datos = array();
    $contador=0;
    while ($fila=pg_fetch_object($resultado))
    {
        $datos[$contador]=$fila;
        $contador++;
    }

    echo json_encode($datos);


?>
