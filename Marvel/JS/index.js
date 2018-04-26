var Marvel = function()
{
	var Buscar = function()
	{
		var Personaje = $("#txtPersonaje").val();
		var url = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=67788e74df746a1523d8ebb504ee1008&hash=cf5ec9bfa5a156f031a69417cd0e012c&nameStartsWith=";
		var cantidadComics = 0;
		var comics = "";
		var cantidadSeries = 0;
		var series = "";
		var cantidadHistorias = 0;
		var historias = "";
		url = url + Personaje;
		$.ajax({
			url: url,
			dataType: "json",
			success: function(response)
			{
				if(response.code == 200)//OK Todo salio bien
				{
					$("#nombre").html(response.data.results[0].name);
					$("#foto").attr("src",response.data.results[0].thumbnail.path+"."+response.data.results[0].thumbnail.extension);
					cantidadComics = response.data.results[0].comics.returned;
					for(var i=0;i<cantidadComics;i++)
					{
						comics+= response.data.results[0].comics.items[i].name+"<br>";
					}
					$("#comics").html(comics);
					cantidadHistorias = response.data.results[0].stories.returned;
					for(var j=0;j<cantidadHistorias;j++)
					{
						historias += response.data.results[0].stories.items[j].name+"<br>";	
					}
					$("#historias").html(historias);
					cantidadSeries = response.data.results[0].series.returned;
					for(var k=0;k<cantidadSeries;k++)
					{
						series += response.data.results[0].series.items[k].name+"<br>";	
					}
					$("#series").html(series);
					//alert(response.data.results[0].name);
				}
			}
		});
	}
	var teclaPersonaje = function(tecla)
	{
		//13+10
		//Retorno de carro y avance de linea
		if(tecla.which == 13)
		{
			Buscar();
		}
	}
	$("#btnBuscar").on("click",Buscar);
	$("#txtPersonaje").on("keypress",teclaPersonaje);
}
$(document).ready(Marvel);