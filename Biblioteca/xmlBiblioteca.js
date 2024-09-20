async function carregarXML() {
    try {
        const response = await fetch('biblioteca.xml')

        if (!response.ok) {
            throw new Error("Erro ao carregar o arquivo")
        }

        const xmlText = await response.text()
        const parser = new DOMParser()
        const xmlDoc = parser.parseFromString(xmlText, "application/xml")

        const livros = xmlDoc.getElementsByTagName("livro")

        Array.from(livros).forEach( livro => {
            const titulo = livro.getElementsByTagName("titulo")[0].textContent.trim()
            const autor = livro.getElementsByTagName("autor")[0].textContent.trim() 
            const categoria = livro.getElementsByTagName("categoria")[0].textContent.trim() 
            const ano_de_publicacao = livro.getElementsByTagName("ano_de_publicacao")[0].textContent.trim()  

            console.log("Titulo:", titulo)
            console.log("Autor:", autor)
            console.log("Categoria:", categoria)
            console.log("Ano de Publicaçao:", ano_de_publicacao)
            console.log("@@@@@@@@@@@@@")
        })
    }  catch (error) {
        console.log("Erro:", error)
    }
}

carregarXML()