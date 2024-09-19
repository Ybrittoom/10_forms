async function carregarJSON() {
    try {
        const response = await fetch('viagens.json')

        if (!response.ok) {
            throw new Error('Erro ao ler o arquivo')
        }

        const data = await response.json()

        data.forEach(viagens => {
            
            console.log("Pais:", viagens.pais)
            console.log("Cidade:", viagens.cidade)
            console.log("Data de partida:", viagens.data_de_partida)
            console.log("Valor:", viagens.valor)
            console.log('----------')
            
        });

    } catch (erro) {
        console.log("Erro:", erro)
    }
}

carregarJSON()







