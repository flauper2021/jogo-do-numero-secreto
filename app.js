let listaDeNumerosSorteados = [];
let limiteNumeroSorteado = parseInt(prompt('Digite um valor máximo:'));
let numeroSecreto = gerarNumeroAleatorio();
exibirMensagensIniciais();
let tentativas = 1;


//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto!';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Insira um numero de 1 a 10.';

// transformando o inserção em uma função:

function exibirTextoTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagensIniciais(){
    exibirTextoTela('h1', 'Jogo do número secreto!');
    exibirTextoTela('p', 'Escolha um número de 1 a ' + limiteNumeroSorteado + '!');
}

function verificarChute(){
    let chute = document.querySelector('input').value;
    console.log(tentativas);
    console.log(listaDeNumerosSorteados);

    if(document.querySelector('input').value <= 0 || document.querySelector('input') == ' ' || document.querySelector('input').value > limiteNumeroSorteado){
        tentativas = tentativas;
        exibirTextoTela('p', 'Escolha um número válido!');

    }else if(chute == numeroSecreto){        
        
        let palavraTentativas = tentativas == 1? 'tentativa' : 'tentativas';
        let mensagemTentativas = `Você acertou o numero secreto com ${tentativas} ${palavraTentativas}!`;

        exibirTextoTela('h1', 'ACERTOU!');
        exibirTextoTela('p', mensagemTentativas);

        document.getElementById('reiniciar').removeAttribute('disabled');
        
    }else{
        if(chute > numeroSecreto){
            exibirTextoTela('p', 'O numero secreto é menor!');
        }else{
            exibirTextoTela('p', 'O numero secreto é maior!');
        }
        //tentativas = tentativas + 1;
        tentativas++;
        limparCampo();
    }   
    
}

function gerarNumeroAleatorio(){
    let numeroSorteado = parseInt(Math.random() * limiteNumeroSorteado + 1);
    let quantidadeDeNumerosSorteados = listaDeNumerosSorteados.length;

    if(quantidadeDeNumerosSorteados == limiteNumeroSorteado){
        listaDeNumerosSorteados =[];
    }

    if(listaDeNumerosSorteados.includes(numeroSorteado)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroSorteado);
        console.log(listaDeNumerosSorteados);
        return numeroSorteado;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';    
}

function reinicairJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    exibirMensagensIniciais();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
    
}
