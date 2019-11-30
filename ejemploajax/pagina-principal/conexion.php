<?php
    function conectar()
    {
        $file = fopen("loginbd.txt", "r") or exit("Unable to open file!");
        //Output a line of the file until the end is reached
        $contador=1;
        $arregloDatos=array();
        while(!feof($file))
        {
            $arregloDatos[$contador]=fgets($file);
            $contador++;
        }
        fclose($file);
        $usuario=$arregloDatos[1];
        $password=$arregloDatos[2];
        $conexion=pg_connect("host=localhost port=5432 dbname=warhammer user=".$usuario." password=".$password)or die('error'.pg_last_error());
        $isok=pg_connection_status($conexion);
        if($isok !== PGSQL_CONNECTION_OK)
        {
            echo "error de conexion";
        }
        return $conexion;
    }


?>
