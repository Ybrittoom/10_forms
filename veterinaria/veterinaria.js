fetch('veterinaria.json')
    .then(Response => Response.json())
    .then( data => {
        
        data.forEach(veterinaria => {
            
            console.log("Nome do Animal:", veterinaria.nome_do_animal)
            console.log("Familia do animal:", veterinaria.familia_do_animal)
            console.log("Raça:", veterinaria.raca)
            console.log("Dono do Animal:", veterinaria.dono_do_animal)
            console.log("-----------")
            
        });
    })
    .catch(error => {
        console.error('Erro ao ler o arquivo JSON')
    })