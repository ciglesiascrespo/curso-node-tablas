const fs = require('fs');

const multiplicar =async (base,listar,limite) => {
    try {
    let salida = '';

    for (let i = 1; i <= limite; i++) {
        salida += `${base} x ${i} = ${base * i}\n`;
    }
    if(listar)console.log(salida);

    const nombreArchivo = `./salida/tabla-${base}.txt`;
    
        fs.writeFileSync(nombreArchivo, salida);
        return nombreArchivo;
    }catch(err){
        throw err;
    }
    

}

module.exports = {
    multiplicar
}