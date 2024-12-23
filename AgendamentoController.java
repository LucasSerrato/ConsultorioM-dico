package com.seuprojeto.backend.controller;

import com.seuprojeto.backend.Agendamento;
import com.seuprojeto.backend.Paciente;
import com.seuprojeto.backend.repository.AgendamentoRepository;
import com.seuprojeto.backend.repository.PacienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;

@RestController
@RequestMapping("/pacientes/{pacienteId}/agendamentos")
@CrossOrigin(origins = "http://localhost:4200")
public class AgendamentoController {

    private static final Logger logger = LoggerFactory.getLogger(AgendamentoController.class);

    @Autowired
    private AgendamentoRepository agendamentoRepository;

    @Autowired
    private PacienteRepository pacienteRepository;

    @GetMapping
    public ResponseEntity<List<Agendamento>> listarAgendamentos(@PathVariable Long pacienteId) {
        if (!pacienteRepository.existsById(pacienteId)) {
            logger.warn("Paciente com ID {} não encontrado para listar agendamentos.", pacienteId);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        List<Agendamento> agendamentos = agendamentoRepository.findByPacienteId(pacienteId);
        logger.info("Lista de agendamentos recuperada para o paciente ID: {}", pacienteId);
        return ResponseEntity.ok(agendamentos);
    }

    @PostMapping
    public ResponseEntity<?> criarAgendamento(@PathVariable Long pacienteId, @RequestBody Agendamento agendamento) {
        Paciente paciente = pacienteRepository.findById(pacienteId).orElse(null);

        if (paciente == null) {
            logger.warn("Paciente com ID {} não encontrado ao tentar criar agendamento.", pacienteId);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Paciente com ID " + pacienteId + " não encontrado.");
        }

        agendamento.setPaciente(paciente);

        if (agendamento.getData() == null || agendamento.getHora() == null) {
            logger.warn("Tentativa de criar agendamento com dados incompletos para paciente ID: {}", pacienteId);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Data e hora do agendamento são obrigatórias.");
        }

        try {
            Agendamento novoAgendamento = agendamentoRepository.save(agendamento);
            logger.info("Agendamento criado com sucesso para o paciente ID: {}", pacienteId);
            return ResponseEntity.status(HttpStatus.CREATED).body(novoAgendamento);
        } catch (Exception e) {
            logger.error("Erro ao criar agendamento para o paciente ID {}: {}", pacienteId, e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro ao criar o agendamento: " + e.getMessage());
        }
    }
}
