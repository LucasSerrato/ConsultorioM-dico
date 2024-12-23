package com.seuprojeto.backend.dto;

import com.seuprojeto.backend.Agendamento;
import com.seuprojeto.backend.Paciente;
import com.fasterxml.jackson.annotation.JsonInclude;

import java.time.format.DateTimeFormatter;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class PacienteDTO {
    private final Long id;
    private final String nome;
    private final String email;
    private final String telefone;
    private final String dataUltimoAgendamento;
    private final String horaUltimoAgendamento;

    private static final DateTimeFormatter DATE_FORMATTER = DateTimeFormatter.ofPattern("dd/MM/yyyy");
    private static final DateTimeFormatter TIME_FORMATTER = DateTimeFormatter.ofPattern("HH:mm");

    // Construtor para inicializar com paciente e último agendamento
    public PacienteDTO(Paciente paciente, Agendamento ultimoAgendamento) {
        this.id = paciente.getId();
        this.nome = paciente.getNome();
        this.email = paciente.getEmail();
        this.telefone = paciente.getTelefone();

        if (ultimoAgendamento != null) {
            this.dataUltimoAgendamento = ultimoAgendamento.getData() != null ? ultimoAgendamento.getData().format(DATE_FORMATTER) : null;
            this.horaUltimoAgendamento = ultimoAgendamento.getHora() != null ? ultimoAgendamento.getHora().format(TIME_FORMATTER) : null;
        } else {
            this.dataUltimoAgendamento = null;
            this.horaUltimoAgendamento = null;
        }
    }

    // Getters (remova os que não são necessários para reduzir advertências)
    public Long getId() { return id; }
    public String getNome() { return nome; }
    public String getEmail() { return email; }
    public String getTelefone() { return telefone; }
    public String getDataUltimoAgendamento() { return dataUltimoAgendamento; }
    public String getHoraUltimoAgendamento() { return horaUltimoAgendamento; }
}
