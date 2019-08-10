class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document); // Tornando a chamada do document.querySelector mais clear
        this._inputData = $('#data');
        this._inputQunatidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
    }

    adiciona(event) {
        event.preventDefault();
        // Passando os dados do formulário para criação da negociação
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._limpaFormulario();

        console.log(this._listaNegociacoes.negociacoes);

    }

    _criaNegociacao() {
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQunatidade.value,
            this._inputValor.value
        );
    }

    _limpaFormulario() {
        this._inputData.value = '';
        this._inputQunatidade.value = 1;
        this._inputValor.value = 0.0;
        
        this._inputData.focus();
    }
}
