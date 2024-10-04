const mostrarNombre = document.getElementById("expositorDeNombre")

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

function iniciarColonia(){
    let nombreGuardado = document.getElementById("nombreElegidoPorUsario").value;

    if(nombreGuardado === ""){
        alert ("Debes elejir un nombre para tu colonia")
    } else{
        mostrarNombre.textContent = nombreGuardado;

        alert(`🎊 ¡Felicidades! 🎊
En el recuadro de la derecha, ¡explora todos los recursos que tendrás a tu disposición para gestionar tu colonia! 🌟💪`)
            document.getElementById("agua").textContent = recursos.agua;
            document.getElementById("comida").textContent = recursos.comida;
            document.getElementById("materiales").textContent = recursos.materiales;
            document.getElementById("energia").textContent = energia;

            document.getElementById("ayuntamiento").textContent = edificios.ayuntamiento;
            document.getElementById("casas").textContent = edificios.casas;
            document.getElementById("almacenes").textContent = edificios.almacen;

            const tablaColon = document.getElementById("tablaColon")
            colonos.forEach(colono => {
                let fila = document.createElement("tr");
                fila.innerHTML = `<td>${colono.nombre}</td><td>${colono.edad}</td><td>${colono.habilidad}</td>`;
                tablaColon.appendChild(fila);
            });
    }
}

botonGuardarNombre.addEventListener("click", iniciarColonia)

// Se crearon las funciones para las acciones que puede realizar el usuario para gestionar la colonia
function construirEdificio(){
    let buscarConstructor = colonos.find(buscar => buscar.habilidad === "Constructor");
    if(!buscarConstructor){
        alert("Ahora no tienes ningun constructor disponible, espera que alguno se desocupe o busca construir mas casas para reclutar mas colonos.")
    return;
}
    let opcion = prompt("¿Que edificio quieres construir?\nPara cualquier construccion necesitas al menos 1 colono con la habilidad `constuctor` que este desocupado\n1.Casa (Requiere 10 materiales, 2 agua, 2 comida, 10 energia)\n2.almacen (requiere 15 materiales, 3 agua, 3 comida, 15 energia")
    switch(opcion){
        case "1":
            if(recursos.materiales >=10 && recursos.agua >=2 && recursos.comida >=2 && energia>=10){
                recursos.materiales -= 10;
                recursos.agua -= 2;
                recursos.comida -= 2;
                energia -=10;
                edificios.casas += 1;
                alert("felicidades tu colonia aumento sus edificios con 1 casa, ahora tienes mas espacio para colonos")
            } else{
                alert("No tienes los recursos o energia suficientes, sal a buscar recursos o descansa 1 dia para recuperar energia")
            }
                break;
        case "2":
            if(recursos.materiales >=15 && recursos.agua >=3 && recursos.comida >=3 && energia>=15){
                recursos.materiales -= 15;
                recursos.agua -= 3;
                recursos.comida -= 3;
                energia -=15;
                edificios.almacen += 1;
                alert("Felicidades ahora tu colonia tiene un almacen mas, puede guardar mas recursos")
            } else{
                alert("No tienen los recursos o energia suficientes, sal a buscar recursos o descansa 1 dia para recuperar energia")
            }
                break;
            default:
                alert("No es una opcion valida, escribe el nombre del edificio que quieras consturir")
                break;
    }
}

function buscarMateriales(){
    let buscarRecolector = colonos.find(buscar => buscar.habilidad === "Recolector")
    if(!buscarRecolector){
        alert("Ahora no tienes ningun recolector disponible, espera que alguno se desocupe o busca construir mas casas para reclutar mas colonos.")
        return;
    }
    let opcion = prompt ("¿Todo listo para salir a buscar materiales para construir? \n1.Si(Requiere 1 comida, 1 agua, 2 energia)\n2.No")
    switch(opcion){
        case "1":
            if(recursos.comida >=1 && recursos.agua >=1 && energia >=2){
                recursos.comida -=1;
                recursos.agua -=1;
                recursos.energia -=2;
                recursos.materiales +=3;
                alert("Felicidades tus materiales para construir aumentaron en 3 unidades")
            } else{
                alert("Tu comida, agua o energia no es suficiente")
            }
            break;
            case "2":
                alert("No has salido a buscar materiales, recuerda que los necesitas para construir edificios");
                break;
            default:
                alert("Eso no es una opcion valida, prueba de nuevo");
                break;
    }
}

