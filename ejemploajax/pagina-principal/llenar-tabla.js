
$(document).ready(funcion1);

function funcion1()
{
    let boton = document.getElementById('mostrar');
    boton.onclick=function ()
    {
        //este es el formato de conexion de js
        let xhtml=new XMLHttpRequest();// creamos el objeto de conexion
        xhtml.open('GET','consulta.php',true)// creamos la peticion y el archivo a ejecutar
        xhtml.send();// mandar la peticion
        xhtml.onreadystatechange=function ()// cuando la peticion este lista se ejcuta la funcion definida
        {
            if(this.readyState==4)// se recibio correctamente la peticion
            {
                if (this.status==200)// se termino correctamente la informacion
                {
                    console.log(xhtml.responseText);// mostramos el texto que nos regresa
                    let data = JSON.parse(this.responseText);// decodificamos el json en un arreglo
                    var codigoHTML="";// definimos la variable a la cual concatenaremos el codigo html
                    for (var i = 0; i <data.length ; i++)// cada eleemnto entregado por el json lo agregaremos segune l formato nesesario
                    {
                        // a continuacion concatenamos los elemento que nesesitamos
                        console.log(data[i].nombre);
                        codigoHTML=codigoHTML.concat("<tr>");
                        codigoHTML=codigoHTML.concat("<td>"+data[i].codigo+"</td>");
                        codigoHTML=codigoHTML.concat("<td>"+data[i].nombre+"</td>");
                        codigoHTML=codigoHTML.concat("<td>"+data[i].descripcion+"</td>");
                        codigoHTML=codigoHTML.concat("</tr>");
                    }
                    console.log(codigoHTML);
                    document.getElementById("cuerpotabla").innerHTML = codigoHTML;// reemplazamos el contenido del eleemnto cuerpo tabla

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
