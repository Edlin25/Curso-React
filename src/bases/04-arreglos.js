//Arreglos en JS

// const arrglo = new Array(100);
const arreglo = [1,2,3,4];
//No se recomienda usar push para agregar datos porque modifica el objeto principal, mejor usar el operador spread.
// arreglo.push(1)
// arreglo.push(2)
// arreglo.push(3)
// arreglo.push(4)


let arreglo2=[...arreglo, 5];

const arreglo3= arreglo2.map(function(numero){
    return numero * 2;
})
console.log(arreglo)
console.log(arreglo2)
console.log(arreglo3)

