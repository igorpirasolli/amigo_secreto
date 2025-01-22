//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    let nome = document.querySelector('input').value;
    if (nome == null || nome == '') {
        alert('Por favor, insira um nome!')
    }
    else {
        amigos.push(nome);
        limparCampo();
        agregarAmigos();
    }
}

function limparCampo() {
    nome = document.querySelector('input');
    nome.value = '';
}

function agregarAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        let item = `<li>${amigos[i]}</li>`;
        lista.innerHTML += item;
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Nenhum amigo disponível para sortear!');
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    const elementoResultado = document.getElementById('resultado');
    elementoResultado.innerHTML = `<li> O amigo secreto sorteado é: ${amigoSorteado}</li>`;

    
}
