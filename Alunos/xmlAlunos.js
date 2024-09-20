async function carregarXML() {
    try {
        const response = await fetch('alunos.xml')

        if (!response.ok) {
            throw new Error("Erro ao carregar o arquvo")
        }

        const xmlText = await response.text()
        const parser = new DOMParser()
        const xmlDoc = parser.parseFromString(xmlText, "application/xml")

        const alunos = xmlDoc.getElementsByTagName("alunos")

        Array.from(alunos).forEach( al => {
            const aluno = al.getElementsByTagName("aluno")[0].textContent.trim()
            const ausente = al.getElementsByTagName("ausente")[0].textContent.trim()
            const notas = al.getElementsByTagName("notas")[0].textContent.trim()


            console.log("Aluno:", aluno)
            console.log("Ausente:", ausente)
            console.log("Nota:", notas)
            console.log("@@@@@@@@")
        })
    }  catch (error) {
        console.log("Erro:", error)
    }
}

carregarXML()