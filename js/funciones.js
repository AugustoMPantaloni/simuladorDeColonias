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

        alert(`¡Felicidades! El nombre de tu colonia es ${nombreGuardado}.
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


document.getElementById("agua").textContent = recursos.agua;
document.getElementById("comida").textContent = recursos.comida;
document.getElementById("materiales").textContent = recursos.materiales;
document.getElementById("energia").textContent = recursos.energia;

