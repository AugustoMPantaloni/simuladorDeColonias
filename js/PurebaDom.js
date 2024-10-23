const mostrarNombre = document.getElementById("expositorDeNombre")
const botonConfirmar = document.getElementById("botonConfirmar");
const botonCancelar = document.getElementById ("botonCancelar");
const botonGuardar = document.getElementById ("guardarProgreso");
const botonReinicar = document.getElementById ("reiniciarProgreso");
const mensaje = document.getElementById("mensajeCuadroAcciones");
const cuadro = document.getElementById("cuadroAcciones");
const fondo = document.getElementById("fondoOscuro");


let nombreGuardado = ""

let recursos = {
    agua: 10,
    comida: 10,
    materiales: 30
};

let edificios = {
    ayuntamiento: 1,
    casas: 3,
    almacen: 1,
};

let colonos =[
    {nombre:"Augusto", edad:"26", habilidad:"Constructor"},
    {nombre:"Miqueas", edad:"24", habilidad:"Recolector"},
    {nombre:"Abril", edad:"22", habilidad:"Cientifica"},
] 

let energia = 50;


// funcion para que el usario cierre los cuadros de acciones / notifiaciones.
function cuadroAcciones (){
    cuadro.style.display = "block";
    fondo.style.display = "block";
    botonConfirmar.style.display = "none";
    botonCancelar.textContent = "Cerrar";
}

// Funciones para que aparezca una alerta luego de que el usario ingresara un nombre de colonia valido o invalido
function alertaNombreValido() {
    const mensajeAlerta = document.getElementById("mensajeAlerta");
    const alertaDiv = document.getElementById("alertaNombreValido");
    const botonCerrar = document.getElementById("cerrarAlerta");

    // Contenido de la alerta
    mensajeAlerta.textContent = `🎊 ¡Felicidades! 🎊
    En el recuadro de la derecha, ¡explora todos los recursos que tendrás a tu disposición para gestionar tu colonia! 🌟💪`;

    // Mostrar la alerta y el botón de cerrar
    alertaDiv.style.display = "block"; 
    botonCerrar.style.display = "block"; 

    // Función para cerrar la alerta
    botonCerrar.onclick = function() {
        alertaDiv.style.display = "none"; 
        botonCerrar.style.display = "none"; 
    };
}
function alertaNombreInvalido() {
    const mensajeAlerta = document.getElementById("mensajeAlertaInvalida");
    const alertaDiv = document.getElementById("alertaNombreInvalido");
    const botonCerrar = document.getElementById("cerrarAlertaInvalida");

    // Contenido de la alerta
    mensajeAlerta.textContent = ("Debes elejir un nombre para tu colonia")

    // Mostrar la alerta y el botón de cerrar
    alertaDiv.style.display = "block"; 
    botonCerrar.style.display = "block"; 

    // Función para cerrar la alerta
    botonCerrar.onclick = function() {
        alertaDiv.style.display = "none"; 
        botonCerrar.style.display = "none"; 
    };
}

// Funcion para reiniciar partida
function reiniciarPartida() {
    localStorage.removeItem("estadoActual"); 
    nombreGuardado = "";  
    areaHistoria.textContent = "";
    document.getElementById("nombreElegidoPorUsario").value="";
    document.getElementById("nombreElegidoPorUsario").placeholder = "Nombre de colonia";
    recursos = {
        agua: null,
        comida: null,
        materiales: null,
    };
    edificios = {
        ayuntamiento: null,
        casas: null,
        almacen: null,
    };
    colonos = [];  
    energia = null; 

    mostrarNombre.textContent = "";
    document.getElementById("agua").textContent = recursos.agua;
    document.getElementById("comida").textContent = recursos.comida;
    document.getElementById("materiales").textContent = recursos.materiales;
    document.getElementById("energia").textContent = energia;
    document.getElementById("ayuntamiento").textContent = edificios.ayuntamiento;
    document.getElementById("casas").textContent = edificios.casas;
    document.getElementById("almacenes").textContent = edificios.almacen

    const tablaColon = document.getElementById("tablaColon");
    tablaColon.innerHTML = "";  
    function cancelarAccionOCerrar(){
        cuadro.style.display = "none";
        fondo.style.display = "none";
}
    cuadroAcciones();
    mensaje.textContent = "La partida ha sido reiniciada.";
    botonCancelar.addEventListener("click" , cancelarAccionOCerrar )
}
botonReinicar.addEventListener("click",reiniciarPartida);

