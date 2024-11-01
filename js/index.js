const mostrarNombre = document.getElementById("expositorDeNombre")
const botonConfirmar = document.getElementById("botonConfirmar");
const botonCancelar = document.getElementById ("botonCancelar");
const botonGuardar = document.getElementById ("guardarProgreso");
const botonReinicar = document.getElementById ("reiniciarProgreso");
const mensaje = document.getElementById("mensajeCuadroAcciones");
const cuadro = document.getElementById("cuadroAcciones");
const fondo = document.getElementById("fondoOscuro");
const climaDiv = document.getElementById("clima");

let nombreGuardado = ""

let recursos = {
    agua: 10,
    comida: 10,
    madera: 20,
    piedra: 20,
};

let edificios = {
    ayuntamiento: 1,
    casas: 3,
    almacen: 1,
};

let colonos = [
    {nombre:"Augusto", edad:"26", habilidad:"Constructor"},
    {nombre:"Miqueas", edad:"24", habilidad:"Recolector"},
    {nombre:"Abril", edad:"22", habilidad:"Cientifica"},
] 

let energia = 50;


// funcion para los cuadros de acciones / notifiaciones.
function cuadroAcciones (){
    cuadro.style.display = "block";
    fondo.style.display = "block";
    botonConfirmar.style.display = "none";
    botonCancelar.textContent = "Cerrar";
}

