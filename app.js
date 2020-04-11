const http = require("http");
const moduloHome = require("./src/home");
const moduloCartelera = require("./src/En-Cartelera");
const moduloMasVotadas = require("./src/mas-votadas");
const moduloSucursales = require("./src/sucursales");
const moduloContactos = require("./src/contacto");
const moduloPreguntas = require("./src/preguntas-frecuntes");


// Servidor
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });

    // Route System
    switch (req.url) {
        // Home
        case '/':
            res.end(JSON.stringify(moduloHome));
            break;
            // En cartelera
        case '/en-cartelera':
            res.end(JSON.stringify(moduloCartelera));
            break;
        case '/mas-votadas':
            res.end(JSON.stringify(moduloMasVotadas));
            break;
        case '/sucursales':
            res.end(JSON.stringify(moduloSucursales));
            break;
        case '/contacto':
            res.end(JSON.stringify(moduloContactos));
            break;
        case '/preguntas-frecuentes':
            res.end(JSON.stringify(moduloPreguntas));
            break;
        default:
            res.end('404 not found')
    }
}).listen(3030, 'localhost', () => console.log('Server running in 3030 port'));