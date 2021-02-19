const { number } = require('yargs');

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true
    })
    .option('l', {
        alias: 'listar',
        default: false,
        type: 'boolean',
        demandOption: 'false'
    })
    .option('h',{
        alias:'hasta',
        type:'number',
        demandOption:true
    })
    .check((argv, options) => {

        if (isNaN(argv.b)) {
            throw 'La base debe ser un número';
        }else if(isNaN(argv.h)){
            throw 'El límite debe ser un número';
        }else {
            return true;
        }
    })
    .argv;
   
    module.exports=argv;