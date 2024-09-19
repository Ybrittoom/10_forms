async function carregarYAML(file) {
    try {

        const response = await fetch('veterinaria.yaml')

        if (!response.ok) {
            throw new Error("Erro ao buscar o arquivo")
        }

        const text = await response.text()

        const veterinaria = jsyaml.load(text)

        veterinaria.forEach(veteri => {
            console.log("YAML")
            console.log("Nome do Animal:", veteri.nome_do_animal)
            console.log("Familia do animal:", veteri.familia_do_animal)
            console.log("Raca:", veteri.raca)
            console.log("Dono do animal:", veteri.dono_do_animal)
            console.log("**************")
        });
    } catch (error) {
        console.log("Erro ao carregar o arquivo:", error)
    }
}

carregarYAML()