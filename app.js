const { crearArchivo } = require('./helpers/multiplicar.js');
const argv = require('./config/yargs.js');


console.clear();

crearArchivo( argv.b, argv.h, argv.l )
    .then( nombre => console.log(nombre, 'creada') )
    .catch( err => console.log(err) );