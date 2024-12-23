package com.seuprojeto.backend;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Medico {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private String especialidade;

    @OneToMany(mappedBy = "medico", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore // Evita recursão infinita ao serializar para JSON
    private List<Paciente> pacientes = new ArrayList<>();

    // Construtor vazio
    public Medico() {}

    // Construtor com parâmetros (opcional)
    public Medico(String nome, String especialidade) {
        this.nome = nome;
        this.especialidade = especialidade;
    }

    // Getters e Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEspecialidade() {
        return especialidade;
    }

    public void setEspecialidade(String especialidade) {
        this.especialidade = especialidade;
    }

    public List<Paciente> getPacientes() {
        return pacientes;
    }

    public void setPacientes(List<Paciente> pacientes) {
        this.pacientes = pacientes;
    }

    // Método para adicionar um paciente à lista
    public void addPaciente(Paciente paciente) {
        pacientes.add(paciente);
        paciente.setMedico(this);
    }

    // Método para remover um paciente da lista
    public void removePaciente(Paciente paciente) {
        pacientes.remove(paciente);
        paciente.setMedico(null);
    }
}
