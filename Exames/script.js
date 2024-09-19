async function carregarJSON() {
    try {
        const response = await fetch('exames.json')

        if (!response.ok) {
            throw new Error("Erro ao carregar o arquivo")
        }

        const data = await response.json()

        data.forEach(exame => {
            console.log("Exame:", exame.exame)
            console.log("Tipo:", exame.tipo)
            console.log("Data de realizaçao:", exame.data_de_realizacao)
            console.log("Reultado:", exame.resultado)
            console.log("----------")
        });
    } catch (error) {
        console.log("Erro:", error)
    }
}

carregarJSON()

