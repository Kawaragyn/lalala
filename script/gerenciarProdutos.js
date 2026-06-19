// pedi ajuda do Gemini para pensar em alguns produtos

const Bolos = [

    {
        nome: "Bolo Cenoura com Calda de Chocolate",
        avaliacao: 4.9,
        preco: "R$ 85,00",
        categoria: "Classicos e Caseiros",
        imagem: "./imagens/logoDaDoceria.png"
    },
    {
        nome: "Bolo Churros",
        avaliacao: 4.6,
        preco: "R$ 105,00",
        categoria: "Classicos e Caseiros"
    },
    {
        nome: "Bolo Fubá Cremoso com Goiabada",
        avaliacao: 4.7,
        preco: "R$ 80,00",
        categoria: "Classicos e Caseiros"
    },
    {
        nome: "Bolo Morango com Nata",
        avaliacao: 4.9,
        preco: "R$130,00",
        categoria: "Os Queridinhos"
    },
    {
        nome: "Bolo Frutas Vermelhas",
        avaliacao: 4.8,
        preco: "R$ 160,00",
        categoria: "Sofisticados e Festivos"
    }
];

const Tortas = [
    {
        nome: "Torta de Limão",
        avaliacao: 4.9,
        preco: "R$ 85,00",
        categoria: "Classicas e Frutadas"
    },
    {
        nome: "Torta de Maçã Americana com Canela",
        avaliacao: 4.7,
        preco: "R$ 90,00",
        categoria: "Classicas e Frutadas"
    },
    {
        nome: "Torta Cookie recheada com Nutella",
        avaliacao: 4.9,
        preco: "R$ 115,00",
        categoria: "Chocolatudas"
    },
    {
        nome: "Torta Banoffee com Doce de Leite Artesanal",
        avaliacao: 4.9,
        preco: "R$ 90,00",
        categoria: "Famosas e Queridinhas"
    },
    {
        nome: "Torta Holandesa Clássica",
        avaliacao: 4.9,
        preco: "R$ 95,00",
        categoria: "Famosas e Queridinhas"
    },
];

const MoussesECremes = [
    {
        nome: "Super Taça de Mousse de Chocolate Meio Amargo Aerado",
        avaliacao: 4.9,
        preco: "R$ 95,00",
        categoria: "Tacas Classicas de Festa"
    },
    {
        nome: "Super Taça de Mousse de Morango Fofinho",
        avaliacao: 4.6,
        preco: "R$ 90,00",
        categoria: "Tacas Classicas de Festa"
    },
    {
        nome: "Travessa de Creme de Leite Ninho com Frutas vermelhas",
        avaliacao: 4.9,
        preco: "R$ 120,00",
        categoria: "Cremes Gourmet"
    },
    {
        nome: "Travessa Delícia de Abacaxi (Creme Belga e Coco)",
        avaliacao: 4.8,
        preco: "R$ 110,00",
        categoria: "Sobremesas na Travessa"
    },
    {
        nome: "Travessa de Mousse Trufado de Sensação (Morango com Chocolate)",
        avaliacao: 4.9,
        preco: "R$ 130,00",
        categoria: "Sobremesas na Travessa"
    }
];

const AssadosDoces = [
    {
        nome: "Caixa de Pretzels Tradicionais com Açúcar e Canela",
        avaliacao: 4.8,
        preco: "R$ 65,00",
        categoria: "Pretzels de Luxo"
    },
    {
        nome: "Forma Família de Cinnamon Rolls Clássicos com Glacê de Baunilha",
        avaliacao: 4.9,
        preco: "R$ 85,00",
        categoria: "Cinnamon Rolls e Rolinhos"
    },
    {
        nome: "Pão Doce Gigante de Brioche Recheado com Doce de Leite Viçosa",
        avaliacao: 4.9,
        preco: "R$ 75,00",
        categoria: "Trancas e Babkas"
    },
    {
        nome: "Pão de Santa Maria com Frutas Cristalizadas e Amêndoas Laminadas",
        avaliacao: 4.7,
        preco: "R$ 68,00",
        categoria: "Trancas e Babkas"
    },
    {
        nome: "Caixa de Croissants Assados Recheados com Chocolate Duplo",
        avaliacao: 4.8,
        preco: "R$ 85,00",
        categoria: "Folhados Gourmet Assados"
    },
];

const CookiesEBrownies = [
    {
        nome: "Caixa de Cookies Classico",
        avaliacao: 4.9,
        preco: "R$ 60,00",
        categoria: "Caixas de Cookies"
    },
    {
        nome: "Caixa de Cookies de Aveia, Mel e Passas",
        avaliacao: 4.6,
        preco: "R$ 55,00",
        categoria: "Caixas de Cookies"
    },
    {
        nome: "Caixa de Cookies Recheados com Doce de Leite Artesanal",
        avaliacao: 4.8,
        preco: "R$ 72,00",
        categoria: "Cookies Recheados Extremos"
    },
    {
        nome: "Caixa de Brownies Tradicionais com Casquinha Crocante",
        avaliacao: 4.8,
        preco: "R$ 55,00",
        categoria: "Brownies Premium"
    },
    {
        nome: "Mega Pizza Cookie de M&M's (Forma de 25cm para Compartilhar)",
        avaliacao: 4.9,
        preco: "R$ 85,00",
        categoria: "Tamanho Familia"
    },
];