// funcion para el tutorial 
function tutorial (){
    if (!localStorage.getItem("tutorialVisto")){
        const mensajeTutorial = document.getElementById("mensajeCuadroAccionesTutorial");
        const cuadroTutorial = document.getElementById("cuadroAccionesTutorial");
        const botonConfirmarTutorial = document.getElementById("botonConfirmarTutorial");
        cuadroTutorial.style.display = "block";
        fondo.style.display = "block";
        mensajeTutorial.textContent = "¡Saludos, noble líder de colonias! Prepárate para emprender tu aventura. Te enseñaremos los secretos de este reino para que inicies tu reinado con buen augurio y sin tropiezos.";
        botonConfirmarTutorial.textContent = "COMENZEMOS";
        botonConfirmarTutorial.addEventListener("click", tutorialNombreColonia);
        function tutorialNombreColonia (){
            cuadroTutorial.style.display = "block";
            fondo.style.display = "block";
            mensajeTutorial.textContent = "Antes de embarcarte en esta aventura, elige un nombre memorable para tu colonia. Así, recibirás los recursos y colonos que te acompañarán en este nuevo capítulo y no olvides darle al boton de guardar."
            const nombreElegidoPorUsario = document.getElementById("nombreElegidoPorUsario")
            const botonGuardarNombre = document.getElementById("botonGuardarNombre")
            nombreElegidoPorUsario.style.zIndex = "1000";
            botonGuardarNombre.style.zIndex = "1000";
            botonConfirmarTutorial.textContent = "SIGAMOS"
            botonConfirmarTutorial.removeEventListener("click", tutorialNombreColonia);
            botonConfirmarTutorial.addEventListener("click", tutorialRecursos);
            function tutorialRecursos(){
                cuadroTutorial.style.display = "block";
                fondo.style.display = "block";
                mensajeTutorial.textContent = "Una vez que hayas elegido el nombre de tu colonia, a tu derecha podrás ver todos los recursos y edificios con los que comenzarás, así como la información de tus valientes colonos.";
                const recuadroRecursos = document.getElementById("recuadroRecursos");
                nombreElegidoPorUsario.style.zIndex = "0";
                botonGuardarNombre.style.zIndex = "0";
                recuadroRecursos.style.zIndex ="1000";
                botonConfirmarTutorial.textContent = "ENTENDIDO"
                botonConfirmarTutorial.removeEventListener("click", tutorialRecursos);
                botonConfirmarTutorial.addEventListener("click", tutorialAcciones);
                function tutorialAcciones(){
                    cuadroTutorial.style.display = "block";
                    fondo.style.display = "block";
                    mensajeTutorial.textContent ="A tu izquierda, encontrarás todas las acciones que podrás emprender para hacer prosperar tu colonia y no olvides que para cada accion necesitaras ciertos recursos y energia.";
                    const recuadroAcciones = document.getElementById ("recuadroAcciones");
                    recuadroRecursos.style.zIndex ="0";
                    recuadroAcciones.style.zIndex = "1000";
                    botonConfirmarTutorial.removeEventListener("click", tutorialAcciones);
                    botonConfirmarTutorial.addEventListener("click", tutorialAreaHistoria);
                    function tutorialAreaHistoria(){
                        cuadroTutorial.style.display = "block";
                        fondo.style.display = "block";
                        mensajeTutorial.textContent = "También es muy importante que, en el centro (en el recuadro blanco), se registrarán todas las acciones que vayas realizando, permitiéndote consultarlas en cualquier momento.";
                        recuadroAcciones.style.zIndex = "0";
                        areaHistoria.style.zIndex = "1000";
                        botonConfirmarTutorial.removeEventListener ("click", tutorialAreaHistoria);
                        botonConfirmarTutorial.addEventListener ("click", tutorialClima);
                        function tutorialClima (){
                            cuadroTutorial.style.display = "block";
                            fondo.style.display = "block";
                            mensajeTutorial.textContent = "En el recuadro ubicado en la parte superior derecha, podrás visualizar el clima actual de tu colonia. Esta información se actualiza en tiempo real, así que no pierdas de vista las condiciones climáticas, ya que pueden influir en algunas acciones que decidas llevar a cabo. (Ten en cuenta que esta funcionalidad aún está en desarrollo)."
                            areaHistoria.style.zIndex = "0";
                            climaDiv.style.zIndex ="1000";
                            botonConfirmarTutorial.removeEventListener ("click", tutorialClima);
                            botonConfirmarTutorial.addEventListener ("click", tutorialGuardarReiniciar);
                            function tutorialGuardarReiniciar(){
                                cuadroTutorial.style.display = "block";
                                fondo.style.display = "block";
                                mensajeTutorial.textContent ="Y por último, recuerda que, antes de partir, ¡siempre debes guardar tu colonia utilizando el botón de 'Guardar Progreso' que se encuentra abajo! Así, cuando regreses, todo estará tal como lo dejaste. Además, en la parte superior derecha encontrarás un botón para reiniciar tu colonia desde cero, en caso de que no todo saliera como esperabas.";
                                climaDiv.style.zIndex ="0"
                                botonGuardar.style.zIndex = "1000";
                                botonReinicar.style.zIndex = "1000";
                                botonConfirmarTutorial.removeEventListener ("click", tutorialGuardarReiniciar)
                                botonConfirmarTutorial.addEventListener ("click", finTutorial);
                                function finTutorial(){
                                    cuadroTutorial.style.display = "block";
                                    fondo.style.display = "block";
                                    mensajeTutorial.textContent = "¡Bien hecho! Has terminado el tutorial y ahora estás listo para empezar a gestionar tu colonia. ¡Buena suerte y disfruta de tu aventura!";
                                    botonGuardar.style.zIndex = "0";
                                    botonReinicar.style.zIndex = "0";
                                    botonConfirmarTutorial.textContent = "FINALIZAR LA LECCION";
                                    botonConfirmarTutorial.removeEventListener ("click", finTutorial)
                                    botonConfirmarTutorial.addEventListener ("click",cerrarTutorial);
                                    localStorage.setItem("tutorialVisto", "true");
                                    function cerrarTutorial(){
                                        cuadroTutorial.style.display = "none";
                                        fondo.style.display = "none";
                                        botonConfirmarTutorial.removeEventListener("click", cerrarTutorial)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}  
tutorial();

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
    localStorage.removeItem("tutorialVisto");
    localStorage.removeItem("estadoActual"); 
    nombreGuardado = "";  
    areaHistoria.textContent = "";
    document.getElementById("nombreElegidoPorUsario").value="";
    document.getElementById("nombreElegidoPorUsario").placeholder = "Nombre de colonia";
    recursos = {
        agua: null,
        comida: null,
        madera: null,
        piedra: null,
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
    document.getElementById("madera").textContent = recursos.madera;
    document.getElementById("piedra").textContent = recursos.piedra;
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
        document.getElementById("madera").textContent = recursos.madera;
        document.getElementById("piedra").textContent = recursos.piedra;
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

//Funcion para que el usario guarde partida
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
            madera: 20,
            piedra: 20,
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
        document.getElementById("madera").textContent = recursos.madera;
        document.getElementById("piedra").textContent = recursos.piedra;
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
function actualizarRecursos(madera, piedra, agua, comida, energiaGastada) {
    recursos.madera -= madera;
    recursos.piedra -= piedra;
    recursos.agua -= agua;
    recursos.comida -= comida;
    energia -= energiaGastada;

    document.getElementById("madera").textContent = recursos.madera;
    document.getElementById("piedra").textContent = recursos.piedra;
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
                if(recursos.madera >=10 && recursos.piedra >=5 && recursos.agua >=2 && recursos.comida >=2 && energia>=10) {
                    actualizarRecursos(10,5,2,1,10)
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
                if(recursos.madera >=15 && recursos.piedra >=10 && recursos.agua >=3 && recursos.comida >=3 && energia>=15){
                    actualizarRecursos (15,10,3,3,15)
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
            actualizarRecursos(0,0,1,1,2)
            document.getElementById("madera").textContent = recursos.madera +=5;
            document.getElementById("piedra").textContent = recursos.piedra +=3;
            cuadroAcciones();
            mensaje.textContent = "Felicidades tus materiales para construir aumentaron en 3 unidades";
            areaHistoria.textContent = "- Tras una expedición por los alrededores, tu colono a logrado recolectar 5 valiosas unidades de madera y 3 de piedra. ¡El esfuerzo ha valido la pena!\n" + areaHistoria.textContent;
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
    mensaje.innerHTML =`
<p>¿Todo listo para salir a buscar materiales? vas a gastar :</p>
<ul>
    <li>- 1 de comida</li>
    <li>- 1 de agua</li>
    <li>- 2 de energía</li>
</ul>
<br>
<p> para recolectar 5 unidades de madera y 3 unidades de pierda </p>`;
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
            actualizarRecursos(0,0,0,1,2)
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
            actualizarRecursos(0,0,1,0,2);
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
            actualizarRecursos(0,0,4,4,0);
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

// Llamada a la API de clima
const obtenerDatosClimas = async () => {
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=-31.4173391&lon=-64.183319&appid=9b2f9ee46630bfbb8e21919b20bcd495&lang=es");
    const datosClima = await response.json();

     // Convertir temperatura de Kelvin a Celsius
    const temperaturaCelsius = (datosClima.main.temp - 273.15).toFixed(2);
    
    climaDiv.innerHTML = `
            <h2>Clima en Tu Colonia: ¿Qué Esperar Hoy?</h2>
            <p>Temperatura: ${temperaturaCelsius} °C</p>
            <p>Precipitaciones: ${datosClima.rain ? (datosClima.rain['1h'] || 0) : 0} mm</p>
            <p>Condición: ${datosClima.weather[0].description}</p>
            <p>Humedad: ${datosClima.main.humidity}%</p>
            <p>Viento: ${datosClima.wind.speed} m/s</p>
    `;
}
obtenerDatosClimas();

