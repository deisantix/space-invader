class Fundo {

    context;
    imagem;
    velocidade = 0;
    posicaoEmenda = 0;
    
    constructor(context, imagem) {
        this.context = context;
        this.imagem = imagem;
    }

    atualizar() {
        this.posicaoEmenda += this.velocidade;

        if (this.posicaoEmenda > this.imagem.height) {
            this.posicaoEmenda = 0;
        }
    }

    desenhar() {
        const img = this.imagem;

        let posicaoY = this.posicaoEmenda - img.height;
        this.context.drawImage(img, 0, posicaoY, img.width, img.height);

        posicaoY = this.posicaoEmenda;
        this.context.drawImage(img, 0, posicaoY, img.width, img.height);
    }

}

export default Fundo;
