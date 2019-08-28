
/** POSSIVEIS ESTADOS DA REQUISIÇÃO AJAX 
           0: requisição ainda não iniciada
           1: conexão com o servidor estabelecida
           2: requisição recebida
           3: processando requisição
           4: requisição está concluída e a resposta está pronta 
           */

class HttpService {

    get(url) {
        return fetch(url)
        .then(res => this._handleErrors(res))
        .then(res => res.json());
    }

    post(url, dado) {

        return fetch(url, {
            headers: { 'Content-Type': 'application/json' },
            method: 'post',
            body: JSON.stringify(dado)
        })
        .then(res => this._handleErrors(res));
}

    _handleErrors(res) {
        if(res.ok) {
            return res;
        } else {
          throw new Error(res.statusText);
        }
    }
}