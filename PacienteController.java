package com.seuprojeto.backend.controller;

import com.seuprojeto.backend.Agendamento;
import com.seuprojeto.backend.Medico;
import com.seuprojeto.backend.Paciente;
import com.seuprojeto.backend.dto.PacienteDTO;
import com.seuprojeto.backend.repository.AgendamentoRepository;
import com.seuprojeto.backend.repository.MedicoRepository;
import com.seuprojeto.backend.repository.PacienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/pacientes")
@CrossOrigin(origins = "http://localhost:4200")
public class PacienteController {

    private static final Logger logger = LoggerFactory.getLogger(PacienteController.class);

    @Autowired
    private PacienteRepository pacienteRepository;

    @Autowired
    private AgendamentoRepository agendamentoRepository;

    @Autowired
    private MedicoRepository medicoRepository;

    @GetMapping
    public ResponseEntity<List<PacienteDTO>> listarTodos() {
        List<Paciente> pacientes = pacienteRepository.findAll();
        List<PacienteDTO> pacientesComAgendamento = pacientes.stream().map(paciente -> {
            Optional<Agendamento> ultimoAgendamento = agendamentoRepository.findTopByPacienteIdOrderByDataDescHoraDesc(paciente.getId());
            return new PacienteDTO(paciente, ultimoAgendamento.orElse(null));
        }).collect(Collectors.toList());

        logger.info("Lista de pacientes recuperada com sucesso: {} pacientes encontrados.", pacientesComAgendamento.size());
        return ResponseEntity.ok(pacientesComAgendamento);
    }

    @PostMapping
    public ResponseEntity<Paciente> criarPaciente(@RequestBody Paciente paciente, @RequestParam(required = false) Long medicoId) {
        if (medicoId != null) {
            Optional<Medico> medico = medicoRepository.findById(medicoId);
            if (medico.isPresent()) {
                paciente.setMedico(medico.get());  // Associa o médico ao paciente
            } else {
                logger.warn("Médico com ID {} não encontrado.", medicoId);
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }
        }

        Paciente novoPaciente = pacienteRepository.save(paciente);
        logger.info("Paciente criado com sucesso: ID = {}", novoPaciente.getId());
        return ResponseEntity.status(HttpStatus.CREATED).body(novoPaciente);
    }

    @GetMapping("/{id}")
    public ResponseEntity<PacienteDTO> buscarPaciente(@PathVariable Long id) {
        return pacienteRepository.findById(id).map(paciente -> {
            Optional<Agendamento> ultimoAgendamento = agendamentoRepository.findTopByPacienteIdOrderByDataDescHoraDesc(id);
            PacienteDTO pacienteDTO = new PacienteDTO(paciente, ultimoAgendamento.orElse(null));
            logger.info("Paciente encontrado: ID = {}", paciente.getId());
            return ResponseEntity.ok(pacienteDTO);
        }).orElseGet(() -> {
            logger.warn("Paciente com ID {} não encontrado.", id);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        });
    }

    @PutMapping("/{id}")
    public ResponseEntity<Paciente> atualizarPaciente(@PathVariable Long id, @RequestBody Paciente pacienteAtualizado, @RequestParam(required = false) Long medicoId) {
        Optional<Medico> medicoOpt = (medicoId != null) ? medicoRepository.findById(medicoId) : Optional.empty();

        return pacienteRepository.findById(id).map(paciente -> {
            paciente.setNome(pacienteAtualizado.getNome());
            paciente.setEmail(pacienteAtualizado.getEmail());
            paciente.setTelefone(pacienteAtualizado.getTelefone());

            medicoOpt.ifPresent(paciente::setMedico);

            Paciente pacienteAtualizadoDb = pacienteRepository.save(paciente);
            logger.info("Paciente atualizado com sucesso: ID = {}", pacienteAtualizadoDb.getId());
            return ResponseEntity.ok(pacienteAtualizadoDb);
        }).orElseGet(() -> {
            logger.warn("Paciente com ID {} não encontrado para atualização.", id);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        });
    }

    @Transactional
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarPaciente(@PathVariable Long id) {
        if (pacienteRepository.existsById(id)) {
            agendamentoRepository.deleteByPacienteId(id);
            pacienteRepository.deleteById(id);
            logger.info("Paciente deletado com sucesso: ID = {}", id);
            return ResponseEntity.noContent().build();
        } else {
            logger.warn("Paciente com ID {} não encontrado para exclusão.", id);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
}
