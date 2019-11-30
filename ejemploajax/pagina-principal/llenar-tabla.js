
$(document).ready(funcion1);

function funcion1()
{
    let boton = document.getElementById('mostrar');
    boton.onclick=function ()
    {

        let xhtml=new XMLHttpRequest();
        xhtml.open('GET','consulta.php',true)
        xhtml.send();
        xhtml.onreadystatechange=function ()
        {
            if(this.readyState==4)
            {
                if (this.status==200)
                {
                    console.log(xhtml.responseText);
                    let data = JSON.parse(this.responseText);
                    for (var i = 0; i <data.length ; i++) {
                        console.log(data[i].nombre);
                    }
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
