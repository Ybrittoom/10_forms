async function carregarXML() {
    try {
        const response  = await fetch('hotel.xml')

        if (!response.ok) {
            throw new Error("Erro ao carregar o arquivo")
        }

        const xmlText = await response.text()
        const parser = new DOMParser()
        const xmlDoc = parser.parseFromString(xmlText, "application/xml")

        const hotel = xmlDoc.getElementsByTagName("hotel")

        Array.from(hotel).forEach(hot => {
            const quarto = hot.getElementsByTagName("quarto")[0].textContent.trim() 
            const andar = hot.getElementsByTagName("Andar")[0].textContent.trim() 
            const Cliente = hot.getElementsByTagName("Clientes")[0].textContent.trim()
            const dias = hot.getElementsByTagName("dias")[0].textContent.trim() 


            console.log("Quarto:", quarto)
            console.log("Andar:", andar)
            console.log("Clientes:", Cliente)
            console.log("Dias:", dias)
            console.log("@@@@@@@@@@@@@")
        })
    } catch (error) {
        console.log("Erro:", error)
    }
}

carregarXML()