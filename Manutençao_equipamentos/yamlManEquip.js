async function carregarYAML(file ) {
    try {
        const response = await fetch('manutencao_equip.yaml')

        if (!response.ok) {
            throw new Error("Erro ao carregar o arquivo")
        }

        const text = await response.text()

        const manEquip = jsyaml.load(text)

        manEquip.forEach(maeq => {
            console.log("YAML")
            console.log("Equipamneto:", maeq.equipamento)
            console.log("Data de manutençao:", maeq.data_de_manutencao)
            console.log("Status do Equipamento:", maeq.status_de_equipamento)
            console.log("Custo:", maeq.custo)
            console.log("***************")
        });
    } catch (error) {
        console.log("Erro ao carregar o arquivo:", error)
    }
}

carregarYAML('manutencao_equip.yaml')