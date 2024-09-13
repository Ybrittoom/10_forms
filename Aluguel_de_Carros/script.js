fetch('AluguelCarros.json')
    .then(Response =>  Response.json()) //converte o conteudo do arquivo para JSON
    .then( data => {
        console.log(data) //exibe o objeto JSON no console
    }) 
    .catch(error => {
        console.error('Erro ao ler o arquivo JSON:', error) ///caso de erro ele avisa
    })