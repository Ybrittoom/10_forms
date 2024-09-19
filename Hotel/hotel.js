async function carregarJSON() {
    try {
        const response = await fetch('hotel.json')

        if (!response.ok) {
            throw new Error("Erro ao carregar o arquivo")
        }

        const data = await response.json()

        
        data.forEach( hotel => {
            console.log("Quarto:", hotel.quarto)
            console.log("Andar:", hotel.andar)
            console.log("Cliente:", hotel.cliente)
            console.log("Dias:", hotel.dias)
            console.log("-------------")
        });
    } catch (error) {
        console.log("Erro:", error)
     }
}

carregarJSON()







   