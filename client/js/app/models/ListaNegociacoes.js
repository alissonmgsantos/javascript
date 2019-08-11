class ListaNegociacoes {

    constructor() {
        this.__negociacoes = [];
    }

    adiciona(negociacao) {
        this.__negociacoes.push(negociacao);
    }

    get negociacoes() {
        return [].concat(this.__negociacoes); //Criando uma copia da lista para evitar que o usuário manipule os dados
    }
}