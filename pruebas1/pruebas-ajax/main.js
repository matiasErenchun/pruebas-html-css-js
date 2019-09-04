window.onload=funcionPrincipal;

function funcionPrincipal()
{

    $('#bVerificar').on('click',funcionVerificar);
}

function funcionVerificar()
{
    var valorEscrito= $("#verificar").val();
    $.get("verificarProducto.php?producto="+valorEscrito, function ()
    {
        alert('respuesta:'+data);
    });
    $(`#respuesta`).text('funciona el boton');
}

