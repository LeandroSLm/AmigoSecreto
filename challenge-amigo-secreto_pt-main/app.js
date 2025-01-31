let amigos = [];

function adicionarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nomeAmigo = inputAmigo.value.trim();

    if (nomeAmigo === "") {
        alert("Digite um nome válido.");
        return;
    }

    if (!amigos.includes(nomeAmigo)) {
        amigos.push(nomeAmigo);
        atualizarLista();
    }
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Nenhum amigo na lista para sortear.");
        return;
    }

    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById("resultado");
    
    resultado.innerHTML = ""; 
    let li = document.createElement("li");
    li.textContent = `Sorteado: ${amigoSorteado}`;
    resultado.appendChild(li);
}
