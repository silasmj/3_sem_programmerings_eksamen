package com.example.programmeringseksamen.repositories;

import com.example.programmeringseksamen.models.Candidate;
import com.example.programmeringseksamen.models.Party;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PartyRepository extends JpaRepository<Party, String> {

}
