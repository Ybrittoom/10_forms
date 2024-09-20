async function carregarXML() {
    try {
        const response = await fetch('manutencao_equip.xml')

        if ( !response.ok ) {
            throw new Error("Erro ao carregar o arquivo")

        }

        const xmlText = await response.text()
        const parser = new DOMParser()
        const xmlDoc = parser.parseFromString(xmlText, "application/xml")

        const manEquip = xmlDoc.getElementsByTagName("Equipamento")

        Array.from(manEquip).forEach(maeq => {
            const equip  = maeq.getElementsByTagName("equipamento")[0].textContent.trim()  
            const dataManu = maeq.getElementsByTagName("data_de_manutencao")[0].textContent.trim()
            const status = maeq.getElementsByTagName("status_do_equipamento")[0].textContent.trim()
            const custo = maeq.getElementsByTagName("custo")[0].textContent.trim()

            console.log("Equipamento", equip) 
            console.log("Data de Manutençao:", dataManu) 
            console.log("Status do equipamento:", status) 
            console.log("Custo", custo)
            console.log("@@@@@@@@@@@@@@")
            
        })
    } catch (error) {
        console.log("Erro:", error)
    }
}

carregarXML()