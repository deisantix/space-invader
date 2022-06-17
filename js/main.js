import Sonic from "./game/Sonic.js";
import Teclado from './game/Teclado.js';
import Animacao from './game/Animacao.js';

const canvas = document.getElementById('canvas-animacao');
const context = canvas.getContext('2d');

const teclado = new Teclado(document);
const animacao = new Animacao(context);

const imgSonic = new Image();
imgSonic.src = '../imgs/spritesheet.png';

const sonic = new Sonic(context, teclado, imgSonic);
sonic.x = 0;
sonic.y = 200;
animacao.novoSprite(sonic);

imgSonic.onload = function() {
    animacao.ligar();
}
