package com.example.programmeringseksamen.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "parties")
@Data
public class Party {

    @Id
    @Column
    private String partyName;

    @Column
    private String partyLetter;

    @Column
    private int percentageOfVotes;

    @JsonIgnore
    @OneToMany(
            mappedBy = "party",
            fetch = FetchType.LAZY,
            cascade = CascadeType.ALL
    )
    private List<Candidate> candidateList;
}
