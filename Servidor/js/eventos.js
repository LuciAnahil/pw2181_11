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
						$("#txtNombre").val(response.nombre);
						$("#txtClaveUsuario").val(response.clave);
					}
					else
					{
						$("#txtNombre").focus();
						$("#txtNombre").val("");
						$("#txtClaveUsuario").val("");
					}

				},
				error:function(xhr,ajaxOptions,thrownError){
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
	var Guardar = function(){
		var usuario =$("#txtNombreUsuario").val();
		var nombre =$("#txtNombre").val();
		var clave =$("#txtClaveUsuario").val();
		var parametros = "opc=guardarusuario"
						 "&usuario="+usuario+
						 "&nombre="+nombre+
						 "&clave="+clave+
						 "&aleatorio="+Math.random();
		if(usuario != "" && nombre!= "" && clave != "")
		{
			$.ajax({
				cache:false,
				type:"POST",
				dataType:"json",
				url:"php/guardarusuarios.php",
				data: parametros,
				success:function(response){
					if(response.respuesta == true)
					{
						alert("Cambios guardados con exito");
						$("#frmUsuarios > input").val("");
						$("#txtNombreUsuario").focus();
					}
					else
					{
						alert("Ocurrio un error, intente mas tarde");
					}
				},
				error:function(xhr,ajaxOptions,thrownError){
				}	
			});
		}
		else
		{
			alert("Llene todos los campos");
		}
	}
	var Borrar = function()
	{
		var usuario = $("#txtNombreUsuario").val();
		var Pregunta = prompt("Seguro de borrar"+usuario+"? (si/no)", "no");
		var parametros="opc=borrarusuario"
						 "&usuario="+usuario+
						 "&aleatorio="+Math.random();

		if (Pregunta != null && Pregunta =="si") {
    		//Aqui va el AJAX... :
    		$.ajax({
				cache:false,
				type:"POST",
				dataType:"json",
				url:"php/borrarUsuario.php",
				data: parametros,
				success:function(response){
					if(response.respuesta == true)
					{
						alert("Usuario borrado");
						$("#frmUsuarios > input").val("");
						$("#txtNombreUsuario").focus();
					}
					else
					{
						alert("Ocurrio un error, intente mas tarde");
					}

				},
				error:function(xhr,ajaxOptions,thrownError){
				}	
			});
		}
	}
	var Listado = function(){
		//Ocultamos todas las secciones dentro del main
		$("main>section").hide("slow");
		//Aparecemos el listado
		$("#frmListado").show("slow");
		var parametros="opc=listado"+
						"&aleatorio="+Math.random();
		$.ajax({
				cache:false,
				type:"POST",
				dataType:"json",
				url:"php/listado.php",
				data: parametros,
				success:function(response){
					if(response.respuesta == true)
					{
						$("#tblListado").append(response.tabla);
					}
					else
					{
						alert("Ocurrio un error, intente mas tarde");
					}

				},
				error:function(xhr,ajaxOptions,thrownError){
				}	
			});
	}
	$("#btnAceptar").on("click",Aceptar);
	$("#txtNombreUsuario").on("keypress",teclaNombreUsuario);
	$("#btnGuardar").on("click",Guardar);
	$("#btnBorrar").on("click",Borrar);
	$("#btnListado").on("click",Listado);
	$("#frmUsuarios").hide();///Necesario PL
}
$(document).ready(inicioApp);