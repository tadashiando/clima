const direccion = {
    alias: 'd',
    desc: 'Dirección de la ciudad para obtener el clima',
    demand: true
}

const opt = {
    direccion
};

const argv = require('yargs')
    .options(opt)
    .help()
    .argv;

module.exports = {
    argv
}