const candidateTableBody = document.getElementById("candidate-tbody");

fetch(baseurl + "/candidates")
    .then(response => response.json())
    .then(result => {

        result.map(createCandidateTableRow)
    })

function createCandidateTableRow(candidate) {
    const candidateTableRow = document.createElement("tr");
    candidateTableRow.id = candidate.id;

    candidateTableBody.appendChild(candidateTableRow);

    constructCandidateTableRow(candidateTableRow, candidate)
}

function constructCandidateTableRow(candidateTableRow, candidate) {
    candidateTableRow.innerHTML = `
    <td>
        <p class="row-candidate-id">${candidate.id}</p>
    </td>
    <td>
        <p class="row-candidate-name">${candidate.name}</p>
    </td>
    <td>
        <p class="row-candidate-party">${candidate.party.partyName}</p>
    </td>
    <td>
        <button id="update-button-${candidate.id}">📝</button>
        <button onclick="deleteCandidate(${candidate.id})">❌</button>
    </td>
    `;
    document.getElementById(`update-button-${candidate.id}`).addEventListener("click", () => updateCandidate(candidate))
}

document.getElementById("parties-dropdown").addEventListener("change", filterCandidates)

function filterCandidates() {
    const selectedParty = document.getElementById("parties-dropdown").value;
    candidateTableBody.innerHTML = "";
    if (selectedParty === "All") {
        fetch(baseurl + "/candidates")
            .then(response => response.json())
            .then(result => {
                result.map(createCandidateTableRow)
            })
    }
    fetch(baseurl + "/candidates/" + selectedParty)
        .then(response => response.json())
        .then(result => {
            result.map(createCandidateTableRow);
        })
}

