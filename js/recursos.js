let recursos = {
    agua: 10,
    comida: 10,
    madera: 20,
    piedra: 20,
};


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

