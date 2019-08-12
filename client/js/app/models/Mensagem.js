class Mensagem {
    
    // Passando texto='', significa que caso não seja inicializada a string será ''
    constructor(texto='') {
        this._texto = texto;
    }

    get texto() {
        return this._texto;
    }

    set texto(texto) {
        this._texto = texto;
    }
}