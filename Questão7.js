const produtos = [
    { nome: "Produto A", preco: 40, quantidade: 4 },
    { nome: "Produto B", preco: 60, quantidade: 3 },
    { nome: "Produto C", preco: 55, quantidade: 10 }
];

function calcularValorTotalEstoque(produtos) {
    let total = 0;

    for (let i = 0; i < produtos.length; i++) {
        total += produtos[i].preco * produtos[i].quantidade;
    }

    return total;
}


console.log(`O valor total do estoque é R$ ${calcularValorTotalEstoque(produtos).toFixed(2)}`);
