const Gatos = require("../Arquivos/Gatos");
const Cachorros = require("../Arquivos/cachorros");

module.exports = function GeradorDeLink(indicador) {


    function gerarNumeroAleatorio() {
        return Math.floor(Math.random() * 10) + 1; 
    }

    if (indicador === 1) {
        const numeroAleatorio = gerarNumeroAleatorio();
        const link = Cachorros[numeroAleatorio];
        return link;
    }

    else if (indicador === 2) {
        const numeroAleatorio = gerarNumeroAleatorio();
        const link = Gatos[numeroAleatorio];
        return link;
    }
}