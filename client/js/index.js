let campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor'),
];

/* Populando a tabela após o submit do formulário */
document.querySelector('.form').addEventListener('submit', function (event) {
    let tr = document.createElement('tr');
    campos.forEach(campo => {
        let td = document.createElement('td');
            td.textContent = campo.value;
            tr.appendChild(td)
    });

    let tdVolume = document.creat
});