/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados. 
*nombre del titular ,lugar ( “bariloche”, “cataratas” o ),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el nombre de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/



function mostrar(){

	var seguirIngresandoEstadisticas;//no era necesario inicializarla, le puse true para nada en los anteriores
	var nombre;
	var lugarElegido;
	var lugarElegidoDato;
	var validacionLugar=true;
	var temporadaElegida;
	var temporadaElegidaDato;
	var validacionTemporadaElegida=true;
	var contadorBariloche=0;
	var contadorSalta=0;
	var contadorCataratas=0;
	var cantidadDePersonas;
	var lugarMasElegido;
	var acumuladorDePersonasQueViajanEnInvierno=0;
	var contadorCantidadDeViajesEnInvierno=0;
	var promedioPersonasPorInvierno;
	var flagTitularConMasPasajeros=true;
	var nombreTitularConMasPasajeros;
	var CantidadDePasajerosdelTitularConMasPasajeros;
	do{//Nos ingresan una cantidad indeterminada de estadías de  vacaciones

		//validando los datos ingresados.
		//nombre del titular
		do{
			nombre=prompt("ingrese su nombre");
		}while(nombre!= "string" && nombre == "");

		//lugar ( “bariloche”, “cataratas” o “salta”),

		while(validacionLugar){
			lugarElegido=prompt("¿Adonde viajan?","1:bariloche, 2:cataratas o 3:salta");
		
			switch(lugarElegido){
				case "1":
					lugarElegidoDato="bariloche";
					contadorBariloche++;//a)el lugar más elegido
					break;
				case "2":
					lugarElegidoDato="cataratas"
					contadorCataratas++;//a)el lugar más elegido
					break;
				case "3":
					lugarElegidoDato= "salta"
					contadorSalta++;//a)el lugar más elegido
					break;
				default:
					continue;
			}

			validacionLugar=false;
		}

		//temporada(“otoño”,”invierno, “verano,”primavera”),

		while(validacionTemporadaElegida){
			temporadaElegida=prompt("¿en que temporada viajan?",
			"1=otoño , 2=invierno , 3=verano , 4=primavera  ");
		
			switch(temporadaElegida){
				case "1":
					temporadaElegidaDato="otoño"
					break;
				case "2":
					temporadaElegidaDato="invierno"
					acumuladorDePersonasQueViajanEnInvierno += cantidadDePersonas;//c)el promedio de personas por viaje,  que viajan en invierno
					contadorCantidadDeViajesEnInvierno++;
					break;
				case "3":
					temporadaElegidaDato="verano"
					break;
				case "4":
					temporadaElegidaDato="primavera"
					break;
				default:
					continue;
			}

			validacionTemporadaElegida=false;
		}
		//cantidad de personas que viajan.
		do{
			cantidadDePersonas = prompt("ingrese la cantidad de personas que viajan");
			cantidadDePersonas = parseInt(cantidadDePersonas);
		}while(isNaN(cantidadDePersonas));
		



		//b)el nombre de titular que lleva más pasajeros.




		
		if(flagTitularConMasPasajeros){	
			 nombreTitularConMasPasajeros=nombre;
			 CantidadDePasajerosdelTitularConMasPasajeros=cantidadDePersonas;
			flagTitularConMasPasajeros=false;
		}else if(cantidadDePersonas>CantidadDePasajerosdelTitularConMasPasajeros){	
			 nombreTitularConMasPasajeros=nombre;
			 CantidadDePasajerosdelTitularConMasPasajeros=cantidadDePersonas;
		}

		






		seguirIngresandoEstadisticas=confirm("¿seguir ingresando estadisticas?");
	}while(seguirIngresandoEstadisticas);


	//a)el lugar más elegido

	if(contadorSalta>contadorBariloche&&contadorSalta>contadorCataratas){
		lugarMasElegido = contadorSalta;
	}else if(contadorBariloche>contadorCataratas) {
		lugarMasElegido = contadorBariloche;
	}else if(contadorBariloche<contadorCataratas){
		lugarMasElegido = contadorCataratas;
	}

	console.log("el lugar mas elegido es = " + lugarElegidoDato);

	//b)el nombre de titular que lleva más pasajeros.

	console.log("el titular que mas pesonas lleva es = "+ nombreTitularConMasPasajeros);

	//c)el promedio de personas por viaje,  que viajan en invierno
	if(contadorCantidadDeViajesEnInvierno > 0){
		promedioPersonasPorInvierno=acumuladorDePersonasQueViajanEnInvierno/
		contadorCantidadDeViajesEnInvierno;
		
		console.log("en invierno viajan = "+promedioPersonasPorInvierno+
		" personas en promedio");
	}


}
