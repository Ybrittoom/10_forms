async function carregarCSV() {
    try {
        const response = await fetch('veterinaria.csv')

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
                console.log("Nome do animal:", objeto.nome_do_animal)
                console.log("familia do animal:", objeto.familia_do_animal)
                console.log("Raça do animal:", objeto.raca_do_animal)
                console.log("Dono do animal:", objeto.dono_do_animal)
                console.log("$$$$$$$$$$$")
            }
        })
    } catch (error) {
        console.log("Erro:", error)
    }
}

carregarCSV()