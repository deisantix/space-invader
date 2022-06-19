import Ovni from "./Ovni.js";
import Teclado from "./Teclado.js";
import Tiro from "./Tiro.js";


class Nave {

    animacao;
    colisor;
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
        this.colisor.novoSprite(t);
    }

    retornarRetangulosDeColisao() {
        const rets = [
            {x: this.x + 2, y: this.y + 19, largura: 9, altura: 13},
            {x: this.x + 13, y: this.y + 3, largura: 10, altura: 33},
            {x: this.x + 25, y: this.y + 19, largura: 9, altura: 13}
        ];
        // const ctx = this.context;

        // for (let i in rets) {
        //     const r = rets[i];

        //     ctx.save();
        //     ctx.strokeStyle = 'yellow';
        //     ctx.strokeRect(r.x, r.y, r.largura, r.altura);
        //     ctx.restore();
        // }
        return rets;
    }

    colidirCom(sprite) {
        if (sprite instanceof Ovni) {
            this.animacao.desligar();
            alert('GAME OVER');
        }
    }

}

export default Nave;
