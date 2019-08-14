class ListaNegociacoes {

    constructor(contexto, atualizaView) {
        this.__negociacoes = [];
        this._atualizaView = atualizaView;
        this._contexto = contexto;
    }

    adiciona(negociacao) {
        this.__negociacoes.push(negociacao);
        Reflect.apply(this._atualizaView, this._contexto, [this]);
    }

    esvazia() {
        this.__negociacoes = [];
        Reflect.apply(this._atualizaView, this._contexto, [this]);
    }

    get negociacoes() {
        return [].concat(this.__negociacoes); //Criando uma copia da lista para evitar que o usuário manipule os dados
    }
}