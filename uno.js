
function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let puesto;
	let sueldo;
	let salir;
	let promProg=0;
	let promAnalista=0;
	let promQa=0;
	let contProgramador=0;
	let contAnalista=0;
	let contQa=0;
	let sueldoMax;
	let sexoMax;
	let flagSexoMax=0;
	let sueldoMaxF;
	let nombreMaxF;
	let flagNombreF=0;
	let contNb=0;

	do
	{
		nombre = prompt("ingrese el nombre");
		while(!isNaN(nombre))
		{
			nombre = prompt("ingrese un nombre correcto");
		}

		edad= parseInt(prompt("ingrese la edad (positiva)"));
		while(edad < 0 || isNaN(edad))
		{
			edad= parseInt(prompt("ingrese una edad valida (positiva) "));
		}	

		sexo = prompt("ingrese el sexo (f/m/nb)");
		while(sexo != "f" && sexo != "m" && sexo != "nb")
		{
			sexo = prompt("ingrese un sexo valido (f/m/nb)");

		}	

		puesto = prompt("ingrese su puesto (programador/analista/qa)");
		while(puesto != "programador" && puesto != "analista"&& puesto != "qa")
		{
			puesto = prompt("ingrese un puesto valido (programador/analista/qa)");
		}	

		sueldo = parseInt(prompt("ingrese su sueldo(15000-70000)"))
		while(sueldo < 15000 || sueldo > 70000 || isNaN(sueldo))
		{
			sueldo = parseInt(prompt("ingrese su sueldo dentro de los limites(15000-70000)"))

		}

		if(puesto == "programador")
		{
			promProg += sueldo;
			contProgramador++;
		}
		else if(puesto == "analista")
		{
			promAnalista += sueldo;
			contAnalista++;
		}
		else
		{
			promQa += sueldo;
			contQa++;
		}

		if(flagSexoMax == 0 || sueldo > sueldoMax)
		{
			flagSexoMax=1;
			sueldoMax=sueldo;
			sexoMax=sexo;
		}

		if((flagNombreF == 0 || sueldo > sueldoMaxF) && sexo == "f")
		{
			flagNombreF=1;
			sueldoMaxF=sueldo;
			nombreMaxF=nombre;
		}

		if(sueldo > 20000 && sueldo < 55000 && sexo == "nb")
		{
			contNb++;
		}



		salir=prompt("desea salir? (ingrese s para salir)");
	}while(salir != "s");

	if(contProgramador != 0)
	{
		promProg = promProg / contProgramador;
	}
	else
	{
		promProg = 0;
	}

	if(promAnalista != 0)
	{
		promAnalista = promAnalista / contAnalista;
	}
	else
	{
		promAnalista = 0;
	}

	if (promQa != 0)
	{
		promQa = promQa / contQa;
	}
	else
	{
		promQa = 0;
	}

	alert("el promedio de sueldo es programador: "+promProg+" analista: "+promAnalista+" Qa: "+promQa);
	alert("el sexo del que recibe el mayor sueldo es: "+sexoMax);
	if(flagNombreF==1)
	{
		alert("el nombre del empleado femenino con mas sueldo es: "+nombreMaxF);
	}
	else
	{
		alert(" no se ingresaron empleados femeninos");
	}
	alert("la cantidad de programadores no binarios que cobran entre 20000 y 55000 es de: "+contNb);

	
	
}
/*
Enunciado:
Una software factory registra la siguiente informacion de sus empleados:
Nombre edad (validar)
sexo (masculino - femenino - no binario)
puesto (programador - analista - Qa)
sueldo (entre 15000 y 70000)
La empresa desea saber: se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) promedio de sueldos para cada puesto
b) el sexo del que percibe el mayor sueldo
c) el nombre del empleado femenino con mas sueldo
d) cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000

*/