async function carregarYAML(file ) {
    try {

        const response = await fetch('hotel.yaml')

        if (!response.ok) {
            throw new Error("Erro ao carregar o arquivo")
        } 

        const text = await response.text()

        const Hotel = jsyaml.load(text)
        
        Hotel.forEach(hotel => {
            console.log("YAML")
            console.log("Quarto:", hotel.quarto)
            console.log("Andar:", hotel.andar)
            console.log("Cliente:", hotel.cliente)
            console.log("Dias:", hotel.dias)
            console.log("************")
        });
    } catch (error) {
        console.log("Erro ao carregar o arquivo:", error)
    }
}

carregarYAML('hotel.yaml')