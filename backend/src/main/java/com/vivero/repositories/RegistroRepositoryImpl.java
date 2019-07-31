package com.vivero.repositories;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;

import com.vivero.modelos.Registro;

@Repository
public class RegistroRepositoryImpl {
	
	@PersistenceContext
    private EntityManager entityManager;
 
    public List<Registro> findLastTen() {
        return entityManager.createQuery("SELECT r FROM Registro r ORDER BY r.Id DESC",
          Registro.class).setMaxResults(10).getResultList();
    }
}
