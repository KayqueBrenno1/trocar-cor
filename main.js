//Torna o js mais rígido com seu código
'use strict'

//Criação de variável
const botaoTrocarCor = document.getElementById('botao-trocar-cor')

//Função para trocar a cor de fundo
function trocarCor() {
    //Pega a cor informada pelo usuário
    const corUsuario = document.getElementById('cor-usuario').value

    if (corUsuario == 'marrom') {
        document.documentElement.style.setProperty('--color-bg', 'brown')
    } else if (corUsuario == 'lilas' || corUsuario == 'lilás') {
        document.documentElement.style.setProperty('--color-bg', '#A47DAB')
    } else if (corUsuario == 'rosa-choque') {
        document.documentElement.style.setProperty('--color-bg', 'hotpink')
    } else if (corUsuario == 'azul') {
        document.documentElement.style.setProperty('--color-bg', 'blue')
    } else {
        document.documentElement.style.setProperty('--color-bg', corUsuario)
    }

}

botaoTrocarCor.addEventListener('click', trocarCor)