import Spritesheet from "./Spritesheet.js";
import Teclado from "./Teclado.js";

class Sonic {

    SONIC_DIREITA = 1;
    SONIC_ESQUERDA = 2;

    context;
    teclado;
    sheet;

    andando;
    direcao;
    velocidade;

    constructor(context, teclado, imagem) {
        this.context = context;
        this.teclado = teclado;
        this.x = 0;
        this.y = 0;

        this.sheet = new Spritesheet(context, imagem, 3, 8);
        this.sheet.intervalo = 60;

        this.andando = false;
        this.direcao = this.SONIC_DIREITA;
        this.velocidade = 10;
    }

    atualizar() {
        if (this.teclado.pressionada(Teclado.SETA_DIREITA)) {
            if (!this.andando || this.direcao != this.SONIC_DIREITA) {
                this.sheet.linha = 1;
                this.sheet.coluna = 0;
            }

            this.andando = true;
            this.direcao = this.SONIC_DIREITA;

            this.sheet.proximoQuadro();
            if ((this.x + this.sheet.larguraQuadro) < this.context.canvas.width) {
                this.x += this.velocidade;
            }

        } else if (this.teclado.pressionada(Teclado.SETA_ESQUERDA)) {
            if (!this.andando || this.direcao != this.SONIC_ESQUERDA) {
                this.sheet.linha = 2;
                this.sheet.coluna = 0;
            }

            this.andando = true;
            this.direcao = this.SONIC_ESQUERDA;

            this.sheet.proximoQuadro();
            if ((this.x - this.sheet.larguraQuadro) > 0) {
                this.x -= this.velocidade;
            }

        } else {
            if (this.direcao === this.SONIC_DIREITA) {
                this.sheet.coluna = 0;
            } else if (this.direcao === this.SONIC_ESQUERDA) {
                this.sheet.coluna = 1;
            }

            this.sheet.linha = 0;
            this.andando = false;
        }
    }

    desenhar() {
        this.sheet.desenhar(this.x, this.y);
    }

}

export default Sonic;
