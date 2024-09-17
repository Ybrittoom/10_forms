function carregarYAML(file) {

    fetch('alunos.yaml')
        .then(Response => {
            if (!Response.ok) {
                throw new Error("erro ao carregar o arquivo")
            }

            //converte a resposta http para texto(conteudo do yaml)
            return Response.text();
        })
        .then (text => {
            const alunos = jsyaml.load(text)

            alunos.forEach(aluno  => {
                console.log("Aluno:", aluno.aluno)
                console.log("Ausente:", aluno.ausente)
                console.log("Nota:", aluno.nota)
                console.log("************")
            });
        })
        .catch (error => {
            console.log("Erro ao carregar o arquivo YAML:", error)
        })
}

carregarYAML('alunos.yaml')