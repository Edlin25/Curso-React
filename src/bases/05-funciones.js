//Funciones en JS


const saludar = function (nombre){
    return `Hola, ${nombre}`
}

const saludar2 = (nombre)=>{
    return `Hola, ${nombre}`
}

const saludar3 = (nombre)=>`Hola, ${nombre}`;
const saludar4 = ()=>`Hola mundo`;

console.log(saludar2('Edlin'))
console.log(saludar3('Paola'))
console.log(saludar4())

const getUser= () => ({
        uid:'1234',
        username:'EdlinSalas123'
    
})

const user= getUser();
console.log(user);

//Tarea
//1. Transformar a función de flecha
//2. Tiene que retornar un objeto implícito
//4. Pruebas

function getUsuarioActivo(nombre){
    return{
        uid:'AB324',
        username:nombre
    }
};

const getUsuarioActivo2= (nombre)=>({
    uid:'ABC123',
    username:nombre
})

const usuarioActivo=getUsuarioActivo('Edlin');

console.log(usuarioActivo);
console.log(getUsuarioActivo2('Eliel'));
