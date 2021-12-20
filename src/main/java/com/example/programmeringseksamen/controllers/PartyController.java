package com.example.programmeringseksamen.controllers;

import com.example.programmeringseksamen.models.Candidate;
import com.example.programmeringseksamen.models.Party;
import com.example.programmeringseksamen.repositories.PartyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PartyController {

    @Autowired
    PartyRepository parties;

    @GetMapping("/parties")
    public List<Party> getAllParties() {
        return parties.findAll();
    }

}
