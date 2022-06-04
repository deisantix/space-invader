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
            this.sprites[i].atualizar();
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
