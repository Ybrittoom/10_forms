async function carregarCSV() {
    try {
        const response = await fetch('exames.csv')

        if (!response.ok) {
            throw new Error("Erro ao carregar o arquivo")
        }

        const textoCSV = await response.text()
        const linhas = textoCSV.split('\n')
        const cabecalho = linhas[0].split(',')

        linhas.slice(1).forEach(linha => {
            const valores = linha.split(',')
            if (valores.length === cabecalho.length) {
                const objeto = cabecalho.reduce((acc, cabecalho, index) => {
                    acc[cabecalho.trim()] = valores[index].trim()
                    return acc
                }, {})

                console.log("$CSV$")
                console.log("Id:", objeto.id)
                console.log("Exame:", objeto.exame)
                console.log("Tipo:", objeto.tipo)
                console.log("Data de realizaçao:", objeto.data_de_realizacao)
                console.log("Resultado:", objeto.resultado)
                console.log("$$$$$$$$$$$$$4")
            }
        })

    } catch (error) {
        console.log("Erro:", error)
    }

}

carregarCSV()
