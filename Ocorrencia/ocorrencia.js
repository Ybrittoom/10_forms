fetch('ocorrencia.json')
    .then(Response => Response.json())
    .then( data => {
        data.forEach(ocorr  => {
            console.log("JSON")
            console.log("Nome:", ocorr.nome)
            console.log("Local do ocorrido:", ocorr.local_do_ocorrido)
            console.log("Data do ocorrido:", ocorr.data_do_ocorrido)
            console.log("Codigo penal:", ocorr.codigo_penal)
            console.log("------------")
        });
    })
    .catch (error => {
        console.log("Erro ao ler o arquivo JSON:", error)
    })