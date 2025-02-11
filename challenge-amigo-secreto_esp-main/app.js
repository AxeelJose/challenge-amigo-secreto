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
    }
}

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}