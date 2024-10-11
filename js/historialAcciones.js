//Prueba de funcion para registrar acciones del usario

// Deberia usar una ciclo

function registroDeAcciones (){
    if( nombreGuardado !== "") {
        areaHistoria.textContent = `se eligio ${nombreGuardado} como nombre de colonia` 
    }
}

const areaHistoria = document.getElementById ("areaHistoria")

let nombreGuardado = ""

function iniciarColonia(){
    nombreGuardado = document.getElementById("nombreElegidoPorUsario").value;
    if(nombreGuardado === ""){
        alertaNombreInvalido();
    } else{
        mostrarNombre.textContent = nombreGuardado;


        };
    }
botonGuardarNombre.addEventListener("click", iniciarColonia)