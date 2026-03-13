

function enviarWhats(event) {

const nome = document.getElementById('nome').value;
const mensagem = document.getElementById('mensagem').value;
const telefone = '5521985527095'

const texto = `Olá, meu nome é ${nome} e gostaria de entrar em contato. Minha mensagem é: ${mensagem}`;
const msgFormatada = encodeURIComponent(texto);

const wtspLink = `https://wa.me/${telefone}?text=${msgFormatada}`;

window.open(wtspLink, '_blank');

}

function AbrirProjeto() {
    
    const projeto01 = ' ;

    window.open(projeto01,'_blank);

}