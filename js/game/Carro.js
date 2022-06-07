class Carro {
    cor;
    velocMaxima;
    velocAtual;

    constructor(cor, velocMaxima) {
        this.cor = cor;
        this.velocMaxima = velocMaxima;
        this.velocAtual = 0;
    }

    acelerar() {
        this.velocAtual += 10;
    }
}

export default Carro;
