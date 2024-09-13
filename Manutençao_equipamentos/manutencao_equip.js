fetch('manutencao_equip.json')
    .then(Response => Response.json())
    .then( data => {
        console.log(data)
    }) 
    .catch (error => {
        console.error('Erro ao lert o arquivo JSON')
    })