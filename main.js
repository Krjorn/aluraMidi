// FEITO EM AULA

function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if(elemento && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log('Elemento não encontrado ou seletor inválido!');
    }
}

function verificaClique() {
    contaClique++;
    if(contaClique >= 5) {
        const dica = document.querySelector('p');
        dica.style.visibility = 'visible';
    }
}

const listaTeclas = document.querySelectorAll('.tecla');
let contaClique = 0;

for(i = 0; i < listaTeclas.length; i++) {
    const tecla = listaTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
        verificaClique();
    }

    tecla.onkeydown = function (evento) {
        if(evento.code === 'Enter' || evento.code === 'Space') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}

// USAR NUMPAD COMO INPUT PARA MIDI

const listaAudios = document.querySelectorAll('audio');
const listaCodigos = ['Numpad7', 'Numpad8', 'Numpad9', 'Numpad4', 'Numpad5', 'Numpad6', 'Numpad1', 'Numpad2', 'Numpad3'];

document.onkeydown = usaNumpad;

document.onkeyup = usaNumpad;

function usaNumpad(evento) {
    for(let i = 0; i < listaTeclas.length; i++) {
        const tecla = listaTeclas[i];
        const audioId = `#${listaAudios[i].id}`;
        const codigo = listaCodigos[i];

        if(evento.type === 'keydown') {
            if(evento.code === codigo) {
                tocaSom(audioId);
                tecla.classList.add('ativa');
            }
        } else {
            tecla.classList.remove('ativa');
        }
    }
}