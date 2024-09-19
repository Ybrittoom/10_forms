async function carregarJSON() {
    try {
        const response = await fetch('ocorrencia.json')

        if (!response.ok) {
            throw new Error("Erro ao carregar o arquivo")
        }

        const data = await response.json()

        data.forEach(ocorr  => {
            console.log("JSON")
            console.log("Nome:", ocorr.nome)
            console.log("Local do ocorrido:", ocorr.local_do_ocorrido)
            console.log("Data do ocorrido:", ocorr.data_do_ocorrido)
            console.log("Codigo penal:", ocorr.codigo_penal)
            console.log("------------")
        });

    } catch (error) {
        console.log("Erro:", error)
    }


}

carregarJSON()






