//  Desestructuración
// Asignación Desestructurante

const persona = {
    nombre:'Edlin',
    edad:21,
    clave:'Iroman'
}

// const {nombre, edad, clave} = persona;

// console.log(nombre)
// console.log(edad)
// console.log(clave)
// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);

const context = ({clave, nombre, edad, rango='capitan'})=>{
    // console.log(nombre)
    return {
        nombreClave:clave,
        anios:edad,
        latlng:{
            lat:12.33434,
            lng: 34.2323
        }

    }
}

const avenger= context(persona);

const {nombreClave, anios, latlng:{lat, lng}}= avenger
console.log(nombreClave)
console.log(anios)
console.log(lat)
console.log(lng)
