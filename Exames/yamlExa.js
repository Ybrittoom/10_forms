async function carregarYAML(file ) {
    try {
        
        const response = await fetch('exames.yaml')

        if (!response.ok) {
            throw new Error("Erro ao carregar o arquivo")
        }

        const text = await response.text()

        const exames = jsyaml.load(text)

        exames.forEach(exame  => {
            console.log("YAML")
            console.log("Exame:", exame.exame)
            console.log("Tipo:", exame.tipo)
            console.log("Data de realizaçao:", exame.data_de_realizacao)
            console.log("Resultado:", exame.resultado)
            console.log("*****************")
        });
    }   catch (error) {
        console.log("Erro ao carregar o arquivo:", error)
    }
}

carregarYAML('exames.yaml')


