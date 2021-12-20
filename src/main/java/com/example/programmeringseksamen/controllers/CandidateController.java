package com.example.programmeringseksamen.controllers;

import com.example.programmeringseksamen.DTOs.CandidateDTO;
import com.example.programmeringseksamen.models.Candidate;
import com.example.programmeringseksamen.repositories.CandidateRepository;
import com.example.programmeringseksamen.repositories.PartyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CandidateController {

    @Autowired
    CandidateRepository candidates;

    @Autowired
    PartyRepository parties;

    @GetMapping("/candidates")
    public List<Candidate> getCandidates() {
        return candidates.findAll();
    }

    @GetMapping("/candidates/{partyName}")
    public List<Candidate> getCandidatesByParty(@PathVariable String partyName) {
        return candidates.findCandidatesByParty_PartyName(partyName);
    }

    @PostMapping("/candidates/{partyName}")
    public CandidateDTO addCandidate(@PathVariable String partyName, @RequestBody Candidate newCandidate) {
        return parties.findById(partyName).map(party -> {
            newCandidate.setId(null);
            newCandidate.setParty(party);
            Candidate createdCandidate = candidates.save(newCandidate);
            return new CandidateDTO(createdCandidate, newCandidate.getParty().getPartyName());
        }).orElse(new CandidateDTO("Did not find party by name"));
    }

    @DeleteMapping("/candidates/{id}")
    public void deleteCandidate(@PathVariable Long id) {
        candidates.deleteById(id);
    }
    @PatchMapping("/candidates/{id}")
    public CandidateDTO editCandidate(@PathVariable Long id, @RequestBody Candidate candidateToEdit) {
        return candidates.findById(id).map(foundCandidate -> {
            if (candidateToEdit.getName() != null) foundCandidate.setName(candidateToEdit.getName());
            if (candidateToEdit.getParty() != null && foundCandidate.getParty().getPartyName() != null) foundCandidate.setParty(candidateToEdit.getParty());

            Candidate candidateUpdate = candidates.save(foundCandidate);
            return new CandidateDTO(candidateUpdate, candidateToEdit.getParty().getPartyName());
        }).orElse(new CandidateDTO("Candidate not found"));
    }

}
