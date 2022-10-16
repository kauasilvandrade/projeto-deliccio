const btnClose = document.querySelector('.btn-close');
const listaMenu = document.querySelector('.lista-navegacao');

// MUDAR TAMANHO DE TELA
function mudouTamanho() {
    if (listaMenu.classList.contains('ativado'), btnClose.classList.contains('ativado')) {
        listaMenu.classList.remove('ativado');
        btnClose.classList.remove('ativado');
    }
}

// ABRIR MENU
function abrirMenu() {
    if (listaMenu.classList.contains('ativado'), btnClose.classList.contains('ativado')) {
        listaMenu.classList.remove('ativado');
        btnClose.classList.remove('ativado');
    } else {
        listaMenu.classList.add('ativado');
        btnClose.classList.add('ativado');
    }
}    

// FECHAR MENU 
function fecharMenu() {
    if (listaMenu.classList.contains('ativado'), btnClose.classList.contains('ativado')) {
        listaMenu.classList.remove('ativado');
        btnClose.classList.remove('ativado');
    } else {
        listaMenu.classList.add('ativado');
        btnClose.classList.add('ativado');
    }
}