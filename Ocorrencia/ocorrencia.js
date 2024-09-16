fetch('ocorrencia.json')
    .then(Response => Response.json())
    .then( data => {
        
        data.forEach(ocorrencia => {
            console.log("Nome:", ocorrencia.nome)
            console.log("Local do Ocorrido:", ocorrencia.local_ocorrido)
            console.log("Data do ocorrido:", ocorrencia.data_do_ocorrido)
            console.log("Codigo Penal(numero):", ocorrencia.codigo_penal)
            console.log('-----------------')

        });
    }) 
    .catch ( error => {
        console.error('Erro ao tentar ler o arquivo JSON')
    })