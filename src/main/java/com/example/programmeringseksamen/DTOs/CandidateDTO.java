package com.example.programmeringseksamen.DTOs;

import com.example.programmeringseksamen.models.Candidate;

public class CandidateDTO {
    public String partiName;
    public boolean failed;
    public String errorMessage;
    public Candidate candidate;

    public CandidateDTO(Candidate candidate, String partiName) {
        this.candidate = candidate;
        this.partiName = partiName;
    }

    public CandidateDTO(String errorMessage) {
        this.errorMessage = errorMessage;
        this.failed = true;
    }
}
