/*
1)De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
a)informar la cantidad de personas de cada sexo.
b)la edad promedio en total
c)la mujer con más temperatura(si la hay)
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	var nombre;
	var temperatura;
	var sexo;
	var edad;
	var contadorHombres=0;
	var contadorMujeres=0;
	var acumuladorEdades=0;
	var promedioDeEdades;
	var mujerConMasTemperaturaTemperatura;
	var mujerConMasTemperaturaNombre;
	var flagPuntoC=true;
	var verLosResultados

	for(var i =0;i<5;i++){

		do{
			nombre=prompt("ingrese su nombre");
		}while(nombre!="string"&&nombre == "");
		do{
			temperatura=prompt("ingrese su temperatura corporal");
			temperatura= parseInt(temperatura);
		}while(isNaN(temperatura));
		do{
			sexo=prompt("ingre su genero","'m' o 'f'");
		}while(sexo!="m"&&sexo!="f");
		do{
			edad=prompt("ingrese su edad");
			edad= parseInt(edad);
		}while(isNaN(edad));

     //a)informar la cantidad de personas de cada sexo.

		if(sexo=="m"){
			contadorHombres++;
		}else{
			contadorMujeres++;
		}
     //b)la edad promedio en total

		acumuladorEdades+=edad;

     //c)la mujer con más temperatura(si la hay)

		if(sexo=="f"){
			if(flagPuntoC){
				mujerConMasTemperaturaTemperatura=temperatura;
				mujerConMasTemperaturaNombre=nombre;
				flagPuntoC=false;
			}else if(mujerConMasTemperaturaTemperatura<temperatura){
				mujerConMasTemperaturaTemperatura=temperatura;
				mujerConMasTemperaturaNombre=nombre;
			}

		}
	}//  </for>


 //a)informar la cantidad de personas de cada sexo.

	if(contadorHombres != 0){
		console.log("hay "+contadorHombres+" hombres" );
	}
	if(contadorMujeres != 0){
		console.log( "hay = "+contadorMujeres+" mujeres");
	}
 //b)la edad promedio en total
	promedioDeEdades=acumuladorEdades/i;

   console.log("el promdio de edades es =" +promedioDeEdades);

 //c)la mujer con más temperatura(si la hay)
	if(contadorMujeres != 0){
		console.log("la mujer con mas temperatura es = "+mujerConMasTemperaturaNombre+
		"y se llama = "+mujerConMasTemperaturaNombre);
	}

	
	verLosResultados=confirm("quiere ver los resultados?")
	if(verLosResultados){
		if(contadorHombres != 0){
			document.write("<br> hay "+contadorHombres+" hombres" );
		}
		if(contadorMujeres != 0){
			document.write( "<br>hay = "+contadorMujeres+" mujeres");
		}

		document.write("<br>el promdio de edades es =" +promedioDeEdades);

		if(contadorMujeres != 0){
			document.write("<br>la mujer con mas temperatura es = "+mujerConMasTemperaturaNombre+
			"<br>y se llama = "+mujerConMasTemperaturaNombre);
		}
	}



}// </function>
