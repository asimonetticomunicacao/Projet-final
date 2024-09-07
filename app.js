// app.js

// Obtendo a referência dos elementos HTML
const botao = document.querySelector('button');
const listaServicos = document.getElementById('servicos');

// Função para mostrar os serviços
function mostrarServicos() {
  // Limpando a lista antes de adicionar novos itens (opcional)
  listaServicos.innerHTML = '';

  // Iterando sobre os dados e criando os elementos HTML
  dados.forEach(servico => {
    const itemLista = document.createElement('li');
    itemLista.textContent = servico.titulo;

    // Criando um parágrafo para a descrição
    const descricao = document.createElement('p');
    descricao.textContent = servico.descricao;

    // Adicionando o parágrafo à lista
    itemLista.appendChild(descricao);

    // Adicionando o item à lista de serviços
    listaServicos.appendChild(itemLista);
  });

  // Mostrando a lista de serviços
  listaServicos.style.display = 'block';
}

// Adicionando um event listener ao botão
botao.addEventListener('click', mostrarServicos);