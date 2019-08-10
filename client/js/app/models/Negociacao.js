class Negociacao {

    // Atributos com _  é um padrão de nomeclatura para informar que só podem ser acessados pela propria classe.

    constructor(data, quantidade, valor) {

        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;

        // Tornando o objeto imutável
        Object.freeze(this);
    }

    // Criando propriedades getter de leitura, será o método mas acessado como atríbuto
    get data() {
        return new Date(this._data.getTime());
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

    get volume() {
        return this._quantidade * this._valor;
    }
}