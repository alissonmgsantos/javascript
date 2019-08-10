class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document); // Tornando a chamada do document.querySelector mais clear
        this._inputData = $('#data');
        this._inputQunatidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event) {
        event.preventDefault();
       let data = DateHelper.textoParaData(this._inputData.value);
        // Passando os dados do formulário para criação da negociação
        let negociacao = new Negociacao(
            data,
            this._inputQunatidade.value,
            this._inputValor.value
        )
            console.log(negociacao);
            
    }
}
