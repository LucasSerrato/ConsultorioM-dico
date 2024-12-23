package com.seuprojeto.backend.repository;

import com.seuprojeto.backend.Paciente; // Certifique-se de que o caminho está correto
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PacienteRepository extends JpaRepository<Paciente, Long> {
    // Métodos adicionais de consulta podem ser definidos aqui, se necessário
}
