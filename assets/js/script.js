const schoolSupplies = [
    { id: 1,name: 'Caderno', weight: 0.5, value: 2 },
    { id: 2,name: 'Caneta', weight: 0.1, value: 0.5 },
    { id: 3,name: 'Lápis', weight: 0.05, value: 0.2 },
    { id: 4,name: 'Borracha', weight: 0.03, value: 0.1 },
    { id: 5,name: 'Régua', weight: 0.1, value: 0.5 },
    { id: 6,name: 'Marcador', weight: 0.2, value: 1 },
    { id: 7,name: 'Grampeador', weight: 0.3, value: 1.5 },
    { id: 8,name: 'Tesoura', weight: 0.1, value: 0.7 },
    { id: 9,name: 'Cola', weight: 0.1, value: 0.5 },
    { id: 10,name: 'Transferidor', weight: 0.05, value: 0.3 },
    { id: 11,name: 'Compasso', weight: 0.1, value: 0.8 },
    { id: 12,name: 'Calculadora', weight: 0.2, value: 2.5 },
    { id: 13,name: 'Agenda', weight: 0.3, value: 1 },
    { id: 14,name: 'Caderno de anotações', weight: 0.2, value: 3 },
    { id: 15,name: 'Caderno de exercícios', weight: 0.4, value: 2 },
    { id: 16,name: 'Caderno de croquis', weight: 0.3, value: 1 },
    { id: 17,name: 'Caderno de música', weight: 0.2, value: 1 },
    { id: 18,name: 'Bloco de desenho', weight: 0.5, value: 3 },
    { id: 19,name: 'Lápis de cor', weight: 0.1, value: 3 },
    { id: 20,name: 'Canetinha', weight: 0.1, value: 2 },
    { id: 21,name: 'Livro de Física', weight: 1, value: 5 },
    { id: 22,name: 'Livro de Matemática', weight: 1, value: 5 },
    { id: 23,name: 'Livro de Filosofia', weight: 1, value: 5 },
    { id: 24,name: 'Livro de Português', weight: 1, value: 5 },
    { id: 25,name: 'Livro de Sociologia', weight: 1, value: 5 },
    { id: 26,name: 'Livro de Biologia', weight: 1, value: 5 },
    { id: 27,name: 'Livro de Química', weight: 1, value: 5 },
    { id: 28,name: 'Caderneta', weight: 0.2, value: 5 },
];

function initializeSupplies() {
    const selectedSupplies = [];
    let totalWeight = 0;
    let totalValue = 0;

    while (selectedSupplies.length < 10) {
        const randomSupply = schoolSupplies[Math.floor(Math.random() * schoolSupplies.length)];
        if (!selectedSupplies.includes(randomSupply)) {
            selectedSupplies.push(randomSupply);
            totalWeight += randomSupply.weight;
            totalValue += randomSupply.value;
        }
    }

    displaySupplies(selectedSupplies);
    displayTotalWeight(totalWeight);
    displayTotalValue(totalValue);

    if (totalWeight > 4) {
        displayWeightWarning();
    }else{
        $('#weight-warning').empty();
    }

    $('#initialize-btn').text('Refazer seleção aleatória');
}


function displayAllSupplies() {
    const allSuppliesElement = document.getElementById('all-supplies');

    schoolSupplies.forEach((supply) => {
        const row = document.createElement('tr');
        const idCell = document.createElement('td');
        const nameCell = document.createElement('td');
        const weightCell = document.createElement('td');
        const valueCell = document.createElement('td');

        idCell.textContent = supply.id;
        nameCell.textContent = supply.name;
        weightCell.textContent = supply.weight + "kg";
        valueCell.textContent = supply.value;

        row.appendChild(idCell);
        row.appendChild(nameCell);
        row.appendChild(weightCell);
        row.appendChild(valueCell);

        allSuppliesElement.appendChild(row);
    })
}

function displaySupplies(supplies) {
    $('#selected-supplies').empty();
    supplies.forEach(supply => {
        $('#selected-supplies').append(`<li class="list-group-item">${supply.id} - ${supply.name} (Peso: ${supply.weight.toFixed(2)} kg, Valor: ${supply.value})</li>`);
    });
}

function displayTotalWeight(weight) {
    $('#total-weight').text(weight.toFixed(2));
}

function displayTotalValue(value) {
    $('#total-value').text(value.toFixed(2));
}

function displayWeightWarning() {
    $('#weight-warning').text('Alerta: O peso total dos materiais selecionados ultrapassa o limite de 4 kg!');
}

$(document).ready(function () {
    displayAllSupplies();
    $('#initialize-btn').click(initializeSupplies);
});