var inicioApp = function()
{
	var Aceptar = function()
	{
		event.preventDefault();
		var usuario =$("txtUsuario").val();
		var clave =$("txtClave").val();
		var parametros = "opc=validaentrada"+
						 "&usuario="+usuario+
						 "&clave="+clave+
						 "&numero="+Math.random();
		$.ajax({
			cache:false,
			type: "POST",
			dataType: "json",
			url:"php/validaentrada.php",
			data: parametros,
			success: function(response)
			{
				if(response.respuesta == true)
				{
					alert("Bienvenido");
				}
				else
				{
					alert("Usuario o contraseña incorrecta(s)")
				}
			},
			error: function(xhr,ajaxOptions,throenError)
			{

			}
		});
	}
	$("btnAceptar").on("click",Aceptar);
}
$(document).ready(inicioApp);