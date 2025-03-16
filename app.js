let nomes = [];

function adicionarNome() {
    let input = document.getElementById("nomeInput");
    let nome = input.value.trim();
    
    if (nome === "") {
        alert("Digite um nome!");
        return;
    }

    nomes.push(nome);
    atualizarLista();
    input.value = "";
}

function atualizarLista() {
    let lista = document.getElementById("listaNomes");
    lista.innerHTML = "";
    
    nomes.forEach((nome) => {
        let item = document.createElement("li");
        item.textContent = nome;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (nomes.length === 0) {
        alert("Adicione pelo menos um nome!");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * nomes.length);
    let sorteado = nomes[indiceSorteado];

    document.getElementById("resultado").innerText = `O sorteado é: ${sorteado}`;
}