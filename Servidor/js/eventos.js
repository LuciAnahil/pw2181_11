var inicioApp = function()
{
	var Aceptar = function()
	{
		event.preventDefault();
		var usuario =$("#txtUsuario").val();
		var clave =$("#txtClave").val();
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
					$("#secInicio").hide("slow");
					$("#frmUsuarios").show("slow");
					//alert("Bienvenido");
					//Posiciona el cursor en el cuadro de texto
					$("#txtNombreUsuario").focus();
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
	var buscaUsuario = function()
	{
		var usuario = $("#txtNombreUsuario").val();
		var parametros = "opc=buscaUsuario"+
						 "&usuario="+usuario+
						 "&aleatorio="+Math.random();
		if(usuario != "")
		{
			$.ajax({
				cache:false,
				type:"POST",
				dataType:"json",
				url:"php/buscaUsuario.php",
				data: parametros,
				success:function(response){
					if(response.respuesta == true)
					{
						$("#txtNombreUsuario").val(response.nombre);
						$("#txtClaveUsuario").val(response.clave);
					}
					else
					{
						$("#txtNombre").focus();
					}

				},
				error:function(xhr,ajaxOptions,thrownError)
				{
				}	
			});
		}
	}
	var teclaNombreUsuario = function(tecla)
	{
		if(tecla.which == 13)
		{
			buscaUsuario();
		}
	}
	$("#btnAceptar").on("click",Aceptar);
	$("#txtNombreUsuario").on("keypress",teclaNombreUsuario);
	$("#frmUsuarios").hide();
}
$(document).ready(inicioApp);