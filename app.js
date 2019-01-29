const { argv } = require('./config/yargs');
const { getUbicacion } = require('./lugar/lugar');
const { getClima } = require('./clima/clima');

let getInfo = async(direccion) => {

    try {
        let coordenadas = await getUbicacion(argv.direccion);
        let temperatura = await getClima(coordenadas.lat, coordenadas.lng);

        return `La T° en ${coordenadas.direccion} es de ${temperatura.now} °C`;
    } catch (e) {
        return `No se pudo determinar el clima en ${direccion}`
    }
}

getInfo(argv.direccion)
    .then(resp => {
        console.log(resp);
    })
    .catch(e => console.log(e));