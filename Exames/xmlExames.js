async function carregarXML() {
    try {
        const response = await fetch('exames.xml')

        if (!response.ok) {
            throw new Error("Erro ao carregar o arquivo")
        }

        const xmlText = await response.text()
        const parser = new DOMParser()
        const xmlDoc = parser.parseFromString(xmlText, "application/xml")

        const exames = xmlDoc.getElementsByTagName("exame")

        Array.from(exames).forEach( exame => {
            const nome = exame.getElementsByTagName("Nome")[0].textContent.trim()
            const tipo = exame.getElementsByTagName("tipo")[0].textContent.trim()
            const datarealizacao = exame.getElementsByTagName("data_de_realizacao")[0].textContent.trim()
            const resultado = exame.getElementsByTagName("resultado")[0].textContent.trim()

             console.log("Nome:", nome)
             console.log("Tipo:", tipo)
             console.log("Data de realizaçao:", datarealizacao)
             console.log("Resultado:", resultado)   
             console.log("@@@@@@@@@")

        })
    } catch (error) {
        console.log("Erro:", error)
    }
}

carregarXML()