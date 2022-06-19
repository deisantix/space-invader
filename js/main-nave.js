import Teclado from './game/Teclado.js';
import Animacao from './game/Animacao.js';
import Nave from './game/Nave.js';


const canvas = document.getElementById('canvas-nave');
const context = canvas.getContext('2d');

const teclado = new Teclado(document);
const animacao = new Animacao(context);

const imgNave = new Image();
imgNave.src = '../imgs/nave.png';

const nave = new Nave(context, teclado, imgNave);
animacao.novoSprite(nave);

imgNave.onload = function() {
    nave.x = (canvas.width / 2) - (imgNave.width / 2);
    nave.y = canvas.height - imgNave.height;
    nave.velocidade = 8;

    animacao.ligar();
}