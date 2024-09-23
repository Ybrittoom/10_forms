async function carregarCSV() {
    try {
        const response = await fetch('usuario.csv')

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
                console.log("Nome:", objeto.nome)
                console.log("Sexo:", objeto.sexo)
                console.log("Email:", objeto.email)
                console.log("Telefone:", objeto.telefone)
                console.log("Endereço:", objeto.endereco)
                console.log("$$$$$$$$$$$")
            }
        })
    } catch (error) {
        console.log("Erro:", error)
    }
}

carregarCSV()