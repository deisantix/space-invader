import Animacao from "./game/Animacao.js";
import Teclado from "./game/Teclado.js";
import Heroi from "./game/Heroi.js";

const canvas = document.getElementById('canvas-animacao');
const context = canvas.getContext('2d');

const animacao = new Animacao(context);
const teclado = new Teclado(document);

const heroi = new Heroi(context, teclado, animacao);
heroi.x = 0;
heroi.y = 100;
animacao.novoSprite(heroi);

teclado.disparou(Teclado.ESPACO, function() {
    heroi.atirar();
});
animacao.ligar();
