class Animacao {

    context;
    sprites;
    estaLigado;

    constructor(context) {
        this.context = context;
        this.sprites = [];
        this.estaLigado = false;
    }

    novoSprite(sprite) {
        this.sprites.push(sprite);
    }

    ligar() {
        this.estaLigado = true;
        this.proximoFrame();
    }

    desligar() {
        this.estaLigado = false;
    }

    proximoFrame() {
        if(!this.estaLigado) return;
        this.limparTela();

        for(let i in this.sprites) {
            const sprite = this.sprites[i]
            sprite.atualizar();

            if(
                sprite.x < 0 || sprite.x > this.context.canvas.width ||
                sprite.y < 0 || sprite.y > this.context.canvas.height
            ) {
                const index = this.sprites.indexOf(sprite);
                if(index > -1) {
                    this.sprites.splice(index, 1);
                }
            }
        }
        for(let i in this.sprites) {
            this.sprites[i].desenhar();
        }

        const animacao = this;
        requestAnimationFrame(function() {
            animacao.proximoFrame();            
        });
    }

    limparTela() {
        const ctx = this.context;
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }

}

export default Animacao;
