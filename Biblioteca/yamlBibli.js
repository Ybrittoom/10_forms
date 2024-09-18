async function carregarYAML(file ) {
    try {
        const response = await fetch('biblioteca.yaml')

        if (!response.ok) {
            throw new Error("Erro ao carregar o arquivo")
        }

        const text = await response.text()  

        const biblioteca = jsyaml.load(text)

        biblioteca.forEach(biblio => {
            console.log("yaml")
            console.log("Livro:", biblio.livro)
            console.log("Autor:", biblio.autor)
            console.log("Categoria:", biblio.categoria)
            console.log("Ano de Publicaçao:", biblio.ano_de_publicaçao)
            console.log("**************")
        });
    }   catch (error) {
        console.log("Erro ao carregar o arquivo:",  error)
    }
}

carregarYAML('biblioteca.yaml')