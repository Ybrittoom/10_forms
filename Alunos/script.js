async function carregarJSON() {
    try {
        const response = await fetch('Alunos.json')

        if (!response.ok) {
            throw new Error("Erro ao carregar o arquivo")
        }

        const data = await response.json()

        data.forEach(aluno  => {
            console.log("Aluno:", aluno.aluno)
            console.log("Ausente:", aluno.ausente)
            console.log("Nota:", aluno.nota)
            console.log("----------------")
        });
    }  catch (error) {
        console.log("Erro:", error)
    }
}

carregarJSON()