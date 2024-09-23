async function carregarCSV() {
    try {
        const response = await fetch('biblioteca.csv')

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

                console.log("$CSV$",)
                console.log("id", objeto.id)
                console.log("livro", objeto.livro)
                console.log("autor", objeto.autor)
                console.log("categoria", objeto.categoria)
                console.log("ano de publicaçao", objeto.ano_de_publicacao)
                console.log("$$$$$$$$$$$$",)
            }
        })
    } catch (error) {
        console.log("Error:", error)
    }
}

carregarCSV()