// Funcion para cargar partida 
function cargarPartida (){
    const coloniaGuardada = localStorage.getItem("estadoActual");
    if(coloniaGuardada){
        const estadoActual = JSON.parse(coloniaGuardada);

        nombreGuardado = estadoActual.nombre;
        recursos = estadoActual.recursos;
        edificios = estadoActual.edificios;
        colonos = estadoActual.colonos;
        areaHistoria.textContent = estadoActual.historia;

        mostrarNombre.textContent = nombreGuardado;
        document.getElementById("agua").textContent = recursos.agua;
        document.getElementById("comida").textContent = recursos.comida;
        document.getElementById("materiales").textContent = recursos.materiales;
        document.getElementById("energia").textContent = energia;
        document.getElementById("ayuntamiento").textContent = edificios.ayuntamiento;
        document.getElementById("casas").textContent = edificios.casas;
        document.getElementById("almacenes").textContent = edificios.almacen;

        const tablaColon = document.getElementById("tablaColon");
        tablaColon.innerHTML = ""; 

        colonos.forEach(colono => {
            let fila = document.createElement("tr");
            fila.innerHTML = `<td>${colono.nombre}</td><td>${colono.edad}</td><td>${colono.habilidad}</td>`;
            tablaColon.appendChild(fila);
        });
        
    }
}
document.addEventListener("DOMContentLoaded", () => {
    cargarPartida(); 
});

//Funcion para que el usario guarde el estado actual de su colonia
function guardarPartida(){
    const estadoActual = {
        nombre: nombreGuardado,
        recursos : recursos,
        edificios: edificios,
        colonos: colonos,
        historia: areaHistoria.textContent,
    };

    function cancelarAccionOCerrar(){
        cuadro.style.display = "none";
        fondo.style.display = "none";
}

    localStorage.setItem ("estadoActual", JSON.stringify(estadoActual));

    cuadroAcciones();
    mensaje.textContent = "El progreso de tu partida se guardo";
    botonCancelar.addEventListener("click" , cancelarAccionOCerrar );
}
botonGuardar.addEventListener("click", guardarPartida);

// funcion que iniciar toda la simulacion 
function iniciarColonia() {
    nombreGuardado = document.getElementById("nombreElegidoPorUsario").value;

    if (nombreGuardado === "") {
        alertaNombreInvalido();
    } else {
        alertaNombreValido();
        mostrarNombre.textContent = nombreGuardado;
        areaHistoria.textContent = `- Felicitaciones, tu colonia ahora se llama ${nombreGuardado}. Este nombre marcará el comienzo de una nueva era. ¡Que los logros estén a la altura del título!`


        recursos = {
            agua: 10,
            comida: 10,
            materiales: 30
        };
        edificios = {
            ayuntamiento: 1,
            casas: 3,
            almacen: 1
        };
        colonos = [
            { nombre: "Augusto", edad: "26", habilidad: "Constructor" },
            { nombre: "Miqueas", edad: "24", habilidad: "Recolector" },
            { nombre: "Abril", edad: "22", habilidad: "Científica" }
        ];
        energia = 50;

        document.getElementById("agua").textContent = recursos.agua;
        document.getElementById("comida").textContent = recursos.comida;
        document.getElementById("materiales").textContent = recursos.materiales;
        document.getElementById("energia").textContent = energia;
        document.getElementById("ayuntamiento").textContent = edificios.ayuntamiento;
        document.getElementById("casas").textContent = edificios.casas;
        document.getElementById("almacenes").textContent = edificios.almacen;

        const tablaColon = document.getElementById("tablaColon");
        tablaColon.innerHTML = "";
        colonos.forEach(colono => {
            let fila = document.createElement("tr");
            fila.innerHTML = `<td>${colono.nombre}</td><td>${colono.edad}</td><td>${colono.habilidad}</td>`;
            tablaColon.appendChild(fila);
        });
    }
}
botonGuardarNombre.addEventListener("click", iniciarColonia);

