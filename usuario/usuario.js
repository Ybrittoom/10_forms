async function carregarJSON() {
    try {
        const response = await fetch('usuario.json')

        if (!response.ok) {
            throw new Error('Erro ao carregar o arquivo')
        }

        const data = await response.json()

        data.forEach(usuario => {
            
            console.log("Nome:", usuario.nome)
            console.log("Idade:", usuario.idade)
            console.log("Sexo:", usuario.sexo)
            console.log("Email:", usuario.email)
            console.log("Telefone:", usuario.telefone)
            console.log("Endereço:", usuario.endereco)
            console.log("------------")
        
        });
        
    } catch (error) {
        console.log("Erro:", error)
    }
}



carregarJSON()







