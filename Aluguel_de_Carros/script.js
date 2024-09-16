fetch('AluguelCarros.json')
    .then(Response =>  Response.json()) //converte o conteudo do arquivo para JSON

    .then( data => { //.then(data => { Este bloco será executado quando a promessa for resolvida com sucesso.
        //'data' contem os dados do JSON
        
        //intera sobre cada intem no array de carros
        data.forEach(car => { // `car` é um objeto representando um carro, que deve conter propriedades como Carro, Marca, Ano, Modelo e Preço.
            //exibe cada campo do JSON no console 
            console.log("Carro:", car.Carro)
            console.log("Marca:", car.Marca)
            console.log("Ano:", car.Ano)
            console.log("Modelo:", car.Modelo)
            console.log("Preço:", car.Preco)
            console.log('------------')// deixar mais bonito e facil de separar um do outro
        })
    })
    .catch (error => { //este bloco sera executado caso se a promessa for rejeitada
        console.error('Error ao ler o arquivo json', error)/*'error' contem as informaçoes sobre o problema que ocorre durante a 
                                                            execuçao da promessa*/ 
    })
  