//funcion para actualizar los recursos
function actualizarRecursos(material, agua, comida, energiaGastada) {
    recursos.materiales -= material;
    recursos.agua -= agua;
    recursos.comida -= comida;
    energia -= energiaGastada;

    document.getElementById("materiales").textContent = recursos.materiales;
    document.getElementById("agua").textContent = recursos.agua;
    document.getElementById("comida").textContent = recursos.comida;
    document.getElementById("energia").textContent = energia;
}

/*Funciones y variables para la construccion de edificios, falta agregar que se muestren cuantos recursos necesitas para construir x edificio, lo voy a hacer con un array*/
const botonConstruir = document.getElementById("botonConstruir");
const opcionesEdificios = document.getElementById("opcionesEdificios");
function construirEdificio(){
    const seleccion = opcionesEdificios.value;
    
    function confirmarConstruccion(){
        switch(seleccion){
            case "Casa":
                if(recursos.materiales >=10 && recursos.agua >=2 && recursos.comida >=2 && energia>=10) {
                    actualizarRecursos(10,2,2,10)
                    document.getElementById("casas").textContent = edificios.casas += 1;
                    cuadroAcciones();
                    mensaje.textContent = "felicidades tu colonia aumento sus edificios con 1 casa, ahora tienes mas espacio para colonos"
                    areaHistoria.textContent = "- ¡Enhorabuena! Una nueva casa ha sido construida, brindando refugio y seguridad a tus colonos. ¡Tu colonia sigue creciendo!\n" + areaHistoria.textContent;
                } else{
                    mensaje.textContent = "No tienes los recursos o energia suficientes"
                    cuadroAcciones();
                }
                    break;
            case "Almacen":
                if(recursos.materiales >=15 && recursos.agua >=3 && recursos.comida >=3 && energia>=15){
                    actualizarRecursos (15,3,3,15)
                    document.getElementById("almacenes").textContent = edificios.almacen += 1;
                    cuadroAcciones();
                    mensaje.textContent = "Felicidades ahora tu colonia tiene un almacen mas, puede guardar mas recursos"
                    areaHistoria.textContent = "- ¡Éxito! Tu nuevo almacén está listo, asegurando que tus recursos estén bien guardados y listos para usar. ¡La prosperidad de tu colonia avanza!\n" + areaHistoria.textContent;
                } else{
                    cuadroAcciones();
                    mensaje.textContent = "No tienes los recursos o energia suficientes"
                }
                    break;
        };
    }
    function cancelarAccionOCerrar(){
        cuadro.style.display = "none";
        fondo.style.display = "none";
        botonConfirmar.style.display = "block"; 
        botonCancelar.textContent = "Cancelar"; 
        botonConfirmar.removeEventListener("click", confirmarConstruccion);
        
}
    let buscarConstructor = colonos.find(buscar => buscar.habilidad === "Constructor");
    if(!buscarConstructor){
        cuadroAcciones();
        mensaje.textContent = "Ahora no tienes ningun constructor disponible, espera que alguno se desocupe o busca construir mas casas para reclutar mas colonos."
        botonCancelar.addEventListener("click" , cancelarAccionOCerrar);
    return;
    } else {
        cuadro.style.display = "block";
        fondo.style.display = "block";
        mensaje.textContent = `¿Seguro que quieres construir "${seleccion}"?`;
        botonConfirmar.addEventListener("click", confirmarConstruccion);
        botonCancelar.addEventListener("click" , cancelarAccionOCerrar);
}
};
botonConstruir.addEventListener("click",construirEdificio);

