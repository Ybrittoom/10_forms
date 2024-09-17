function carregarYAML(file) {
    fetch('manutencao_equip.yaml')
        .then(Response => {
            if (!Response.ok) {
                throw new Error("Erro ao carregar o arquivo")
            }

            return Response.text();
        })
        .then (text => {
            const manEquip = jsyaml.load(text)

            manEquip.forEach(maeq => {
                console.log("Equipamneto:", maeq.equipamento)
                console.log("Data de manutençao:", maeq.data_de_manutencao)
                console.log("Status do Equipamento:", maeq.status_de_equipamento)
                console.log("Custo:", maeq.custo)
                console.log("***************")
            });
        })
}


carregarYAML('manutencao_equip.yaml')