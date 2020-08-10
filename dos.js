/*
2)De una compra debes ingresar una 
cantidad indeterminada de productos,

validando los siguientes datos:
marca, precio, peso en kilogramos,
 tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
*/function mostrar()
{

  var continuarIngresandoProductos;
  var marca;
  var precio;
  var pesoEnKilogramos;
  var tipoSolidoOLiquido;
  var acumuladorPesoTotalCompra=0;
  var MarcaMasCaraLiquidos;
  var precioMasCaroLiquidos;
  var pesoMasLivianoSolidos;
  var MarcaMasLivianoSolidos;
  var flagliquidoMascaro=true;
  var flagsolidoMasliviano=true;
  do{
   // validando los siguientes datos:
   // marca, 
  do{
    marca=prompt("ingrese la marca del producto");
  }while(marca!="string"&&marca == "");
   //precio,
  do{
    precio=prompt("ingrese el precio");
    precio= parseInt(precio);
  }while(isNaN(precio));
   //peso en kilogramos, 
  do{
    pesoEnKilogramos=prompt("ingrese el pesoEnKilogramos");
    pesoEnKilogramos= parseInt(pesoEnKilogramos);
  }while(isNaN(pesoEnKilogramos));
   //tipo(sólido o líquido)
   do{
    tipoSolidoOLiquido=prompt("ingre el tipo","'liquido' o 'solido'");
  }while(tipoSolidoOLiquido!="liquido" && tipoSolidoOLiquido!="solido");
   //a)informar el peso total de la compra.
    acumuladorPesoTotalCompra+=pesoEnKilogramos;
   //b)la marca del más caro de los líquidos
    
		if(tipoSolidoOLiquido=="liquido"){
			if(flagliquidoMascaro){
				precioMasCaroLiquidos=precio;
				MarcaMasCaraLiquidos=marca;
        flagliquidoMascaro=false;
        
			}else if(precioMasCaroLiquidos<precio){

				precioMasCaroLiquidos=precio;
				MarcaMasCaraLiquidos=marca;
			}

		}
   //c)la marca del más liviano de los sólidos

   if(tipoSolidoOLiquido=="solido"){
    if(flagsolidoMasliviano){
      pesoMasLivianoSolidos=pesoEnKilogramos;
      MarcaMasLivianoSolidos=marca;
      flagsolidoMasliviano=false;
    }else if(pesoMasLivianoSolidos>pesoEnKilogramos){
      pesoMasLivianoSolidos=MarcaMasLivianoSolidos;
      MarcaMasLivianoSolidos=marca;
    }

  }
    continuarIngresandoProductos= confirm("¿quiere ingresar un producto mas?");
  }while(continuarIngresandoProductos);

  //a)informar el peso total de la compra.
  console.log(acumuladorPesoTotalCompra);
  //b)la marca del más caro de los líquidos
  if(flagliquidoMascaro==false){
   console.log("el liquido mas caro vale = "+ precioMasCaroLiquidos);
   console.log(" su marca es "+MarcaMasCaraLiquidos);
  }
  // c)la marca del más liviano de los sólidos
  if(flagsolidoMasliviano==false){
    console.log("el solido mas liviano pesa = "+ pesoMasLivianoSolidos);
    console.log(" su marca es "+MarcaMasLivianoSolidos);
   }

}
