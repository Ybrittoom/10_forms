async function carregarJSON() {
    try {
        const response = await fetch('AluguelCarros.json')

        if (!response.ok) {
            throw new Error("Erro ao carregar o arquivo")
        }

        const data =  await response.json()

        data.forEach( carro => {
            console.log("Carro:", carro.Carro)
            console.log("Marca:", carro.Marca)
            console.log("Ano:", carro.Ano)
            console.log("Preço:", carro.Preco)
            console.log("---------------")
        });
    } catch (error) {
        console.log("Erro:", error)
    }
}

carregarJSON('AluguelCarros.json')