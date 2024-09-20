async function carregarXML() {
    try {
        const response = await fetch('Ocorrencia.xml')

        if (!response.ok) {
            throw new Error("Erro ao carregar o arquivo")
        }

        const xmlText = await response.text()
        const parser = new DOMParser()
        const xmlDoc = parser.parseFromString(xmlText, "application/xml")

        const ocorrenci = xmlDoc.getElementsByTagName("ocorrencia")

        Array.from(ocorrenci).forEach(ocorr => {
            const Nome = ocorr.getElementsByTagName("nome")[0].textContent.trim()
            const LocaOcorrido = ocorr.getElementsByTagName("local_ocorrido")[0].textContent.trim()
            const DataOcorrido = ocorr.getElementsByTagName("data_do_ocorrido")[0].textContent.trim()
            const codigoPenal = ocorr.getElementsByTagName("codigo_penal")[0].textContent.trim()

            console.log("Nome:", Nome)
            console.log("Local do ocorrido:", LocaOcorrido)
            console.log("Data do Ocorrido:", DataOcorrido)
            console.log("Codigo Penal:", codigoPenal)
            console.log("@@@@@@@@@@@@@@")
        })
    } catch (error) {
        console.log("Erro:", error)
    }
}

carregarXML()