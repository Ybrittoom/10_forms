
async function carregarJSON() {
    try {
        const response = await fetch('Biblioteca.json')

        if (!response.ok) {
            throw new Error("Erro ao carregar o arquivo")
        }

        const data = await response.json()

        data.forEach(biblio => {
            console.log("JSON")
              console.log("Livro:", biblio.livro)
              console.log("Autor:", biblio.autor)
              console.log("Categoria:", biblio.categoria)
              console.log("Ano de Publicaçao:", biblio.ano_de_publicacao)
              console.log("----------")
        });
    }  catch (error) {
        console.log("Erro:", error)
    }
}

carregarJSON()