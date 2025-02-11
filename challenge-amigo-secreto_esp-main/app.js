let amigos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;

    //Validar entrada
    if (nombreAmigo.trim() === '') {
        limpiarCaja();
        alert('Por favor, inserte un nombre.');
    } else {
        amigos.push(nombreAmigo);
        limpiarCaja();
        agregarLista();
    }
}

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}

function limpiarLista() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
}

function vaciarLista(){
    amigos.length = 0;
}

function agregarLista() {
    limpiarLista();

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    let numeroAmigos = amigos.length;
    if (amigos.length === 0) {
        alert('La lista de amigos está vacía.');
    } else {
        let indice = Math.floor(Math.random() * numeroAmigos);
        let amigoSeleccionado = amigos[indice];
        let casillaResultado = document.getElementById('resultado');
        limpiarLista();
        casillaResultado.innerHTML = 'El amigo sorteado es: ' + amigoSeleccionado;
        vaciarLista();
    }
}