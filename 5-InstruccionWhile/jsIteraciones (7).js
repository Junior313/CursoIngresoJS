function Mostrar()
{

	var contador=0;
	//var acumulador=0;
	//var respuesta='si';
	var nota;
	var notamayor=0;
	var notaminima=0;
	
while(contador<3)
{
	contador=contador+1;
	console.log("vueltas" + contador);
	nota=prompt("ingrese nota");
	if(nota>notamayor)
	{
		notamayor=nota;
		notaminima=nota;
	}
	else
	{
		if(nota>notaminima)
		{
			notaminima=nota;
		}
		if(nota<notamayor)
		{
			notamayor=nota;
		}
	}
		
}
		
}

console.log(notamayor);
console.log(notaminima);


//FIN DE LA FUNCIÓN