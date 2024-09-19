async function carregarYAML(file) {
    try {
        const response = await fetch('viagens.yaml')

        if(!response.ok) {
            throw new Error("Erro ao buscar o arquivo")
        }

        const text = await response.text()

        const viagens = jsyaml.load(text)

        viagens.forEach(viag  => {
            console.log("YAML")
            console.log("Pais:", viag.pais)
            console.log("Cidade:", viag.cidade)
            console.log("Duraçao de dias:", viag.duracao_de_dias)
            console.log("Data de partida:", viag.data_de_partida)
            console.log("Valo:", viag.valor)
            console.log("***************")
        });
    } catch (error) {
        console.log("Erro ao carregar o arquivo:", error)
    }
}

carregarYAML()