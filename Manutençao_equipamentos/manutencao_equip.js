async function carregarJSON() {
    try {
        const response = await fetch('manutencao_equip.json')

        if (!response.ok) {
            throw new Error("Erro ao carregar o arquivo")
        }

        const data = await response.json()

        
        data.forEach( manuEquip => {
            console.log("Equipamento:", manuEquip.equipamento)
            console.log("Data de manutençao:", manuEquip.data_de_manutencao)
            console.log("Status do equipamento:", manuEquip.status_do_equipamento)
            console.log("custo:", manuEquip.custo)
            console.log("----------")
        
        });
    } catch (error) {
        console.log("Erro:", error)
    }
}

carregarJSON()








