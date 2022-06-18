import Bola from './game/Bola.js';
import Colisor from './game/Colisor.js';

const canvas = document.getElementById('canvas-animacao');
const context = canvas.getContext('2d');

function animar() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    b1.atualizar();
    b2.atualizar();

    b1.desenhar();
    b2.desenhar();

    colisor.processar();

    requestAnimationFrame(animar);
}

const b1 = new Bola(context);
b1.x = 200;
b1.y = 200;
b1.velocidadeX = 10;
b1.velocidadeY = -5;
b1.cor = 'blue';
b1.raio = 20;

const b2 = new Bola(context);
b2.x = 300;
b2.y = 300;
b2.velocidadeX = -5;
b2.velocidadeY = 10;
b2.cor = 'red';
b2.raio = 30;

const colisor = new Colisor();
colisor.novoSprite(b1);
colisor.novoSprite(b2);

requestAnimationFrame(animar);