function buscarAgua(){
    let buscarRecolector = colonos.find(buscar => buscar.habilidad === "Recolector")
    if(!buscarRecolector){
        alert("Ahora no tienes ningun recolector disponible, espera que alguno se desocupe o busca construir mas casas para reclutar mas colonos.")
        return;
    }
    let opcion = prompt("¿Todo listo para salir a buscar agua?\n1.Si(Requiere 1 comida, 2 energia)\n2.No")
    switch(opcion){
        case "1":
            if(recursos.comida >=1 && energia >=2){
                recursos.comida -= 1;
                energia -=2;
                recursos.agua +=3;
                alert("Felicidades tu agua aumento en 3 y se guardo en el almacen");
            }else{
                alert("Tu comida o energia no es suficiente")
            }
            break;
        case"2":
        alert("No has salido a buscar agua, recuerda que la misma no baje a 0");
            break;
        default:
            alert("Eso no es una opcion valida, prueba de nuevo");
            break;
    }
}

function buscarComida(){
    let buscarRecolector = colonos.find(buscar => buscar.habilidad === "Recolector")
    if(!buscarRecolector){
        alert("Ahora no tienes ningun recolector disponible, espera que alguno se desocupe o busca construir mas casas para reclutar mas colonos.")
        return;
    }
    let opcion = prompt("¿Todo listo para salir a buscar comida?\n1.Si(Requiere 1 agua, 2 energia)\n2.No")
    switch(opcion){
        case "1":
            if(recursos.agua >=1 && energia >=2){
                recursos.agua -= 1;
                energia -=2;
                recursos.comida +=3;
                alert("Felicidades tu comida aumento en 3 y se guardo en el almacen");
            } else{
                alert("Tu agua o energia no es suficiente")
            }
            break;
        case"2":
        alert("No has salido a buscar comida, recuerda que la misma no baje a 0")
            break;
        default:
            alert("Eso no es una opcion valida, prueba de nuevo")
            break;
    }
}

function dormir(){
    let opcion = prompt("¿Estas seguro que quieres dormir? esto hara que recuperes energia pero gastaras recursos\n1.Dormir\n2.Seguir trabajando")
    switch(opcion){
        case "1":
            if(recursos.comida>=3 && recursos.agua>=3){
                recursos.comida-=3;
                recursos.agua-=3;
                energia +=5;
                if (energia > 50) { 
                    energia = 50;
                }
                alert("Tu colonia descanso durante la noche y recuperaste 5 de energia");
            }else{
                alert("Tu comida o agua no es suficiente para que tus colonos puedan descansar, tienes que salir a buscar recursos");
            }
            break;
        case "2":
            alert("Decidiste seguir trabajando, recuerda que la energia no baje a 0");
            break;
        default:
            alert("Eso no es una opcion valida, prueba de nuevo");
            break;
    }
}

// Se creo la funcion para que el usario pueda ver que opciones tiene para interactuar con su colonia
function accionesUsuario() {
    while (true) {
        let eleccion = prompt("¿Cómo te gustaría que tu colonia progrese ahora?\n1. Construir un edificio.\n2. Salir a buscar materiales.\n3. Salir a buscar comida.\n4. Salir a buscar agua.\n5. Dormir\n6. Ver el estado actual de tu colonia\n7. Terminar simulacion");
        
        switch (eleccion) {
            case "1":
                construirEdificio();
                break;
            case "2":
                buscarMateriales();
                break;    
            case "3":
                buscarComida();
                break;
            case "4":
                buscarAgua();
                break;
            case "5":
                dormir();    
                break;
            case "6":
                alert(`El nombre de tu colonia es: ${nombreColonia}\n` +
                    `---------------------------\n` +
                    `Tienes estos recursos:\nAgua: ${recursos.agua}\nComida: ${recursos.comida}\nMateriales: ${recursos.materiales}\n` +
                    `---------------------------\n` +
                    `Tienes estos edificios:\nAyuntamiento: ${edificios.ayuntamiento}\nCasas: ${edificios.casas}\nAlmacén: ${edificios.almacen}\n` +
                    `---------------------------\n` +
                    `Estos son tus colonos:\n${colonos.map(colono => `Nombre: ${colono.nombre}, Edad: ${colono.edad}, Habilidad: ${colono.habilidad}`).join('\n')}\n` +
                    `---------------------------\n` +
                    `Tienes ${energia} de energía.`);
                break;
            case "7":
                alert("Gracias por probar el simulador, la idea es ir agreandole cosas poco a poco :D");
                return;
            default:
                alert("No elegiste ninguna opción válida, vuelve a intentarlo.");
                break;
        }
    }
}
