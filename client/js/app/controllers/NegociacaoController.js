class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document); // Tornando a chamada do document.querySelector mais clear
        this.inputData = $('#data');
        this.inputQunatidade = $('#quantidade');
        this.inputValor = $('#valor');
    }

    adiciona(event) {
        event.preventDefault();
       console.log( this.inputData.value);
       
    }
}
