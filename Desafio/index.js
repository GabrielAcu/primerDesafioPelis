const pelis = require("./pelis");

const args = process.argv.slice(2);

if (args.length === 0) {
  console.table(pelis.obtenerTodasLasPelis());
}

if (args.includes("--sort")) {
  const propiedad = args[args.indexOf("--sort") + 1];
  const pelisOrdenadas = pelis.obtenerTodasLasPelis().sort((a, b) => {
    if (a[propiedad] < b[propiedad]) return -1;
    if (a[propiedad] > b[propiedad]) return 1;
    return 0;
  });
  console.table(pelisOrdenadas);
}

if (args.includes("--search")) {
  const indiceTexto = args.indexOf("--search") + 1;
  if (indiceTexto < args.length) {
    const texto = args[indiceTexto];
    const pelisEncontradas = pelis.obtenerTodasLasPelis().filter((peli) => {
      if (peli.titulo) {
        return peli.titulo.toLowerCase().includes(texto.toLowerCase());
      }
      return false;
    });
    console.table(pelisEncontradas);
  } else {
    console.log("No se proporcionó texto para buscar");
  }
}

if (args.includes("--tag")) {
  const tag = args[args.indexOf("--tag") + 1];
  const pelisConTag = pelis
    .obtenerTodasLasPelis()
    .filter((peli) => peli.tags.includes(tag));
  console.table(pelisConTag);
}