//Funciones y variables para la busqueda de materiales
const botonBuscarMateriales = document.getElementById("buscarMateriales");
function buscarMateriales(){
    function confirmarBuscarMateriales(){
        if(recursos.comida >=1 && recursos.agua >=1 && energia >=2){
            actualizarRecursos(0,1,1,2)
            document.getElementById("materiales").textContent = recursos.materiales +=3;
            cuadroAcciones();
            mensaje.textContent = "Felicidades tus materiales para construir aumentaron en 3 unidades";
            areaHistoria.textContent = "- Tras una expedición por los alrededores, tu colono a logrado recolectar 3 valiosas unidades de materiales. ¡El esfuerzo ha valido la pena!\n" + areaHistoria.textContent;
        } else{
            mensaje.textContent = "Tu comida, agua o energia no es suficiente";
            cuadroAcciones();
        }
    }
    function cancelarAccionOCerrar(){
        cuadro.style.display = "none";
        fondo.style.display = "none";
        botonConfirmar.style.display = "block"; 
        botonCancelar.textContent = "Cancelar"; 
        botonConfirmar.removeEventListener("click", confirmarBuscarMateriales);
        
}

let buscarRecolector = colonos.find(buscar => buscar.habilidad === "Recolector")
if(!buscarRecolector){
    cuadroAcciones();
    mensaje.textContent = "Ahora no tienes ningun recolector disponible, espera que alguno se desocupe o busca construir mas casas para reclutar mas colonos."
    botonCancelar.addEventListener("click" , cancelarAccionOCerrar);
return;
} else {
    cuadro.style.display = "block";
    fondo.style.display = "block";
    mensaje.textContent = "¿Todo listo para salir a buscar materiales para construir? necesital al menos 1 de comida, 1 de agua y 2 de energia para recolectar 3 de materiales";
    botonConfirmar.addEventListener("click", confirmarBuscarMateriales);
    botonCancelar.addEventListener("click" , cancelarAccionOCerrar);
}
};
botonBuscarMateriales.addEventListener("click", buscarMateriales)

//Funciones y variables para la busqueda de agua
const botonBuscarAgua = document.getElementById("buscarAgua");
function buscarAgua(){
    function confirmarBuscarAgua (){
        if(recursos.comida >=1 && recursos.agua >=1 && energia >=2){
            actualizarRecursos(0,0,1,2)
            document.getElementById("agua").textContent = recursos.agua +=3;
            cuadroAcciones();
            mensaje.textContent = "Felicidades tu agua aumento en 3 y se guardo en el almacen";
            areaHistoria.textContent = "- El agua es vida, y hoy tu búsqueda fue exitosa: tu colono regreso con 3 preciosas unidades de agua. ¡La colonia prospera gracias a tu liderazgo!\n" + areaHistoria.textContent;

        }else{
            cuadroAcciones();
            mensaje.textContent = "No tienes los recursos o energia suficiente para salir a buscar agua";
        }
    }
    function cancelarAccionOCerrar(){
        cuadro.style.display = "none";
        fondo.style.display = "none";
        botonConfirmar.style.display = "block"; 
        botonCancelar.textContent = "Cancelar"; 
        botonConfirmar.removeEventListener("click", confirmarBuscarAgua);
        
}
    let buscarRecolector = colonos.find(buscar => buscar.habilidad === "Recolector")
    if(!buscarRecolector){
        cuadroAcciones();
        mensaje.textContent = "Ahora no tienes ningun recolector disponible, espera que alguno se desocupe o busca construir mas casas para reclutar mas colonos."
        botonCancelar.addEventListener("click" , cancelarAccionOCerrar);
        return;
    } else {
        cuadro.style.display = "block";
        fondo.style.display = "block";
        mensaje.innerHTML = `
        <p>¿Todo listo para salir a buscar agua? vas a gastar :</p>
        <ul>
            <li>- 1 de comida</li>
            <li>- 2 de energía</li>
        </ul>
        <br>
        <p> para recolectar 3 unidades de agua </p>`;
        botonConfirmar.addEventListener("click", confirmarBuscarAgua);
        botonCancelar.addEventListener("click" , cancelarAccionOCerrar);
}
};
botonBuscarAgua.addEventListener("click", buscarAgua);

