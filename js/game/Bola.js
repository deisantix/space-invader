class Bola {

    context;
    x = 0;
    y = 0;
    velocidadeX = 0;
    velocidadeY = 0;

    cor = 'black';
    raio = 10;

    constructor(context) {
        this.context = context;
    }

    atualizar() {
        const ctx = this.context;

        if(this.x < this.raio || this.x > (ctx.canvas.width - this.raio)) {
            this.velocidadeX *= -1;
        }

        if(this.y < this.raio || this.y > (ctx.canvas.height - this.raio)) {
            this.velocidadeY *= -1;
        }

        this.x += this.velocidadeX;
        this.y += this.velocidadeY;
    }

    desenhar() {
        const ctx = this.context;
        ctx.save();

        ctx.fillStyle = this.cor;

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.raio, 0, (2 * Math.PI), false);
        ctx.fill();

        ctx.restore();
    }

    retornarRetangulosDeColisao() {
        return [
            {
                x: this.x - this.raio,
                y: this.y - this.raio,
                largura: this.raio * 2,
                altura: this.raio * 2
            }
        ];
    }

    colidirCom(sprite) {
        if (this.x < sprite.x) {
            this.velocidadeX = -Math.abs(this.velocidadeX);
        } else {
            this.velocidadeX = Math.abs(this.velocidadeX);
        }

        if (this.y < sprite.y) {
            this.velocidadeY = -Math.abs(this.velocidadeY);
        } else {
            this.velocidadeY = Math.abs(this.velocidadeY);
        }
    }

}

export default Bola;
