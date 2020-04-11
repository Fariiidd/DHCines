const sucursales = require("../data/theaters");

const totalDeSalas = sucursales.length;

const listadoDeSalas = sucursales.sort(function(movie1, movie2) {
    if (movie1 > movie2) {
        return 1;
    }
    if (movie1 < movie2) {
        return -1;
    }
    return 0;
});

const datosSucursales = {
    "Titulo": "Nuestras salas",
    "Total de salas": totalDeSalas,
    "datos de las salas": listadoDeSalas
};

module.exports = datosSucursales;