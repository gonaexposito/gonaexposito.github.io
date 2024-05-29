function MostrarContenido(deporte,boton) {
        var boton = document.getElementById(boton);
        var verMas = document.getElementById(deporte);

        if (boton.innerHTML === "Ver más") {
            boton.innerHTML = "Ver menos";
            verMas.style.display = "block"; 
        } else {
            boton.innerHTML = "Ver más";
            verMas.style.display = "none"; 
        }
		}
		
		
function suscribirse(){
	var mail= document.getElementById("mail").value;
	var telefono= parseInt(document.getElementById("telefono").value);
	var nombre=document.getElementById("nombreApellidos")
	if (telefono>000000000 && telefono<999999999){
		if(mail!="" && nombre!=""){
			var and=confirm("Al pulsar aceptar, te suscribiras a nuestro newletter");
			if (and==true){
				alert("Enhorabuena, te has suscrito correctamente a nuestro newsletter");
			}else{
				alert("Vaya, parece que no vas a formas parte del mejor periodico deportivo del pais");
			}		
		}else{
			alert("Error al suscribirse, recuerda que los campos con asteriscos son obligatorios");
		}
	}else{
		alert("Error, el telefono movil no es un telefono valido, recuerda introducir un numero de 9 digitos sin prefijo");
	}
}

function atencionCliente(){
				alert("Ahora mismo estan todos los agentes ocupados, intentelo de nuevo mas tarde o mande un email con la incidencia al correo: \nincidenciasgonasport@proyectodual.es \n\nMuchas gracias, sentimos las molestias");
			}
			
function mostrarOculto(){
	var email=document.getElementById("email").value;
	var nombre=document.getElementById("nombre").value;
	var apt=document.getElementById("aptitudes").value;
	if (email!="" && nombre!="" && apt!=""){
		document.getElementById("oculto").style.display="flex";	
		document.getElementById("email").disabled=true;
		document.getElementById("nombre").disabled=true;
		document.getElementById("aptitudes").disabled=true;
	}else{
		alert("Rellene todos los campos porfavor");
	}
	
	}

