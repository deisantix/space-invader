import Animacao from './game/Animacao.js';
import Teclado from './game/Teclado.js';
import Fundo from './game/Fundo.js';
import Nave from './game/Nave.js';
import Colisor from './game/Colisor.js';
import Ovni from './game/Ovni.js';


let carregadas = 0;
let total = 5;

const imgEspaco = new Image();
imgEspaco.src = '../imgs/fundo/fundo-espaco.png';

const imgEstrelas = new Image();
imgEstrelas.src = '../imgs/fundo/fundo-estrelas.png';

const imgNuvens = new Image();
imgNuvens.src = '../imgs/fundo/fundo-nuvens.png';

const imgNave = new Image();
imgNave.src = '../imgs/nave.png';

const imgOvni = new Image();
imgOvni.src = '../imgs/ovni.png';

const canvas = document.getElementById('canvas-animacao');
const context = canvas.getContext('2d');

const teclado = new Teclado(document);
const animacao = new Animacao(context);
const colisor = new Colisor();


function novoOvni() {
    const ovni = new Ovni(context, imgOvni);

    ovni.x = Math.floor(Math.random() * (canvas.width - imgOvni.width + 1));
    ovni.y = -imgOvni.height;
    ovni.velocidade = Math.floor(5 + Math.random() * (20 - 5 + 1));

    animacao.novoSprite(ovni);
    colisor.novoSprite(ovni);
}

function iniciar() {
    const fundoEspaco = new Fundo(context, imgEspaco);
    fundoEspaco.velocidade = 1;
    animacao.novoSprite(fundoEspaco);

    const fundoEstrelas = new Fundo(context, imgEstrelas);
    fundoEstrelas.velocidade = 3;
    animacao.novoSprite(fundoEstrelas);

    const fundoNuvens = new Fundo(context, imgNuvens);
    fundoNuvens.velocidade = 7;
    animacao.novoSprite(fundoNuvens);

    const nave = new Nave(context, teclado, imgNave);
    nave.x = (canvas.width / 2) - (imgNave.width / 2);
    nave.y = canvas.height - imgNave.height;
    nave.velocidade = 8;
    animacao.novoSprite(nave);

    colisor.novoSprite(nave);
    animacao.novoProcessamento(colisor);

    teclado.disparou(Teclado.ESPACO, function() {
        nave.atirar();
    });

    animacao.ligar();

    setInterval(novoOvni, 1000);
}

function carregando() {
    carregadas++;
    if (carregadas === total) {
        iniciar();
    }
}


imgEspaco.onload = carregando;
imgEstrelas.onload = carregando;
imgNuvens.onload = carregando;
imgNave.onload = carregando;
imgOvni.onload = carregando;


