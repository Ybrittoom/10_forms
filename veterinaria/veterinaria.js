async function carregarJSON() {
    try {
        const response = await fetch('veterinaria.json')

        if (!response.ok) {
            throw new Error("Erro ao carregar o aruqivo")
        }

        const  data = await response.json()

        data.forEach(veterinaria => {
            
            console.log("Nome do Animal:", veterinaria.nome_do_animal)
            console.log("Familia do animal:", veterinaria.familia_do_animal)
            console.log("Raça:", veterinaria.raca)
            console.log("Dono do Animal:", veterinaria.dono_do_animal)
            console.log("-----------")
            
        });

    } catch (error) {
        console.log('Erro:', error)
    }
}


carregarJSON()


