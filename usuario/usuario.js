fetch('usuario.json')
    .then(Response => Response.json())
    .then (data => {
        
        data.forEach(usuario => {
            
            console.log("Nome:", usuario.nome)
            console.log("Idade:", usuario.idade)
            console.log("Sexo:", usuario.sexo)
            console.log("Email:", usuario.email)
            console.log("Telefone:", usuario.telefone)
            console.log("Endereço:", usuario.endereco)
            console.log("------------")

        });
    }) 
    .catch (error => {
        console.error('Erro ao ler o arquivo JSON')
    })