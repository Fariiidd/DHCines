const peliculas = require("../data/movies");

movieslength = peliculas.length;


const datosDeCartelera = {
    "Titulo": 'En cartelera',
    "Total de Peliculas": movieslength,
    "Reseña de Peliculas": peliculas.overview
};

module.exports = datosDeCartelera;
reseñasDePeliculas = peliculas.overview;