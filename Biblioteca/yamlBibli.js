function carregarYAML(file) {
    fetch('biblioteca.yaml')
        .then(Response => {
            if (!Response.ok) {
                throw new Error("erro ao carregar o arquivo")
            } 

            return Response.text()
        })
        .then (text => {
            const biblioteca = jsyaml.load(text)

            biblioteca.forEach(biblio => {
                console.log("Livro:", biblio.livro)
                console.log("Autor:", biblio.autor)
                console.log("Categoria:", biblio.categoria)
                console.log("Ano de Publicaçao:", biblio.ano_de_publicacao)
                console.log("********************")
            });

        })
        .catch (error => {
            console.log("Erro ao carregar o arquivo YAML:", error)
        })


}

carregarYAML('biblioteca.yaml')