const Brigadeiros = [
    {
        nome: "Cento de Brigadeiro Tradicional com Granulado Belga Callebaut",
        avaliacao: 4.9,
        preco: "R$ 130,00",
        categoria: "Centos Classicos de Festa"
    },
    {
        nome: "Cento de Beijinho de Coco com Açúcar Cristal e Cravo",
        avaliacao: 4.7,
        preco: "R$ 115,00",
        categoria: "Centos Classicos de Festa"
    },
    {
        nome: "Cento de Bicho de Pé (Brigadeiro de Morango Tradicional)",
        avaliacao: 4.7,
        preco: "R$ 115,00",
        categoria: "Centos Classicos de Festa"
    },
    {
        nome: "Cento de Casadinho (Preto e Branco)",
        avaliacao: 4.8,
        preco: "R$ 125,00",
        categoria: "Centos Classicos de Festa"
    },
    {
        nome: "Caixa Presente Luxo com 12 Brigadeiros Gourmet Sortidos",
        avaliacao: 4.9,
        preco: "R$ 45,00",
        categoria: "Caixas de Presente"
    },
];

const SobremesasGeladas = [
    {
        nome: "Travessa de Pavê de Chocolate Duplo com Calda de Licor",
        avaliacao: 4.9,
        preco: "R$ 110,00",
        categoria: "Paves na Travessa"
    },
    {
        nome: "Travessa de Pavê de Abacaxi com Coco e Creme Belga",
        avaliacao: 4.7,
        preco: "R$ 100,00",
        categoria: "Paves na Travessa"
    },
    {
        nome: "Mega Bombom de Morango Aberto na Travessa com Ganache Meio Amargo",
        avaliacao: 4.9,
        preco: "R$ 130,00",
        categoria: "Bombons de Travessa"
    },
    {
        nome: "Mega Bombom de Uva Verde (Thompson) com Creme de Ninho",
        avaliacao: 4.9,
        preco: "R$ 125,00",
        categoria: "Bombons de Travessa"
    },
    {
        nome: "Torta de Sorvete Holandesa (Creme e Cobertura de Chocolate)",
        avaliacao: 4.9,
        preco: "R$ 110,00",
        categoria: "Tortas de Sorvete e Gelatos"
    },
];

const CupcakesEMiniBolinhos = [
    {
        nome: "Caixa de Cupcakes de Baunilha com Cobertura de Buttercream Clássico",
        avaliacao: 4.8,
        preco: "R$ 55,00",
        categoria: "Caixas de Cupcakes Tradicionais"
    },
    {
        nome: "Caixa de Cupcakes Double Chocolate (Massa e Cobertura Meio Amargo)",
        avaliacao: 4.9,
        preco: "R$ 60,00",
        categoria: "Caixas de Cupcakes Tradicionais"
    },
    {
        nome: "Caixa de Cupcakes de Cenoura com Cobertura Vulcão de Brigadeiro",
        avaliacao: 4.8,
        preco: "R$ 55,00",
        categoria: "Caixas de Cupcakes Tradicionais"
    },
    {
        nome: "Caixa de Mini Bolinhos de Maçã Espetacular com Nozes e Canela",
        avaliacao: 4.8,
        preco: "R$ 65,00",
        categoria: "Mini Bolinhos Caseiros"
    },
    {
        nome: "Bolo Central Smash the Cake Acompanhado de 6 Cupcakes Combinando",
        avaliacao: 4.9,
        preco: "R$ 180,00",
        categoria: "Combos e Torres Festivas"
    },
];

const LinhaSaudavel = [
    {
        nome: "Bolo de Aniversário Zero Açúcar de Chocolate",
        avaliacao: 4.8,
        preco: "R$ 130,00",
        categoria: "Bolos Zero Acucar"
    },
    {
        nome: "Cheesecake de Frutas Vermelhas Fit",
        avaliacao: 4.9,
        preco: "R$ 140,00",
        categoria: "Sem Gluten e Sem Lactose"
    },
    {
        nome: "Banoffee Fit com Doce de Leite de Coco e Base de Aveia",
        avaliacao: 4.7,
        preco: "R$ 115,00",
        categoria: "Sem Gluten e Sem Lactose"
    },
    {
        nome: "Bolo de Banana Fit com Passas, Aveia e Castanhas (Sem Açúcar/Adoçante)",
        avaliacao: 4.8,
        preco: "R$ 75,00",
        categoria: "Assados Funcionais e Low Carb"
    },
    {
        nome: "Caixa Presente Saudável com 12 Bombons Sortidos Veganos e Sem Açúcar",
        avaliacao: 4.7,
        preco: "R$ 55,00",
        categoria: "Docinhos de Festa Fit"
    },
];