//Funciones y variables para la busqueda de comida
const botonBuscarComida = document.getElementById ("buscarComida");
function buscarComida(){
    function confirmarBuscarComida(){
        if(recursos.agua >=1 && energia >=2){
            actualizarRecursos(0,1,0,2);
            document.getElementById("comida").textContent = recursos.comida +=3;
            cuadroAcciones ();
            mensaje.textContent = "Felicidades tu comida aumento en 3 y se guardo en el almacen";
            areaHistoria.textContent = "- Te aventuraste en busca de comida y, después de un arduo esfuerzo, tu colono encontro 3 raciones. ¡Los demas colonos estarán agradecidos!\n" + areaHistoria.textContent;
        } else{
            cuadroAcciones ()
            mensaje.textContent = "Tu agua o energia no es suficiente";
        }
    }
    function cancelarAccionOCerrar(){
        cuadro.style.display = "none";
        fondo.style.display = "none";
        botonConfirmar.style.display = "block"; 
        botonCancelar.textContent = "Cancelar"; 
        botonConfirmar.removeEventListener("click", confirmarBuscarComida);
        
}
    let buscarRecolector = colonos.find(buscar => buscar.habilidad === "Recolector")
    if(!buscarRecolector){
        cuadroAcciones ();
        mensaje.textContent = "Ahora no tienes ningun recolector disponible, espera que alguno se desocupe o busca construir mas casas para reclutar mas colonos.";
        botonCancelar.addEventListener("click" , cancelarAccionOCerrar);
        return;
    } else {
        cuadro.style.display = "block";
        fondo.style.display = "block";
        mensaje.innerHTML = `
        <p>¿Todo listo para salir a buscar comida? vas a gastar :</p>
        <ul>
            <li>- 1 de agua</li>
            <li>- 2 de energía</li>
        </ul>
        <br>
        <p> para recolectar 3 unidades de comida </p>`;
        botonConfirmar.addEventListener("click", confirmarBuscarComida);
        botonCancelar.addEventListener("click" , cancelarAccionOCerrar);
    }
};
botonBuscarComida.addEventListener("click", buscarComida);
//Funciones y variables para la accion de dormir
const botonDormir = document.getElementById("dormir")
function dormir(){
    function confirmarDormir (){
        if(recursos.comida>=3 && recursos.agua>=3){
            actualizarRecursos(0,4,4,0);
            document.getElementById("energia").textContent = energia +=5;
            if (energia > 50) { 
                energia = 50;
            }
            cuadroAcciones();
            mensaje.textContent = "Tu colonia descanso durante la noche y recuperaste 5 de energia";
            areaHistoria.textContent = "- La colonia ha descansado plácidamente bajo las estrellas y recuperó 5 puntos de energía. ¡Están listos para afrontar un nuevo día de desafíos!\n" + areaHistoria.textContent;
        }else{
            cuadroAcciones();
            mensaje.textContent = "Tu comida o agua no es suficiente para que tus colonos puedan descansar, tienes que salir a buscar recursos";
        }
    }    
    function cancelarAccionOCerrar(){
        cuadro.style.display = "none";
        fondo.style.display = "none";
        botonConfirmar.style.display = "block"; 
        botonCancelar.textContent = "Cancelar"; 
        botonConfirmar.removeEventListener("click", confirmarDormir);
        
}
cuadro.style.display = "block";
fondo.style.display = "block";
mensaje.innerHTML = `
<p>¿Estas seguro que quiere dormir? vas a gastar :</p>
<ul>
    <li>- 4 de comida</li>
    <li>- 4 de agua</li>
</ul>
<br>
<p> para recuperar 5 de energia. </p>`;
botonConfirmar.addEventListener("click", confirmarDormir);
botonCancelar.addEventListener("click" , cancelarAccionOCerrar);
};
botonDormir.addEventListener("click", dormir);

