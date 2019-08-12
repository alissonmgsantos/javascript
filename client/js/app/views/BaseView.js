class BaseView {

    constructor(elemento) {
        this._elemento = elemento;
    }

    template(model) { 
        throw new Error('O método template deve ser implementado');
    }

     // Exibirá a tabela no local definido como marcação, na atualização da tela
     update(model) {
        return  this._elemento.innerHTML = this.template(model);
      }
}