const DocesDeBalcao = [
    {
        nome: "Caixa de Bombons de Morango Tradicionais (Coxinha de Morango)",
        avaliacao: 4.9,
        preco: "R$ 48,00",
        categoria: "Classicos de Vitrine"
    },
    {
        nome: "Caixa de Trufas Artesanais Sortidas (Tradicional, Branca e Maracujá)",
        avaliacao: 4.7,
        preco: "R$ 42,00",
        categoria: "Classicos de Vitrine"
    },
    {
        nome: "Caixa de Pão de Mel Recheado com Doce de Leite e Coberto com Chocolate",
        avaliacao: 4.9,
        preco: "R$ 48,00",
        categoria: "Classicos de Vitrine"
    },
    {
        nome: "Caixa de Palha Italiana Tradicional em Pedaços",
        avaliacao: 4.8,
        preco: "R$ 40,00",
        categoria: "Classicos Afetivos"
    },
    {
        nome: "Combo Café da Tarde: 4 Pães de Mel + 4 Trufas + 4 Carolinas",
        avaliacao: 4.8,
        preco: "R$ 68,00",
        categoria: "Combos de Degustacao"
    },
];

const dezProdutos = [
    Bolos[0],
    Tortas[0],
    LinhaSaudavel[0],
    Bolos[1],
    MoussesECremes[0],
    AssadosDoces[4],
    CupcakesEMiniBolinhos[0],
    DocesDeBalcao[1],
    SobremesasGeladas[3],
    CookiesEBrownies[0]
];

function top10NaTela() {
    const container = document.getElementById("container-produtos");
    if (!container) return;
    
    container.innerHTML = "";

    for (let i = 0; i < dezProdutos.length; i++) {
        const produto = dezProdutos[i];
        if (!produto) continue;

        const qtdSalva = localStorage.getItem(produto.nome) || "0";

        const section = document.createElement("section");
        section.className = "produto";
        section.innerHTML = `
            <div class="produto-dados">
                <h3 class="titulo-produto">${produto.nome}</h3>
                <div class="produto-comprar">
                    <span class="preco">${produto.preco}</span>
                    <div class="gerenciar-qtd">
                        <button type="button" class="btn-menos">-</button>
                        <span class="qtd-numero">${qtdSalva}</span>
                        <button type="button" class="btn-mais">+</button>
                    </div>
                </div>
            </div>
            <div class="produto-midia">
                <span class="seta-link">&gt;</span>
                <img src="${produto.imagem}" class="img-produto" alt="${produto.nome}">
            </div>
        `;
        
        container.appendChild(section);
        
        const btnMenos = section.querySelector(".btn-menos");
        const btnMais = section.querySelector(".btn-mais");
        
        btnMenos.onclick = function() { alterarQtd(this, -1); };
        btnMais.onclick = function() { alterarQtd(this, 1); };
    }
    atualizarCarrinhoAoVivo();
}

function atualizarCarrinhoAoVivo() {
    let totalGeral = 0;
    const todosOsCards = document.getElementsByClassName("produto");

    for (let i = 0; i < todosOsCards.length; i++) {
        const card = todosOsCards[i];
        const elementoPreco = card.querySelector(".preco");
        const elementoQtd = card.querySelector(".qtd-numero");

        if (elementoPreco && elementoQtd) {
            const textoPreco = elementoPreco.textContent;
            const quantidade = parseInt(elementoQtd.textContent);
            const precoLimpo = parseFloat(textoPreco.replace("R$", "").replace(",", ".").replace(/\s/g, ""));

            if (!isNaN(precoLimpo)) {
                totalGeral += precoLimpo * quantidade;
            }
        }
    }

    const elementoTotal = document.getElementById("valor-total");
    if (elementoTotal) {
        elementoTotal.textContent = "R$ " + totalGeral.toFixed(2).replace(".", ",");
    }
}

function alterarQtd(botao, mudanca) {
    const containerQtd = botao.parentElement;
    const spanNumero = containerQtd.querySelector(".qtd-numero");
    let qtdAtual = parseInt(spanNumero.textContent);
    
    qtdAtual += mudanca;
    if (qtdAtual < 0) qtdAtual = 0;
    spanNumero.textContent = qtdAtual;

    const cardProduto = botao.closest(".produto");
    if (cardProduto) {
        const nomeDoProduto = cardProduto.querySelector(".titulo-produto").textContent;
        if (qtdAtual > 0) {
            localStorage.setItem(nomeDoProduto, qtdAtual);
        } else {
            localStorage.removeItem(nomeDoProduto);
        }
    }
    atualizarCarrinhoAoVivo();
}

window.onload = top10NaTela;

