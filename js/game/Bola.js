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

}

export default Bola;
