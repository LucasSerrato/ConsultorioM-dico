package com.seuprojeto.backend.repository;

import com.seuprojeto.backend.Medico;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MedicoRepository extends JpaRepository<Medico, Long> {
    // JpaRepository já oferece métodos padrão como save, findAll, findById, deleteById, etc.
    // Se precisar de consultas personalizadas, você pode adicioná-las aqui.
}
