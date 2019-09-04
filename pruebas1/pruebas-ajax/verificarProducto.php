<?php

    $producto = $_GET['producto'];
    $conexion=pg_connect("host=localhost dbname=ciudadesmountandblade user=postgres password=Oni199233");
    $resultado=pg_query($conexion,"SELECT * FROM productos where nombre = '".$producto."'");
    if(pg_num_rows($resultado) >0)
    {
        echo "1";
    }
    else
    {
        echo "0";
    }

?>





















