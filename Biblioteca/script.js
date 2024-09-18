fetch('Biblioteca.json') //buscando o arquivo JSON
    .then(Response => Response.json())
    .then( data => {
        
        data.forEach(biblio => {
            
            console.log("JSON")
            console.log("Livro:", biblio.livro)
            console.log("Autor:", biblio.autor)
            console.log("Categoria:", biblio.categoria)
            console.log("Ano de Publicaçao:", biblio.ano_de_publicacao)
            console.log("----------")
        });
    })
    .catch (error => {
        console.error('Error ao ler o arquivo json', error)
    })