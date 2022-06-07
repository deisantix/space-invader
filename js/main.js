import Carro from "./game/Carro.js";

const canvas = document.getElementById('canvas-animacao');
const context = canvas.getContext('2d');


context.fillStyle = 'red';
context.fillRect(350, 350, 100, 100);


context.lineWidth = 3;
context.strokeStyle = 'blue';
context.strokeRect(350, 350, 100, 100);


context.beginPath();
context.moveTo(75, 250);
context.lineTo(150, 50);
context.lineTo(225, 250);
context.lineTo(50, 120);
context.lineTo(250, 120);
context.lineTo(75, 250);

context.lineWidth = 2;
context.strokeStyle = 'red';

context.stroke();


context.fillStyle = 'gray';
context.strokeStyle = 'black';
context.lineWidth = 2;

context.beginPath();
context.arc(320, 80, 60, 90*Math.PI/180, 270*Math.PI/180, false);
context.fill();
context.stroke();


context.beginPath();
context.arc(350, 80, 60, 90*Math.PI/180, 270*Math.PI/180, true);
context.fill();
context.stroke();


context.beginPath();
context.arc(500, 80, 60, 0, 2*Math.PI);
context.fill();
context.stroke();


const ovni = new Image();
ovni.src = '../img/ovni.png';
ovni.onload = function() {
    let x = 20;
    for(let i = 1; i <= 5; i++) {
        context.drawImage(ovni, x, 600, 64, 32);
        x += 160;
    }
}


const explosao = new Image();
explosao.src = './img/explosao.png';
explosao.onload = function() {
    context.drawImage(
        explosao,
        80, 10, 60, 65,
        170, 580, 90, 95
    );
}


context.fillStyle = 'green';
context.fillRect(50, 300, 25, 25);

context.save();

context.fillStyle = 'purple';
context.fillRect(100, 320, 25, 25);

context.restore();

context.fillRect(150, 300, 25, 25);

const raio = 10;
let velocidade = 20;
let x = 190;
let y = 700;

let anterior = new Date().getTime();

function mexerBola() {
    let agora = new Date().getTime();
    let decorrido = agora - anterior;

    context.clearRect(x-20, y - 20, 40, 40);
    
    context.beginPath();
    context.arc(x, y, raio, 0, Math.PI*2);
    context.fill();
    
    x += velocidade * decorrido / 1000;
    y -= velocidade * decorrido / 500;
    
    anterior = agora;
    requestAnimationFrame(mexerBola);
}

requestAnimationFrame(mexerBola);

const meuCarro = new Carro('vermelho', 250);
const oponente = new Carro('azul', 300);
meuCarro.acelerar();

// document.open();
// document.write(`${meuCarro.cor}: ${meuCarro.velocAtual}`);
// document.write('<br>');
// document.write(`${oponente.cor}: ${oponente.velocAtual}`);
