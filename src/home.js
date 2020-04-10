const peliculas = require("../data/movies");

const movieslength = peliculas.length;

const ordenandoMovies = peliculas.title;

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