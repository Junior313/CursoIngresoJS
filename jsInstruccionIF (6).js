function Mostrar()
{
//tomo la edad  
var edad;

edad=document.getElementById('edad').value

if(edad>18)
{
	alert("Mayor de edad");
}
if (edad>12 && edad<18)
{
	alert("Adolescente");
}
if (edad<13)
{
	alert("Menor de edad");
}
}//FIN DE LA FUNCIÓN