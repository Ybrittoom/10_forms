fetch('exames.json')
    .then(Response =>/*converte o conteúdo do corpo da resposta HTTP (que é um texto JSON) em um objeto JavaScript.*/ Response.json())
    .then( data => {
        console.log(data)
    })
    .catch (error => [
        console.error('Error ao ler o arquivo JSON')
    ])