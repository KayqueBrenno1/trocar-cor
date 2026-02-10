//Torna o js mais rígido com seu código
'use strict'

//Criação de variável
const botaoTrocarCor = document.getElementById('botao-trocar-cor')

//Função para trocar a cor de fundo
function trocarCor() {
    //Pega a cor informada pelo usuário
    const corUsuario = document.getElementById('cor-usuario').value
    document.documentElement.style.setProperty('--color-bg', corUsuario)

}

botaoTrocarCor.addEventListener('click', trocarCor)