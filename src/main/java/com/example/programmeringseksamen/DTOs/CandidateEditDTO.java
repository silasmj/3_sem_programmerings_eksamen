package com.example.programmeringseksamen.DTOs;

import com.example.programmeringseksamen.models.Candidate;

public class CandidateEditDTO {
    public String partiName;
    public boolean failed;
    public String errorMessage;
    public Candidate candidate;

    public CandidateEditDTO(Candidate candidate, String partiName) {
        this.candidate = candidate;
        this.partiName = partiName;
    }

    public CandidateEditDTO(String errorMessage) {
        this.errorMessage = errorMessage;
        this.failed = true;
    }
}
