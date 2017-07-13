function Mostrar()
{

var sexo;
sexo = prompt("ingrese f ó m .");
while(sexo!="f" && sexo!="m")
{
	alert("Reingrese");
	sexo = prompt("ingrese f o m");
}
	alert("correcto");


document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN