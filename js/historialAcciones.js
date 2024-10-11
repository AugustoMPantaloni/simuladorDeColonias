function registroDeAcciones (){
    if( nombreGuardado !== "") {
        areaHistoria.textContent = `se eligio ${nombreGuardado.value} como nombre de colonia` 
    }
}

const areaHistoria = document.getElementById ("areaHistoria")

