//funçao para carregar o arquivo YAML
async function carregarYAML(file) {
    try {
        //faz uma requisiçao para obter o arquivo YAML
        const response = await fetch(file)
        //verifica se a resposta foi bemm-sucedida
        if (!response.ok) {
            throw new Error("Erro ao carregar o arquivo")
        }

        //converte a resposta para texto
        const text = await response.text();

        //usa a biblioteca js-yaml para converter o YAML para um objeto javacript
        const carros = jsyaml.load(text) 
        //Converte o corpo da resposta em texto. await aguarda a conversão do corpo da resposta em uma string.


        //exibe no console do navegador
        carros.forEach( carro  => {
            console.log("Carro:", carro.Carro)
            console.log("Marca:", carro.Marca)
            console.log("Ano:", carro.Ano)
            console.log("Preço:", carro.Preco)
            console.log("*************")
        });

    } catch (error) {
        console.log("erro ao carregar o arquivo yaml:", error)

    }
}

carregarYAML('alugueCarros.yml')