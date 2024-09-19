async function carregarXML() {
    try {
        const response = await fetch('Viagens.xml');

        if (!response.ok) {
            throw new Error("Erro ao carregar o arquivo");
        }

        const xmlText = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, "application/xml");

        const viagens = xmlDoc.getElementsByTagName("viagen");

        Array.from(viagens).forEach(viagem => {
            const pais = viagem.getElementsByTagName("pais")[0]?.textContent.trim() 
            const cidade = viagem.getElementsByTagName("cidade")[0]?.textContent.trim() 
            const duracao = viagem.getElementsByTagName("duracao_de_dias")[0]?.textContent.trim() 
            const dataPartida = viagem.getElementsByTagName("data_de_partida")[0]?.textContent.trim()  // Corrigido aqui
            const valor = viagem.getElementsByTagName("valor")[0]?.textContent.trim() 

            console.log("País:", pais);
            console.log("Cidade:", cidade);
            console.log("Duração:", duracao);
            console.log("Data de partida:", dataPartida);
            console.log("Valor:", valor);
            console.log("@@@@@@@@@@@@@@@@@");
        });
    } catch (error) {
        console.error("Erro:", error);
    }
}

carregarXML();
