//Se crearon las varibales y objetos para trabajar con las funciones
let nombreColonia = "";

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

// se creo la funcion para iniciar la colonia y el usario pueda ver su informacion en consola
function iniciarColonia() {
    while(nombreColonia ===""){
        nombreColonia = prompt("elije el nombre de tu colonia")
        if(nombreColonia === ""){
            alert("Debes elejir un nombre para tu colonia")
        } else{
            alert(`¡Felicidades! El nombre de tu colonia es ${nombreColonia}.
                Empiezas con estos recursos:
                Agua: ${recursos.agua}
                Comida: ${recursos.comida}
                Materiales: ${recursos.materiales} 
                --------------------------- 
                Tienes estos edificios:
                Ayuntamiento: ${edificios.ayuntamiento}
                Casas: ${edificios.casas}
                Almacén: ${edificios.almacen}
                ---------------------------
                Estos son tus colonos:\n${colonos.map(colono =>`Nombre: ${colono.nombre}, Edad: ${colono.edad}, Habilidad: ${colono.habilidad}`).join('\n')}
                ---------------------------
                Tienes ${energia} de energía.`);
        }
    }
}
//Se llama a la funcion iniciarColonia para iniciar la simulacion
iniciarColonia();

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
        let eleccion = prompt("¿Cómo te gustaría que tu colonia progrese ahora?\n1. Construir un edificio.\n2. Salir a buscar comida.\n3. Salir a buscar agua.\n4. Dormir\n5. Ver el estado actual de tu colonia\n6. Terminar simulacion");
        
        switch (eleccion) {
            case "1":
                construirEdificio();
                break;
            case "2":
                buscarComida();
                break;
            case "3":
                buscarAgua();
                break;
            case "4":
                dormir();    
                break;
            case "5":
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
            case "6":
                alert("Gracias por probar el simulador, la idea es ir agreandole cosas poco a poco :D");
                return;
            default:
                alert("No elegiste ninguna opción válida, vuelve a intentarlo.");
                break;
        }
    }
}

//Se llama a la funcion accionesUsuario para que el usario pueda ver que acciones realizar
accionesUsuario();