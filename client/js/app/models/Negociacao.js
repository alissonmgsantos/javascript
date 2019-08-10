class Negociacao {

    // Atributos com _  é um padrão de nomeclatura para informar que só podem ser acessados pela propria classe.

    constructor(data, quantidade, valor) {

        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    getData() {
        return this._data;
    }

    getQuantidade() {
        return this._quantidade;
    }

    getValor() {
        return this._valor;
    }

    getVolume() {
        return this._quantidade * this._valor;
    }
}