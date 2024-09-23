async function carregarCSV() {
    try {
        const response = await fetch('viagens.csv')

        if (!response.ok) {
            throw new Error("Erro ao carregar o arquivo")
        }

        const textoCSV = await response.text()
        const linhas = textoCSV.split('\n')
        const cabecalho = linhas[0].split(',')

        linhas.slice(1).forEach( linha => {
            const valores = linha.split(',')
            if ( valores.length === cabecalho.length ) {
                const objeto = cabecalho.reduce((acc, cabecalho, index ) => {
                    acc[cabecalho.trim()] = valores[index].trim()
                    return acc
                }, {})

                console.log("$CSV$")
                console.log("Id", objeto.id)
                console.log("Pais:", objeto.pais)
                console.log("Cidade:", objeto.cidade)
                console.log("Duraçao de dias:", objeto.duracao_de_dias)
                console.log("Data de Partida:", objeto.data_de_partida)
                console.log("Valor:", objeto.valor)
                console.log("$$$$$$$$$$$")
            }
        })
    } catch (error) {
        console.log("Erro:", error)
    }
}

carregarCSV()