fetch('viagens.json')
    .then(Response => Response.json())
    .then(data => {
        
        data.forEach(viagens => {
            
            console.log("Pais:", viagens.pais)
            console.log("Cidade:", viagens.cidade)
            console.log("Data de partida:", viagens.data_de_partida)
            console.log("Valor:", viagens.valor)
            console.log('----------')
            
        });
    })
    .catch(error => {
        console.error('Erro ao ler o arquivo JSON')
    })