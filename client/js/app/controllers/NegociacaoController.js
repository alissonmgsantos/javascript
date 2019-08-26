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

        ConnectionFactory
            .getConnection()
            .then(connection => {
                let negociacao = this._criaNegociacao();

                new NegociacaoDao(connection)
                    .adiciona(negociacao)
                    .then(() => {
                        this._listaNegociacoes.adiciona(negociacao);
                        this._mensagem.texto = 'Negociação adicionada com sucesso';
                        this._limpaFormulario();
                    });
            })
            .catch(erro => this._mensagem.texto = erro);
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
            parseInt(this._inputQunatidade.value),
            parseFloat(this._inputValor.value)
        );
    }

    _limpaFormulario() {
        this._inputData.value = '';
        this._inputQunatidade.value = 1;
        this._inputValor.value = 0.0;

        this._inputData.focus();
    }
}
