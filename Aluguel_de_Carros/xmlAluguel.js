async function carregarXML() {
    try {
        const response = await fetch('aluguel_carro.xml');

        if (!response.ok) {
            throw new Error("Erro ao carregar o arquivo");
        }

        const xmlText = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, "application/xml");

        const carros = xmlDoc.getElementsByTagName("Carro");

        Array.from(carros).forEach(carro => {
            const modelo = carro.getElementsByTagName("Modelo")[0].textContent.trim();
            const marca = carro.getElementsByTagName("Marca")[0].textContent.trim();
            const ano = carro.getElementsByTagName("Ano")[0].textContent.trim();
            const preco = carro.getElementsByTagName("Preco")[0].textContent.trim();

            console.log("@XML@");
            console.log("Carro:", modelo);
            console.log("Marca:", marca);
            console.log("Ano:", ano);
            console.log("Preço:", preco);
            console.log("@@@@@@@@@@@@@");
        });
    } catch (error) {
        console.log("Erro:", error);
    }
}

carregarXML();
