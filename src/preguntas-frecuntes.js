const preguntas = require("../data/faqs");

const totalDePreguntas = preguntas.length;

const objetoPregunta = {
    "Titulo": "Preguntas frecuentes",
    "Total de Preguntas": totalDePreguntas,
    "Listado de Preguntas": preguntas
};

module.exports = objetoPregunta;