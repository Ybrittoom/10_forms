async function carregarCSV() {
    try {
        const response = await fetch('aluguel_carros.csv');

        if (!response.ok) {
            throw new Error("Erro ao carregar o arquivo");
        }

        const textoCSV = await response.text();
        const linhas = textoCSV.split('\n');
        const cabecalho = linhas[0].split(',');

        linhas.slice(1).forEach(linha => {
            const valores = linha.split(',');
            if (valores.length === cabecalho.length) {
                const objeto = cabecalho.reduce((acc, cabecalho, index) => {
                    acc[cabecalho.trim()] = valores[index].trim();
                    return acc;
                }, {});

                // Exibir os dados no console
                console.log("$CSV$")
                console.log("Carro:", objeto.Carro);
                console.log("Marca:", objeto.Marca);
                console.log("Ano:", objeto.Ano);
                console.log("Modelo:", objeto.Modelo);
                console.log("Preço:", objeto.Preco);
                console.log("$$$$$$$$$$$$$$$$");
            }
        });
    } catch (error) {
        console.log("Erro:", error);
    }
}

// Chama a função para carregar o CSV
carregarCSV();