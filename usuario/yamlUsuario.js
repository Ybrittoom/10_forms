async function carregarYAML(file) {
    try {

        const response = await fetch('usuario.yaml')

        if (!response.ok) {
            throw new Error("Erro ao carrgar o arquivo")
        }

        const text = await response.text()

        const usuarios = jsyaml.load(text)


        usuarios.forEach(usuario => {
            console.log("YAML")
            console.log("Nome:", usuario.nome )
            console.log("Idade:", usuario.idade)
            console.log("Sexo:", usuario.sexo)
            console.log("Email:", usuario.email)
            console.log("Telefone:", usuario.telefone)
            console.log("Endereço:", usuario.endereco)
            console.log("***************")
        });
    } catch (error) {
        console.log("Erro ao carregar o arquivo:", error)
    }
}
carregarYAML()