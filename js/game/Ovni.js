import Tiro from "./Tiro.js";

class Ovni {

    animacao;
    colisor;
    context;
    imagem;
    x = 0;
    y = 0;
    velocidade = 0;

    constructor(context, imagem) {
        this.context = context;
        this.imagem = imagem;
    }

    atualizar() {
        this.y += this.velocidade;

        if (this.y > this.context.canvas.height) {
            this.animacao.excluirSprite(this);
            this.colisor.excluirSprite(this);
        }
    }

    desenhar() {
        const ctx = this.context;
        const img = this.imagem;

        ctx.drawImage(img, this.x, this.y, img.width, img.height);
    }

    retornarRetangulosDeColisao() {
        const rets = [
            {x: this.x + 20, y: this.y + 1, largura: 25, altura: 10},
            {x: this.x + 2, y: this.y + 11, largura: 60, altura: 12},
            {x: this.x + 20, y: this.y + 23, largura: 25, altura: 7}
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
        if (sprite instanceof Tiro) {
            this.animacao.excluirSprite(this);
            this.colisor.excluirSprite(this);

            this.animacao.excluirSprite(sprite);
            this.colisor.excluirSprite(sprite);
        }
    }

} 

export default Ovni;
