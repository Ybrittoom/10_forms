fetch('manutencao_equip.json')
    .then(Response => Response.json())
    .then( data => {
        
        data.forEach( manuEquip => {
            console.log("Equipamento:", manuEquip.equipamento)
            console.log("Data de manutençao:", manuEquip.data_de_manutencao)
            console.log("Status do equipamento:", manuEquip.status_do_equipamento)
            console.log("custo:", manuEquip.custo)
            console.log("----------")

        });
    }) 
    .catch (error => {
        console.error('Erro ao lert o arquivo JSON', error)
    })