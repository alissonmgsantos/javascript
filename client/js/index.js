let campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor'),
];

/* Populando a tabela após o submit do formulário */
let tbody = document.querySelector('table tbody');
document.querySelector('.form').addEventListener('submit', function (event) {

    // Evitando que o formulário seja submetido
    event.preventDefault();

    let tr = document.createElement('tr');
    campos.forEach(campo => {
        let td = document.createElement('td');
            td.textContent = campo.value;
            tr.appendChild(td)
    });
    

    let tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;
    tr.append(tdVolume);
    tbody.appendChild(tr);

    // Limpenado os campos da tela

    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;
    campos[0].focus();
});