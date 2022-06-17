class Spritesheet {

    context;
    imagem;
    numLinhas;
    numColunas;
    ultimoTempo;

    larguraQuadro;
    alturaQuadro;

    intervalo = 0;
    linha = 0;
    coluna = 0;

    constructor(context, imagem, linhas, colunas) {
        this.context = context;
        this.imagem = imagem;
        this.numLinhas = linhas;
        this.numColunas = colunas;
    }

    proximoQuadro() {
        const agora = new Date().getTime();

        if (!this.ultimoTempo) {
            this.ultimoTempo = agora;
        }
        if (agora - this.ultimoTempo < this.intervalo) {
            return;
        }

        if (this.coluna < this.numColunas - 1) {
            this.coluna++;
        } else {
            this.coluna = 0;
        }
        this.ultimoTempo = agora;
    }

    desenhar(x, y) {
        this.larguraQuadro = this.imagem.width / this.numColunas;
        this.alturaQuadro = this.imagem.height / this.numLinhas;

        this.context.drawImage(
            this.imagem,
            this.larguraQuadro * this.coluna,
            this.alturaQuadro * this.linha,
            this.larguraQuadro,
            this.alturaQuadro,
            x,
            y,
            this.larguraQuadro,
            this.alturaQuadro
        );
    }

}

export default Spritesheet;
