let amigos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;

    //Validar entrada
    if (nombreAmigo.trim() === '') {
        limpiarCaja();
        alert('Por favor, inserte un nombre.');
    } else {
        amigos.push(nombreAmigo);
        console.log(amigos);
        limpiarCaja();
        agregarLista();
    }
}

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}

function agregarLista() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    let numeroAmigos = amigos.length;
    console.log(numeroAmigos);
    if (amigos.length === 0) {
        alert('La lista de amigos está vacía.');
    } else {
        let indice = Math.floor(Math.random() * numeroAmigos);
        console.log(indice);
        let amigoSeleccionado = amigos[indice];
        let casillaResultado = document.getElementById('resultado');
        casillaResultado.innerHTML = 'El amigo sorteado es: ' + amigoSeleccionado;
    }
}