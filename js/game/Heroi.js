import Bola from "./Bola.js";
import Teclado from "./Teclado.js";

class Heroi {

    OLHANDO_DIREITA = 1;
    OLHANDO_ESQUERDA = 2;

    context;
    teclado;
    animacao;
    x = 0;
    y = 0;
    
    direcaoVirado;

    constructor(context, teclado, animacao) {
        this.context = context;
        this.teclado = teclado;
        this.animacao = animacao;

        this.direcaoVirado = this.OLHANDO_DIREITA;
    }

    atualizar() {
        if(this.teclado.pressionada(Teclado.SETA_ESQUERDA) && this.x > 0) {
            this.direcaoVirado = this.OLHANDO_ESQUERDA;
            this.x -= 10;
        } else if(this.teclado.pressionada(Teclado.SETA_DIREITA) && this.x < (this.context.canvas.width - 20)) {
            this.direcaoVirado = this.OLHANDO_DIREITA;
            this.x += 10;
        } 
    }

    desenhar() {
        this.context.fillRect(this.x, this.y, 20, 50);
    }

    atirar() {
        const tiro = new Bola(this.context);
        tiro.x = this.x + 10;
        tiro.y = this.y + 10;
        tiro.raio = 5;
        tiro.cor = 'red';

        if(this.direcaoVirado === this.OLHANDO_ESQUERDA) {
            tiro.velocidadeX = -20;
        } else {
            tiro.velocidadeX = 20;
        }
        this.animacao.novoSprite(tiro);
    }
}

export default Heroi;
