class Tiro {

    animacao;
    colisor;
    context;
    nave;

    cor;
    largura;
    altura;
    x;
    y;
    velocidade;

    constructor(context, nave) {
        this.context = context;
        this.nave = nave;

        this.cor = 'red';
        this.largura = 4;
        this.altura = 20;
        this.x = nave.x + (nave.imagem.width / 2) - (this.largura / 2);
        this.y = nave.y - this.altura;
        this.velocidade = 10;
    }

    atualizar() {
        this.y -= this.velocidade;

        if (this.y < -this.altura) {
            this.animacao.excluirSprite(this);
            this.colisor.excluirSprite(this);
        }
    }

    desenhar() {
        const ctx = this.context;

        ctx.save();
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x, this.y, this.largura, this.altura);
        ctx.restore();
    }

    retornarRetangulosDeColisao() {
        return [
            {x: this.x, y: this.y, largura: this.largura, altura: this.altura}
        ];
    }

    colidirCom(sprite) {

    }
    
}

export default Tiro;