const persona={
    nombre:'Edlin',
    apellido: 'Salas',
    edad:21,
    direccion:{
        ciudad:'New York',
        zip: 14.2345
    }
};

// console.table(persona)
const persona2={...persona}
persona2.nombre='Peter'

console.log(persona)
console.log(persona2)