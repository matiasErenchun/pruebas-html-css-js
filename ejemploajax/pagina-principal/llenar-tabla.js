
$(document).ready(funcion2);

function funcion1()
{
    let boton = document.getElementById('mostrar');
    boton.onclick=function ()
    {

        let xhtml=new XMLHttpRequest();
        xhtml.open('POST','consulta.php', true);
        xhtml.send();
        xhtml.onreadystatechange=function ()
        {
            if(this.readyState==4)
            {
                if (this.status==200)
                {
                    console.log(this.responseText);
                }
            }
        }
    }
}

function funcion2()
{
    $.ajax({
        url: "consulta.php",
        type: "POST",
        data: ""
    }).done(function(respuesta) {
        if (respuesta.status === "ok") {
            console.log(JSON.stringify(respuesta));
        }
    });

}
