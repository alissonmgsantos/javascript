class ListaNegociacoes {

    constructor(atualizaView) {
        this.__negociacoes = [];
        this._atualizaView = atualizaView;
    }

    adiciona(negociacao) {
        this.__negociacoes.push(negociacao);
        this._atualizaView(this);
    }

    esvazia() {
        this.__negociacoes = [];
        this._atualizaView(this);
    }

    get negociacoes() {
        return [].concat(this.__negociacoes); //Criando uma copia da lista para evitar que o usuário manipule os dados
    }
}