const produtos = [
    { nome: "Empilhadeira Elétrica", categoria: "Equipamentos", preco: 25000 },
    { nome: "Palete de Madeira", categoria: "Armazenagem", preco: 50 },
    { nome: "Carro de Transporte", categoria: "Veículos", preco: 150000 },
    { nome: "Caixa de Armazenamento", categoria: "Embalagens", preco: 120 },
    { nome: "Software de Roteirização", categoria: "Tecnologia", preco: 5000 },
    { nome: "Carrinho de Carga", categoria: "Equipamentos", preco: 450 },
    { nome: "Termômetro Digital", categoria: "Ferramentas", preco: 80 },
    { nome: "Scanner de Código de Barras", categoria: "Equipamentos", preco: 350 },
    { nome: "Fita de Embalagem", categoria: "Embalagens", preco: 25 },
    { nome: "Plataforma Elevatória", categoria: "Equipamentos", preco: 18000 }
];
function filtrarProdutos() {
    const categoriaFiltro = document.getElementById("categoriaFiltro").value;
    const buscaFiltro = document.getElementById("buscaFiltro").value.toLowerCase();

    const produtosFiltrados = produtos.filter(produto => {
        const correspondeCategoria = categoriaFiltro === "" || produto.categoria === categoriaFiltro;
        const correspondeBusca = produto.nome.toLowerCase().includes(buscaFiltro);
        return correspondeCategoria && correspondeBusca;
    });

    exibirTabela(produtosFiltrados);
}
function exibirTabela(produtosFiltrados) {
    const tabelaCorpo = document.getElementById("tabelaCorpo");
    tabelaCorpo.innerHTML = ""; 
    produtosFiltrados.forEach(produto => {
        const linha = document.createElement("tr");
        linha.innerHTML = `<td>${produto.nome}</td><td>${produto.categoria}</td><td>R$ ${produto.preco.toFixed(2)}</td>`;
        tabelaCorpo.appendChild(linha);
    });
}
window.onload = () => exibirTabela(produtos);