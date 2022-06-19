import Animacao from './game/Animacao.js';
import Fundo from './game/Fundo.js';


const canvas = document.getElementById('canvas-animacao');
const context = canvas.getContext('2d');

let carregadas = 0;
let total = 3;

const imgEspaco = new Image();
imgEspaco.src = '../imgs/fundo/fundo-espaco.png';

const imgEstrelas = new Image();
imgEstrelas.src = '../imgs/fundo/fundo-estrelas.png';

const imgNuvens = new Image();
imgNuvens.src = '../imgs/fundo/fundo-nuvens.png';


function iniciar() {
    const fundoEspaco = new Fundo(context, imgEspaco);
    const fundoEstrelas = new Fundo(context, imgEstrelas);
    const fundoNuvens = new Fundo(context, imgNuvens);

    fundoEspaco.velocidade = 3;
    fundoEstrelas.velocidade = 7;
    fundoNuvens.velocidade = 10;

    const animacao = new Animacao(context);
    animacao.novoSprite(fundoEspaco);
    animacao.novoSprite(fundoEstrelas);
    animacao.novoSprite(fundoNuvens);

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


