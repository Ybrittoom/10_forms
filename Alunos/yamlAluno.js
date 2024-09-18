async function carregarYAML(file ) {
    try { //inicia um bloco de codigo onde as operaçoes podem falhar 
        const response = await fetch('alunos.yaml')

        if (!response.ok) {
            throw new Error("Erro ao carregar o arquivo")
        }
        //cria uma constante chamada response e armazena o resultado da chamda http
        const text = await response.text();

        const alunos = jsyaml.load(text)

        alunos.forEach(aluno  => {
            console.log("Yaml")
            console.log("Aluno:", aluno.aluno)
            console.log("Ausente:", aluno.ausente)
            console.log("Nota:", aluno.nota)
            console.log("***************")
        });
        //se algum erro acontecer no bloco 'try', o bloco 'catch' sera ativado
    }   catch (error) {
        console.log("Erro ao carregar o arquivo:", error)
    }
    
}
 carregarYAML('alunos.yaml')
