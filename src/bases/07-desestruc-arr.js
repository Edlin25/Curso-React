const personajes=['Rivers', 'Mariana', 'Roier', 'Aldo']
//Esto no es lo más eficiente
// console.log(personajes[0])
// console.log(personajes[1])
// console.log(personajes[2])
// console.log(personajes[3])

//Esto si

const [,,,p1] = personajes;
console.log(p1)

const retornaArreglo = ()=>{
    return ['ABC', 123];
}

const [letras, numeros] =retornaArreglo();
console.log(letras, numeros)

//Tarea
//1. El primer valor del arr se llamará nombre
//2. Se llamará setNombre

const state = (valor)=>{
    return [valor, ()=>{console.log('Hola mundo')}]
}

const [nombre, setNombre] = state('Goku');
console.log(nombre)
setNombre();