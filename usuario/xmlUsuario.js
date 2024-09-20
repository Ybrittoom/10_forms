async function carregarXML() {
    try {
        const response = await fetch('usuario.xml')

        if (!response.ok) {
            throw new Error("Erro ao carregar o arquivo")
        }

        const xmlText = await response.text()
        const parser = new DOMParser()
        const xmlDoc = parser.parseFromString(xmlText, "application/xml")

        const usuario = xmlDoc.getElementsByTagName("usuario")

        Array.from(usuario).forEach( usu => {
            const nome = usu.getElementsByTagName("nome")[0].textContent.trim()
            const idade = usu.getElementsByTagName("idade")[0].textContent.trim()
            const sexo = usu.getElementsByTagName("sexo")[0].textContent.trim()
            const email = usu.getElementsByTagName("email")[0].textContent.trim()
            const telefone = usu.getElementsByTagName("telefone")[0].textContent.trim()
            const endereco = usu.getElementsByTagName("telefone")[0].textContent.trim()


            console.log("Nome:", nome)
            console.log("Idade:", idade)
            console.log("Sexo:", sexo)
            console.log("Email:", email)
            console.log("Telefone:", telefone)
            console.log("Endereço:", endereco)
            console.log("@@@@@@@@@@@@@")
        })
    } catch (error) {
        console.log("Erro:", error)
    }
}

carregarXML()