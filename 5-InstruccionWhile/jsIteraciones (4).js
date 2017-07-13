function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");

	

	while(numero>10 || numero<0)
	{
		alert("reingrese numero");
		numero=prompt("ingreseel numero");
	}
		alert("Correcto")


}//FIN DE LA FUNCIÓN