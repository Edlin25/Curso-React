import { getHeroeById } from "./bases/08-import-export";



// const promesa =  new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         const heroe = getHeroeById(2);
//         resolve(heroe)
//         // reject('No se pudo encontrar al héroe')
//     },2000)
// });

// promesa.then((heroe)=>{
//     console.log('heroe', heroe)
// })
// .catch(err => console.warn(err))


const getHeroeByIdAsync = (id)=>{
    return  new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const p1 = getHeroeById(id);
            if (p1){
                resolve(p1)
            }else{
                 reject('No se pudo encontrar al héroe')
            }
            

           
        },2000)
    });
}

getHeroeByIdAsync(1).then(console.log).catch(console.warn);