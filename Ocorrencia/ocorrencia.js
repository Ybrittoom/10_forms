async function carregarYAML(file ) {
    try {
        const response = await fetch('ocorrencia.yaml')

        if (!response.ok) {
            throw new Error("Erro ao carregar o arquivo")
        }

        const text = await response.text()

        const ocorrencia = jsyaml.load(text)

        ocorrencia.forEach(ocorr => {
            console.log("Nome:", ocorr.nome)
            console.log("Local do Ocorrido:", ocorr.local_ocorrido)
            console.log("Data do ocorrido:", ocorr.data_do_ocorrido)
            console.log("Codigo Penal(numero):", ocorr.codigo_penal)
            console.log('-----------------')

        });
    }   catch (error) {
        console.log("Erro ao carregar o arquivo:", error)
    }
}

carregarYAML("ocorrencia.yaml")