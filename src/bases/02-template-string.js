const nombre ='Edlin';
const apellido= 'Salas';

// const nombreCompleto = nombre+' '+apellido;
const nombreCompleto = `Hola ${nombre}`
console.log(nombreCompleto)


function getSaludo(nombre){
    return 'Hola ' + nombre;
}
console.log(`Este es un texto ${getSaludo(nombre)}`)