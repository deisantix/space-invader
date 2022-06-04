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
