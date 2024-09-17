function carregarYAML(file) {
        fetch('exames.yaml')
            .then(Response => {
                if (!Response.ok) {
                    throw new Error("Erro ao carregar o arquivo")
                }
                 return Response.text()
            })
            .then (text => {
                const exames = jsyaml.load(text)

                
                exames.forEach(exame  => {
                    console.log("Exame:", exame.exame)
                    console.log("Tipo:", exame.tipo)
                    console.log("Data de Realizaçao:", exame.data_de_realizacao)
                    console.log("Resultado:", exame.resultado)
                    console.log("*****************")
                });

            })
            .catch (error => {
                console.log("Erro ao carregar o arquivo YAML:", error)
            })
}

carregarYAML('exames.yaml')


