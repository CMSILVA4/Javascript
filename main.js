
console.log('Olá mundo!');

let novoElemento = document.createElement('h1');
novoElemento.innerText = 'Hello, World! English! (Inglês) Ok?!';
document.body.appendChild(novoElemento);

novoElemento.style.backgroundColor = 'blue';
novoElemento.style.color = 'yellow';
novoElemento.style.padding = '20px';
novoElemento.style.textAlign = 'center';
novoElemento.style.fontFamily = 'Arial';

let horaAtual = new Date().toLocaleTimeString();
let relogio = document.createElement('p');
relogio.innerText = `Agora são ${horaAtual}`;
relogio.style.fontSize = '18px';
relogio.style.fontWeight = 'bold';
relogio.style.textAlign = 'center';
document.body.appendChild(relogio);

let mensagem = document.createElement('div');
mensagem.innerText = 'Você está aprendendo JavaScript, parabéns! 🎉';
mensagem.style.color = '#333';
mensagem.style.marginTop = '30px';
mensagem.style.textAlign = 'center';
mensagem.style.fontSize = '20px';
mensagem.style.opacity = '0';
mensagem.style.transition = 'opacity 2s ease-in-out';
document.body.appendChild(mensagem);

setTimeout(() => {
  mensagem.style.opacity = '1';
}, 2000);
