package com.example.programmeringseksamen.repositories;

import com.example.programmeringseksamen.models.Candidate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

public interface CandidateRepository extends JpaRepository<Candidate, Long> {

    List<Candidate> findCandidatesByParty_PartyName(String partyName);
}
