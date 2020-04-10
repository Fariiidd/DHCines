const peliculas = require("../data/movies");
const reseñas = require("../data/theaters");

movieslength = peliculas.length;

const datosDeCartelera = {
    "Titulo": 'En cartelera',
    "Total de Peliculas": movieslength,
    "Reseña de Peliculas": reseñas
};

module.exports = datosDeCartelera;