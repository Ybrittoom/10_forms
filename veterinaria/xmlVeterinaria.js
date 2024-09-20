async function carregarXML() {
    try {
        const response = await fetch('Veterinaria.xml')

        if (!response.ok) {
            throw new Error("Erro ao carregar o arquivo")
        }

        const xmlText = await response.text()
        const parser = new DOMParser()
        const xmlDoc = parser.parseFromString(xmlText, "application/xml")

        const veterinaria = xmlDoc.getElementsByTagName("Cliente")

        Array.from(veterinaria).forEach(pet => {
            const nomeAnimal = pet.getElementsByTagName("nome_do_animal")[0].textContent.trim()
            const familiaAnimal = pet.getElementsByTagName("familia_do_animal")[0].textContent.trim()
            const raca = pet.getElementsByTagName("raca")[0].textContent.trim()
            const donoAnimal = pet.getElementsByTagName("dono_do_animal")[0].textContent.trim()

            console.log("Nome do animal:", nomeAnimal)
            console.log("Familia do animal:", familiaAnimal)
            console.log("Raça:", raca)
            console.log("Dono do animal:", donoAnimal)
            console.log("@@@@@@@@@@@@@@@")
        })
    } catch (error) {
        console.log("Erro", error)
    }
}

carregarXML()