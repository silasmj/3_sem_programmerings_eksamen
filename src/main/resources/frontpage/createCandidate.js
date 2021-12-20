const candidateCreateDiv = document.getElementById("create-candidate-form");
const candidateExpandButton = document.getElementById("expand-candidate-form");

const createCandidateForm = `
    <div>
        <label>Name</label>
        <input id="create-candidate-name" placeholder="Name ..">
    </div>
    <div>
        <select id="create-candidate-partyName">
            <option value="Socialdemokratiet">Socialdemokratiet</option>
            <option value="Radikale Venstre">Radikale Venstre</option>
            <option value="Det Konservative Folkeparti">Det Konservative Folkeparti</option>
            <option value="Nye Borgerlige">Nye Borgerlige</option>
            <option value="Socialistisk Folkeparti">Socialistisk Folkeparti</option>
            <option value="Liberal Alliance">Liberal Alliance</option>
            <option value="Dansk Folkeparti">Dansk Folkeparti</option>
            <option value="Venstre">Venstre</option>
            <option value="Feministisk Initiativ">Feministisk Initiativ</option>
            <option value="Enhedslisten">Enhedslisten</option>
        </select>
    </div>
    <div>
        <button onclick="createCandidate()">Create</button>
        <button onclick="removeCreateForm()">Cancel</button>
    </div>
`;

function createCandidate() {
    const name = document.getElementById("create-candidate-name").value;
    const partyName = document.getElementById("create-candidate-partyName").value;

    const newParty = {
        name: partyName
    }

    const newCandidate = {
        name: name,
        party: newParty
    };

    fetch(baseurl + "/candidates/" + partyName, {
        method: "POST",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(newCandidate)
    }).then(response => {
        if (response.status === 200) {
            location.reload();
            return false;
            removeCreateForm();
            console.log(response);
        }else {
            console.log("Candidate not created", response.status)
        }
    })

}


function removeCreateForm() {
    candidateExpandButton.style.display = "block";
    candidateCreateDiv.innerHTML = "";
}

function showCandidateForm() {
    candidateExpandButton.style.display = "none";
    candidateCreateDiv.innerHTML = createCandidateForm;
}


document.getElementById("expand-candidate-form").addEventListener("click", showCandidateForm);