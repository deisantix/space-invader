class Animacao {

    context;
    sprites = [];
    estaLigado = false;
    processamentos = [];
    spritesExcluir = [];
    processamentosExcluir = [];

    constructor(context) {
        this.context = context;
    }

    novoSprite(sprite) {
        this.sprites.push(sprite);
        sprite.animacao = this;;
    }

    novoProcessamento(processamento) {
        this.processamentos.push(processamento);
        processamento.animacao = this;
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
        // this.limparTela();

        for(let i in this.sprites) {
            const sprite = this.sprites[i]
            sprite.atualizar();

            // if(
            //     sprite.x < 0 || sprite.x > this.context.canvas.width ||
            //     sprite.y < 0 || sprite.y > this.context.canvas.height
            // ) {
            //     const index = this.sprites.indexOf(sprite);
            //     if(index > -1) {
            //         this.sprites.splice(index, 1);
            //     }
            // }
        }
        for(let i in this.sprites) {
            this.sprites[i].desenhar();
        }
        for (var i in this.processamentos) {
            this.processamentos[i].processar();
        }

        this.processarExclusoes();

        const animacao = this;
        requestAnimationFrame(function() {
            animacao.proximoFrame();            
        });
    }

    limparTela() {
        const ctx = this.context;
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }

    excluirSprite(sprite) {
        this.spritesExcluir.push(sprite);
    }

    excluirProcessamento(processamento) {
        this.processamentosExcluir.push(processamento);
    }

    processarExclusoes() {
        const novoSprites = [];
        const novoProcessamentos = [];

        for (let i in this.sprites) {
            if (this.spritesExcluir.indexOf(this.sprites[i]) === -1) {
                novoSprites.push(this.sprites[i]);
            }
        }

        for (let i in this.processamentos) {
            if (this.processamentosExcluir.indexOf(this.processamentos[i]) === -1) {
                novoProcessamentos.push(this.processamentos[i]);
            }
        }
        this.spritesExcluir = [];
        this.processamentosExcluir = [];

        this.sprites = novoSprites;
        this.processamentos = novoProcessamentos;
    }

}

export default Animacao;
