const {multiplicar} = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();


multiplicar(argv.b, argv.l, argv.h).then(nombreArchivo => {
    console.log(nombreArchivo, 'creado');
}).catch(err => console.log(err));