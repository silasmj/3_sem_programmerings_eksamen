function deleteCandidate(candidateId) {
    fetch(baseurl + "/candidates/" + candidateId, {
        method: "DELETE"
    }).then(response => {
        if (response.status === 200) {
            document.getElementById(candidateId).remove();
        } else {
            console.log(response.status);
        }
    })
}

function updateCandidate(candidate) {
    const tableRowToUpdate = document.getElementById(candidate.id)
    tableRowToUpdate.innerHTML = `
        <td>
            <p class="row-candidate-id">${candidate.id}</p>
        </td>
        <td>
            <input id="update-candidate-name-${candidate.id}" value="${candidate.name}">
        </td>
        <td>
             <input id="update-candidate-party-${candidate.id}" value="${candidate.party.partyName}">
        </td>
        <td>
            <button id="cancel-update-${candidate.id}">✖️</button>
            <button onclick="updateCandidateBackEnd(${candidate.id})">✅</button>

        </td>
    `;
    document.getElementById(`cancel-update-${candidate.id}`).addEventListener("click", () => undoUpdateTableRow(candidate))

}
function updateCandidateBackEnd(candidateId) {
    console.log(candidateId)
    const tableRowToUpdate = document.getElementById(candidateId);

    const candidateToUpdate = {
        id: candidateId,
        name: document.getElementById(`update-candidate-name-${candidateId}`).value,
        party: {partyName: document.getElementById(`update-candidate-party-${candidateId}`).value}
    };

    console.log(candidateToUpdate)
    fetch(baseurl + "/candidates/" + candidateId, {
        method: "PATCH",
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify(candidateToUpdate)
    }).then(response => {
        console.log(candidateToUpdate)
        if(response.status === 200){
            constructCandidateTableRow(tableRowToUpdate, candidateToUpdate);
        }
    })
}


function undoUpdateTableRow(candidate) {
    const candidateTableRow = document.getElementById(candidate.id);

    constructCandidateTableRow(candidateTableRow, candidate);
}