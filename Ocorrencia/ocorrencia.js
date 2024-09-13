fetch('ocorrencia.json')
    .then(Response => Response.json())
    .then( data => {
        console.log(data)
    }) 
    .catch ( error => {
        console.error('Erro ao tentar ler o arquivo JSON')
    })