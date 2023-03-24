// const getImagenPromesa = () => new Promise( resolve => resolve('http://dfsdfds.com'))
// getImagenPromesa().then(console.log)

const getImagen = async () => {
    try {
        const apiKey = 'ATHb5caTj03a2aRRpuG0mi2Mc1h5kzLY';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
        const {data} = await resp.json();
        const {url} = data.images.original
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        console.error(error)
        
    }
    
    
}


console.log(getImagen())

