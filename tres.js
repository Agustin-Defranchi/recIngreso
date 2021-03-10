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
	let descuento;
	let importeFinal;
	let impuesto;
	let salir;

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



		


		salir=prompt("desea salir? (ingrese s para salir)");
	}while(salir != "s");

}

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
