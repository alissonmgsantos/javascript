class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document); // Tornando a chamada do document.querySelector mais clear
        this._inputData = $('#data');
        this._inputQunatidade = $('#quantidade');
        this._inputValor = $('#valor');

        let self = this;

        this._listaNegociacoes = ProxyFactory.create (
            new ListaNegociacoes(),
            ['adiciona', 'esvazia'], model =>
                this._negociacoesView.update(model));
        
        // Chamará o html responvsavel por exibir os registros
        this._negociacoesView = new NegociacaoView($('#negociacoesView'));

        // Exibirá a tabela no HTML
        this._negociacoesView.update(this._listaNegociacoes);

        // Exibirá mensagem

        this._mensagem = ProxyFactory.create(
            new Mensagem(), ['texto'], model =>
                this._mensagemView.update(model));
        this._mensagemView = new MensagemView($('#mensagemView'));  
        this._mensagemView.update(this._mensagem);
    }

    adiciona(event) {
        event.preventDefault();
        // Passando os dados do formulário para criação da negociação
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._mensagem.texto = 'Negociacao adicionada com sucesso';
        this._limpaFormulario();
    }

    apaga() {
        this._listaNegociacoes.esvazia();
        this._mensagem.texto = 'Lista de negociações apagada com sucesso!';
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
