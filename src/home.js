const peliculas = require("../data/movies");

const movieslength = peliculas.length;

const ordenandoMovies = peliculas.sort(function(movie1, movie2) {
    if (movie1 > movie2) {
        return 1;
    }
    if (movie1 < movie2) {
        return -1;
    }
    return 0;
});

const datosDeHome = {
    "titulo": `Título​: ​Bienvenidos a DH Movies el mejor sitio para encontrar las mejores
    películas, incluso mucho mejor que Netflix, Cuevana y PopCorn​.`,
    "total de peliculas": movieslength,
    "listado De peliculas": ordenandoMovies,
    "Pie de Pagina": [
        "En Cartelera",
        "Más Votadas",
        "Sucursales",
        "Contacto",
        "Preguntas Frecuentes"
    ]
};

module.exports = datosDeHome;