function carregarYAML(file) {
    fetch('hotel.yaml')
        .then(Response => {
            if (!Response.ok) {
                throw new Error("Erro ao carregar o arquivo")
            } 

            //converte a respota http para texto(conteudo YAML)
            return Response.text()
        })
        .then (text => {
            const Hotel = jsyaml.load(text)

            Hotel.forEach(hotel => {
                console.log("Quarto:", hotel.quarto)
                console.log("Andar:", hotel.andar)
                console.log("Cliente:", hotel.cliente)
                console.log("Dias:", hotel.dias)
                console.log("**************")
            });
        })
        .catch (error => {
            console.log("Erro ao carregar o arquivo YAML:", error)
        })
}

carregarYAML('hotel.yaml')