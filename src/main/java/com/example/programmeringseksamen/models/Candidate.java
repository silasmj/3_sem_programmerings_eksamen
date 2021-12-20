package com.example.programmeringseksamen.models;

import com.sun.istack.Nullable;
import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "candidates")
@Data
public class Candidate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @Column
    private String name;

    @ManyToOne
    @JoinColumn(name = "party_name")
    @Nullable
    private Party party;
}
