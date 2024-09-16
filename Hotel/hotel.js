fetch('hotel.json')
    .then(Response => Response.json())
    .then( data => {
        
        data.forEach( hotel => {
            console.log("Quarto:", hotel.quarto)
            console.log("Andar:", hotel.andar)
            console.log("Cliente:", hotel.cliente)
            console.log("Dias:", hotel.dias)
            console.log("-------------")
        });
    })
    .catch (error => {
        console.error('Erro ao ler o arquivo JSON')
    })