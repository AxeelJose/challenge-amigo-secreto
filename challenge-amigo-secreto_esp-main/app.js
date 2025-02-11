// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value;

    //Validar entrada
    if (nombreAmigo.trim() === ''){
        limpiarCaja();
        alert ('Por favor, inserte un nombre.');
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

function agregarLista(){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}