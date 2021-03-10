function mostrar()
{
	/*se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
b) El nombre de la alumna mas joven.
c) Porcentaje de estudiantes que estudia cada carrera.
d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica.*/
	let nombre;
	let carrera;
	let sexo;
	let cantidad;
	let edad;
	let nombreMax;
	let notaMax;
	let flagNombreMax=0;
	let nombreEdadMin;
	let edadMin;
	let flagEdadMin=0;
	let contFisica=0;
	let contSistemas=0;
	let contQuimica=0;
	let edadMaxmaterias;
	let nombreMaxmaterias;
	let flagMaxMaterias=0;
	let materiasMax;



    for(let i = 0;i<500;i++)
	{
		nombre = prompt("ingrese el nombre");
		while(!isNaN(nombre))
		{
			nombre = prompt("ingrese un nombre correcto");
		}

		carrera = prompt("ingrese su carrera (quimica/fisica/sistemas)");
		while(carrera != "quimica" && carrera != "fisica"&& carrera != "sistemas")
		{
			carrera = prompt("ingrese una carrera valida (quimica/fisica/sistemas)");
		}	

		sexo = prompt("ingrese el sexo (f/m/nb)");
		while(sexo != "f" && sexo != "m" && sexo != "nb")
		{
			sexo = prompt("ingrese un sexo valido (f/m/nb)");

		}	

		cantidad = parseInt(prompt("ingrese la cantidad de materias(1-5)"));
		while(cantidad <= 0 || cantidad > 5 || isNaN(cantidad))
		{
			cantidad = parseInt(prompt("ingrese una cantidad dentro de los limites(1 -  5"));
		}

		nota= parseInt(prompt("ingrese la nota  (0-10)"));
		while(nota < 0 || nota > 10 || isNaN(nota))
		{
			nota= parseInt(prompt("ingrese una nota  valida (0-10)"));
		}	

		edad= parseInt(prompt("ingrese la edad (positiva)"));
		while(edad < 0 || isNaN(edad))
		{
			edad= parseInt(prompt("ingrese una edad valida (positiva) "));
		}

		

		if((flagEdadMin==0 || edad < edadMin)&& sexo == "f")
		{
			flagEdadMin=1;
			edadMin=edad;
			nombreEdadMin=nombre;
		}

		if(carrera == "fisica") 
		{
			contFisica++;
			if(flagNombreMax==0 || nota > notaMax)	
			{
				flagNombreMax=1;
				notaMax=nota;
				nombreMax=nombre;
			}
		}
		else if(carrera == "quimica")
		{
			contQuimica++;
		}
		else
		{
			contSistemas++;
		}

		if((flagMaxMaterias==0 || cantidad > materiasMax)&&carrera != "quimica")
		{
			flagMaxMaterias=1;
			materiasMax = cantidad;
			nombreMaxmaterias=nombre;
			edadMaxmaterias=edad;
		}


	}
	if(flagNombreMax==1)
	{
		alert("el nombre del mejor promedio de los alumnos que estudian fisica es: "+nombreMax);
	}
	else
	{
		alert("no se ingresaron alumnos que estudian fisica");
	}

	if(flagEdadMin==1)
	{
		alert("el nombre de la alumna mas joven es: "+nombreEdadMin);
	}
	else
	{
		alert(" no se ingresaron alumnas");
	}

	alert("el procentaje de estudiantes de cada carrera es: fisica "+contFisica+" sistemas "+contSistemas+" quimica "+contQuimica);

	if(flagMaxMaterias == 1)
	{
		alert("el nombre del estudiante qeu cursa mas materias exceptuando quimica es: "+nombreMaxmaterias+" y su edad es de "+edadMaxmaterias+" años");
	}
}

/*
Enunciado:
Realizar el algoritmo que permita ingresar los datos de los 500 alumnos de la UTN FRA, los datos solicitados son:
nombre carrera("Quimica";"Fisica";"Sistemas")
sexo (masculino - femenino - no binario)
cantidad de materias(entre 1 y 5)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
b) El nombre de la alumna mas joven.
c) Porcentaje de estudiantes que estudia cada carrera.
d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica.

*/
