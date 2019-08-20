class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document); // Tornando a chamada do document.querySelector mais clear
        this._inputData = $('#data');
        this._inputQunatidade = $('#quantidade');
        this._inputValor = $('#valor');

        // BIND PARA ASSOCIAR MODEL COM VIEW
        this._listaNegociacoes = new Bind(
            new ListaNegociacoes(),
            new NegociacaoView($('#negociacoesView')),
            ['adiciona', 'esvazia']);

        // BIND PARA ASSOCIAR MODEL COM VIEW
        this._mensagem = new Bind(
            new Mensagem(),
            new MensagemView($('#mensagemView')),
            ['texto']);
    }

    adiciona(event) {
        event.preventDefault();
        // Passando os dados do formulário para criação da negociação
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._mensagem.texto = 'Negociacao adicionada com sucesso';
        this._limpaFormulario();
    }

    importaNegociacoes() {
        let service = new NegociacaoService();
        Promise.all([
            service.obterNegociacoesDaSemana(),
            service.obterNegociacoesDaSemanaAnterior(),
            service.obterNegociacoesDaSemanaRetrasada()]
        ).then(negociacoes => {
            negociacoes
                .reduce((arrayAchatado, array) => arrayAchatado.concat(array), [])
                .forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
            this._mensagem.texto = 'Negociações importadas com sucesso';
        })
            .catch(erro => this._mensagem.texto = erro);
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
