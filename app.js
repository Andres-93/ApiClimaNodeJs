
const lugar = require('./lugar/lugar');

const argv = require('yargs').options({
    direccion:{
        alias: 'd',
        desc: 'Direcciopn de la ciudad pàra obtener el clima',
        demand: true
    }
}).argv;




lugar.getLugar(argv.direccion);