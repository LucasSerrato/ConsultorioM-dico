package com.seuprojeto.backend.controller;

import com.seuprojeto.backend.Medico;
import com.seuprojeto.backend.repository.MedicoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import jakarta.validation.Valid;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/medicos")
@CrossOrigin(origins = "http://localhost:4200") // Permite chamadas do frontend Angular
public class MedicoController {

    private static final Logger logger = LoggerFactory.getLogger(MedicoController.class);
    private final MedicoRepository medicoRepository;

    @Autowired
    public MedicoController(MedicoRepository medicoRepository) {
        this.medicoRepository = medicoRepository;
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Medico>> listarTodos() {
        try {
            List<Medico> medicos = medicoRepository.findAll();
            logger.info("Lista de médicos recuperada com sucesso, total de médicos: {}", medicos.size());
            return ResponseEntity.ok(medicos);
        } catch (Exception e) {
            logger.error("Erro ao listar médicos", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Medico> criarMedico(@Valid @RequestBody Medico medico) {
        try {
            Medico novoMedico = medicoRepository.save(medico);
            logger.info("Médico criado com sucesso: ID = {}", novoMedico.getId());
            return ResponseEntity.status(HttpStatus.CREATED).body(novoMedico);
        } catch (Exception e) {
            logger.error("Erro ao criar médico", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Medico> buscarMedico(@PathVariable Long id) {
        Optional<Medico> medico = medicoRepository.findById(id);
        if (medico.isPresent()) {
            logger.info("Médico encontrado: ID = {}", id);
            return ResponseEntity.ok(medico.get());
        } else {
            logger.warn("Médico com ID {} não encontrado", id);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @PutMapping(value = "/{id}", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Medico> atualizarMedico(@PathVariable Long id, @Valid @RequestBody Medico medicoAtualizado) {
        return medicoRepository.findById(id)
                .map(medico -> {
                    medico.setNome(medicoAtualizado.getNome());
                    medico.setEspecialidade(medicoAtualizado.getEspecialidade());
                    Medico medicoAtualizadoDb = medicoRepository.save(medico);
                    logger.info("Médico atualizado com sucesso: ID = {}", id);
                    return ResponseEntity.ok(medicoAtualizadoDb);
                })
                .orElseGet(() -> {
                    logger.warn("Médico com ID {} não encontrado para atualização", id);
                    return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
                });
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarMedico(@PathVariable Long id) {
        if (medicoRepository.existsById(id)) {
            try {
                medicoRepository.deleteById(id);
                logger.info("Médico deletado com sucesso: ID = {}", id);
                return ResponseEntity.noContent().build();
            } catch (Exception e) {
                logger.error("Erro ao deletar médico: ID = {}", id, e);
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
            }
        } else {
            logger.warn("Médico com ID {} não encontrado para exclusão", id);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
}
