// Tiene que leer el archivo JSON y exponer funciones para interactuar
// con los datos.
const fs = require("fs");

const pelis = JSON.parse(fs.readFileSync("pelis.json", "utf8"));

function obtenerTodasLasPelis() {
  return pelis;
}

function filtrarPorTitulo(titulo) {
  return pelis.filter((peli) =>
    peli.title.toLowerCase().includes(titulo.toLowerCase())
  );
}

function filtrarPorGenero(genero) {
  return pelis.filter((peli) => peli.tags.includes(genero));
}

function obtenerPelisConCalificacionSuperiorA4() {
  return pelis.filter((peli) => peli.rating > 8);
}

module.exports = {
  obtenerTodasLasPelis,
  filtrarPorTitulo,
  filtrarPorGenero,
  obtenerPelisConCalificacionSuperiorA4,
};
