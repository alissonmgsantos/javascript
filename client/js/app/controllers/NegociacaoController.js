class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document); // Tornando a chamada do document.querySelector mais clear
        this._inputData = $('#data');
        this._inputQunatidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event) {
        event.preventDefault();
        // Passando o valor da data da forma correta para a classe Negociacao
        let data = new Date(
            ...this._inputData.value.split('-')
                .map((item, indice) => item - indice % 2) //Arrow function
        )

        // Passando os dados do formulário para criação da negociação
        let negociacao = new Negociacao(
            data,
            this._inputQunatidade.value,
            this._inputValor.value
        )
            console.log(negociacao);
            
    }
}
