class ListaNegociacoes {

    constructor() {
        this.__negociacoes = [];
    }

    adiciona(negociacao) {
        this.__negociacoes.push(negociacao);
    }

    get negociacoes() {
        return this.__negociacoes;
    }
}