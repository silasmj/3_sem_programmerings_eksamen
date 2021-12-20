const partyTableBody = document.getElementById("election-tbody");


fetch(baseurl + "/parties")
    .then(response => response.json())
    .then(result => {
        result.map(createPartyTableRow)
})

function createPartyTableRow(party) {
    const partyTableRow = document.createElement("tr");

    partyTableBody.appendChild(partyTableRow);
    constructPartyTableRow(partyTableRow, party)
}

function constructPartyTableRow(partyTableRow, party) {
    partyTableRow.innerHTML = `
    <td>
        <p class="row-party-name">${party.partyName}</p>
    </td>
    <td>
        <p class="row-party-letter">${party.partyLetter}</p>
    </td>
    <td>
        <p class="row-party-percentage">${party.percentageOfVotes}%</p>
    </td> 
    `;
}