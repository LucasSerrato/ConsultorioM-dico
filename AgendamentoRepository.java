package com.seuprojeto.backend.repository;

import com.seuprojeto.backend.Agendamento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface AgendamentoRepository extends JpaRepository<Agendamento, Long> {

    // Método personalizado para buscar todos os agendamentos pelo ID do paciente
    List<Agendamento> findByPacienteId(Long pacienteId);

    // Método para buscar o último agendamento de um paciente
    Optional<Agendamento> findTopByPacienteIdOrderByDataDescHoraDesc(Long pacienteId);

    // Método personalizado para deletar todos os agendamentos de um paciente pelo ID do paciente
    void deleteByPacienteId(Long pacienteId);
}
