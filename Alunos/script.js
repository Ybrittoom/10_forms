fetch('Alunos.json')
    .then(Response => Response.json())
    .then( data => {
        console.log(data)
    })
    .catch (error => {
        console.error('Erro ao ler o arquivo JSON')
    })