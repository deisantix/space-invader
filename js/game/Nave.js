import Teclado from "./Teclado.js";
import Tiro from "./Tiro.js";


class Nave {

    animacao;
    context;
    teclado;
    imagem;
    x = 0;
    y = 0;
    velocidade = 0;

    constructor(context, teclado, imagem) {
        this.context = context;
        this.teclado = teclado;
        this.imagem = imagem;
    }

    atualizar() {
        if (this.teclado.pressionada(Teclado.SETA_ESQUERDA) && (this.x - this.imagem.width)  > 0) {
            this.x -= this.velocidade;
        } 
        if (this.teclado.pressionada(Teclado.SETA_DIREITA) && (this.x + this.imagem.width) < this.context.canvas.width) {
            this.x += this.velocidade;
        } 
        if (this.teclado.pressionada(Teclado.SETA_CIMA) && (this.y - this.imagem.height) > 0) {
            this.y -= this.velocidade;
        }
        if (this.teclado.pressionada(Teclado.SETA_BAIXO) && this.y < (this.context.canvas.height - this.imagem.height)) {
            this.y += this.velocidade;
        }
    }

    desenhar() {
        this.context.drawImage(this.imagem, this.x, this.y, this.imagem.width, this.imagem.height);
    }

    atirar() {
        const nave = this;
        
        const t = new Tiro(this.context, nave);
        this.animacao.novoSprite(t);
    }

}

export default Nave;
