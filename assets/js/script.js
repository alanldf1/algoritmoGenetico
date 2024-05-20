var schoolSupplies = [
    { id: 1,name: 'Caderno',        space: 472.5,  value: 0 },
    { id: 2,name: 'Caneta',         space: 11,  value: 0 },
    { id: 3,name: 'Agenda',         space: 630, value: 0 },
    { id: 4,name: 'Borracha',       space: 10,  value: 0 },
    { id: 5,name: 'Régua',          space: 22.5,  value: 0 },
    { id: 6,name: 'Marcador',       space: 23, value: 0 },
    { id: 7,name: 'Grampeador',     space: 180, value: 0 },
    { id: 8,name: 'Tesoura',        space: 135,  value: 0 },
    { id: 9,name: 'Cola',           space: 31.4,  value: 0 },
    { id: 10,name: 'Transferidor',  space: 5,  value: 0 },
];

var totalSpace = 0;

// Função para atribuir aleatoriamente o valor 1 aos elementos
var randomizeValues = async function(items){
    await items.forEach(item => {
        // Define valor 1 com probabilidade de 50%
        item.value = Math.random() < 0.5 ? 1 : 0;
    });
}


var initializeSupplies = async function() {
    await randomizeValues(schoolSupplies);
    totalSpace = 0;
    schoolSupplies.forEach(item => {
        if(item.value == 1){
            totalSpace += item.space;
        }
    });
    
    displaySupplies(schoolSupplies);
    displayTotalValue(totalSpace);

}


var displayAllSupplies = async function() {
    const rowMaterial = $('#tr-material');
    const rowSpace = $('#tr-space');

    for (const supply of schoolSupplies) {
        const nameCell = $('<td></td>').text(supply.name).addClass('min-width-cell');
        await rowMaterial.append(nameCell);
    }

    for (const supply of schoolSupplies) {
        const spaceCell = $('<td></td>').text(supply.space.toFixed(2).replace('.', ',') + "cm³").addClass('min-width-cell');
        await rowSpace.append(spaceCell);
    }
};

function displaySupplies(supplies) {
    $('#selected-supplies').empty();
    supplies.forEach(supply => {
        if(supply.value == 1){
            $('#selected-supplies').append(`<li class="list-group-item">${supply.id} - ${supply.name} (Espaço: ${supply.space})cm³</li>`);
        }
    });
}


function displayTotalValue(value) {
    $('#total-value').text(value.toFixed(2).replace('.', ',') + "cm³");
}

function displaySpaceWarning() {
    $('#weight-warning').text('Alerta: O espaço total dos materiais selecionados ultrapassa o limite de 800cm³!');
}

$(document).ready(function () {
    displayAllSupplies();
    $('body').on('click','#initialize-btn', initializeSupplies);

});