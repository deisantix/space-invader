class Teclado {

    static SETA_ESQUERDA = 'ArrowLeft';
    static SETA_DIREITA = 'ArrowRight';
    static ESPACO = ' ';

    elemento;
    pressionadas = {};
    disparadas = {};
    funcoesDisparo = {};

    constructor(elemento) {
        this.elemento = elemento;

        const teclado = this;
        this.elemento.addEventListener('keydown', function(ev) {
            const tecla = ev.key;
            teclado.pressionadas[tecla] = true;
            console.log(teclado.pressionadas);

            if(teclado.funcoesDisparo[tecla] && !teclado.disparadas[tecla]) {
                teclado.disparadas[tecla] = true;
                teclado.funcoesDisparo[tecla]();
            }
        });
        this.elemento.addEventListener('keyup', function(ev) {
            teclado.pressionadas[ev.key] = false;
            teclado.disparadas[ev.key] = false;
        });
    }

    pressionada(tecla) {
        return this.pressionadas[tecla];
    }

    disparou(tecla, callback) {
        this.funcoesDisparo[tecla] = callback;
    }

}

export default Teclado;
