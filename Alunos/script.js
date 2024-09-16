fetch('Alunos.json')
    .then(Response => Response.json())
    .then( data => {
        data.forEach(aluno => {
            console.log("Aluno:", aluno.aluno)
            console.log("Ausente:", aluno.ausente)
            console.log("Nota:", aluno.nota)
            console.log("---------")
        });
    })
    .catch (error => {
        console.error('Error ao ler o arquivo JSON', erro)
    })