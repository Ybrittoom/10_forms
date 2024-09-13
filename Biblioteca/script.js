fetch('Biblioteca.json') //buscando o arquivo JSON
    .then(Response => Response.json())
    .then( data => {
        console.log(data)
    })
    .catch (error => {
        console.error('Error ao ler o arquivo json')
    })