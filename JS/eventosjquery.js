//jquery = $
var inicia = function()
{
	var nuevo = function()
	{
		//JASON= JavaScript Object 
		$.ajax(
		{
  			url: 'https://randomuser.me/api/',
  			dataType: 'json',
  			success: function(data) 
  			{
    			$("#nombre").html(data.results[0].name.first+" "+data.results[0].name.last);
    			$("#foto").attr("src",data.results[0].picture.large);
  			}
		});
	}
	//alert("Página cargada");
	$("#btnNuevo").on("click",nuevo);//Activar el boton.
	//$("#btnNuevo").on("click",nuevo);Desactivar el boton.
}
$(document).ready(inicia);