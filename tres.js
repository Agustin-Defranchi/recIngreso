function mostrar()
{

/*

Enunciado:
Ferrete lamparas 2.0 El empleado del negocio ingresa los siguientes datos de cada venta, teniendo en cuenta que tenemos varias ventas:
nombre del cliente
cantidad de lamparas marca (FelipeLamparas - ArgentinaLuz - Illuminatis)
precio por unidad total de la compra: dato que se calcula.
Se sabe que si la marca es FelipeLamparas y la cantidad de lamparas supera las 5 unidades, 
se aplica un descuento del 10% sobre la compra Si la marca es ArgentinaLuz y compra 3 o mas unidades,
 el descuento es del 5%. Ningun otro caso aplica descuento. al terminar la carga de todas las ventas,la empresa desea saber:
a) Cuanto recauda la empresa en concepto de todas las ventas realizadas.
b) Cuanto "perdio" la empresa en concepto de descuentos.
c) El promedio de la cantidad de lamparas vendidas de cada marca.
d) La marca que mas ventas realizo (sin importar la cantidad de lamparas vendidas)
Curso de ingreso UTN FRA


*/
	let nombre;
	let marca;
	let cantidad;
	let precio ;
	let salir;
	let precioTotal=0;
	let precioUnidad;
	let contfelipe=0;
	let contArgentina=0;
	let contiluminatis=0;
	let descuentoArgentina=0;
	let descuentoFeliepe=0;
	let precioDescFelip;
	let precioDescArgentina;
	let perdidas;
	let cantargentina=0;
	let cantfelipe=0;
	let cantiluminatis=0;
	let promfelipe;
	let promargentina;
	let promiluminatis;

	do
	{
		nombre = prompt("ingrese el nombre (del cliente)");
		while(!isNaN(nombre))
		{
			nombre = prompt("ingrese un nombre correcto (del cliente)");
		}

		cantidad = parseInt(prompt("ingrese la cantidad de lamparas(de 1 en adelante)"));
		while(cantidad <= 0 || isNaN(cantidad))
		{
			cantidad = parseInt(prompt("ingrese una cantidad dentro de los limites(de 1 en adelante"));
		}

		marca = prompt("ingrese la marca de la lampara (felipelamparas - argentinaluz - illuminatis)");
		while(marca != "felipelamparas" && marca != "argentinaluz"&& marca != "illuminatis")
		{
			marca = prompt("ingrese la marca de la lampara (felipelamparas - argentinaluz - illuminatis)");
		}	

		precio = parseInt(prompt("ingrese el precio individual (de 1 en adelante)"));
		while(precio <= 0 || isNaN(precio))
		{
			precio = parseInt(prompt("ingrese el precio individual dentro de los limites(de 1 en adelante"));
		}

		precioUnidad = precio * cantidad;
		precioTotal += precioUnidad;

		if(marca=="felipelamparas")
		{
			contfelipe++;
			cantfelipe+=cantidad;
			if(cantidad>5)
			{
				descuentoFeliepe = precioUnidad * 10/100;
				precioDescFelip = precioUnidad - descuentoFeliepe;

			}
		}
		else if(marca=="argentinaluz")
		{
			contArgentina++;
			cantargentina+=cantidad;
			if(cantidad>=3)
			{
				descuentoArgentina = precioUnidad * 5/100;
				precioDescArgentina=precioUnidad - descuentoArgentina;
			}


		}
		else
		{
			contiluminatis++;
			cantiluminatis+=cantidad;
		}



		


		salir=prompt("desea salir? (ingrese s para salir)");
	}while(salir != "s");

	alert("la empreza recauda un total de: "+precioTotal);

	perdidas =(precioTotal - descuentoArgentina)-descuentoFeliepe;
	alert("las perdidas por el descuento es de: "+perdidas);

	if(contfelipe!=0)
	{
		promfelipe = cantfelipe/contfelipe;
	}
	else
	{
		promfelipe = 0;
	}

	if(contArgentina!=0)
	{
		promargentina = cantargentina / contArgentina;
	}
	else
	{
		promargentina =0;
	}

	if (contiluminatis!=0)
	{
		promiluminatis = cantiluminatis / contiluminatis;
	}
	else
	{
		promiluminatis=0;
	}

	alert("el promedio de la cantidad de lamparas vendidas es de: FelipeLamparas: "+promfelipe+" ArgentinaLuz: "+promargentina+" Illuminatis: "+promiluminatis);

	if(contfelipe > contArgentina && contfelipe > contiluminatis)
	{
		alert("la marca que mas ventas realizo es FelipeLamparas");
	}
	else if(contArgentina >= contfelipe && contArgentina > contiluminatis)
	{
		alert("la marca que mas ventas realizo es argentinaluz");
	}
	else
	{
		alert("la marca que mas ventas realizo es Illuminatis");
	}
}

/*

Enunciado:
Ferrete lamparas 2.0 El empleado del negocio ingresa los siguientes datos de cada venta, teniendo en cuenta que tenemos varias ventas:
nombre del cliente
cantidad de lamparas 
marca (FelipeLamparas - ArgentinaLuz - Illuminatis)
precio por unidad 
total de la compra: dato que se calcula.
Se sabe que si la marca es FelipeLamparas y la cantidad de lamparas supera las 5 unidades, 
se aplica un descuento del 10% sobre la compra Si la marca es ArgentinaLuz y compra 3 o mas unidades,
 el descuento es del 5%. Ningun otro caso aplica descuento. al terminar la carga de todas las ventas,la empresa desea saber:
a) Cuanto recauda la empresa en concepto de todas las ventas realizadas.
b) Cuanto "perdio" la empresa en concepto de descuentos.
c) El promedio de la cantidad de lamparas vendidas de cada marca.
d) La marca que mas ventas realizo (sin importar la cantidad de lamparas vendidas)
Curso de ingreso UTN FRA

*/
