class NegociacaoView {

       constructor(elemento) {

        this._elemento = elemento;
    }

    _template() {

        return `<table class="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>DATA</th>
                            <th>QUANTIDADE</th>
                            <th>VALOR</th>
                            <th>VOLUME</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
             </table>
            `;
    }

    // Exibirá a tabela no local definido como marcação, na atualização da tela
    update() {
      return  this._elemento.innerHTML = this._template();
    }
}
