import Animacao from './game/Animacao.js';
import Teclado from './game/Teclado.js';
import Fundo from './game/Fundo.js';
import Nave from './game/Nave.js';


const canvas = document.getElementById('canvas-animacao');
const context = canvas.getContext('2d');

const teclado = new Teclado(document);

let carregadas = 0;
let total = 4;

const imgEspaco = new Image();
imgEspaco.src = '../imgs/fundo/fundo-espaco.png';

const imgEstrelas = new Image();
imgEstrelas.src = '../imgs/fundo/fundo-estrelas.png';

const imgNuvens = new Image();
imgNuvens.src = '../imgs/fundo/fundo-nuvens.png';

const imgNave = new Image();
imgNave.src = '../imgs/nave.png';


function iniciar() {
    const animacao = new Animacao(context);

    const fundoEspaco = new Fundo(context, imgEspaco);
    fundoEspaco.velocidade = 3;
    animacao.novoSprite(fundoEspaco);

    const fundoEstrelas = new Fundo(context, imgEstrelas);
    fundoEstrelas.velocidade = 7;
    animacao.novoSprite(fundoEstrelas);

    const fundoNuvens = new Fundo(context, imgNuvens);
    fundoNuvens.velocidade = 10;
    animacao.novoSprite(fundoNuvens);

    const nave = new Nave(context, teclado, imgNave);
    nave.x = (canvas.width / 2) - (imgNave.width / 2);
    nave.y = canvas.height - imgNave.height;
    nave.velocidade = 8;
    animacao.novoSprite(nave);

    teclado.disparou(Teclado.ESPACO, function() {
        nave.atirar();
    });

    animacao.ligar();
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


