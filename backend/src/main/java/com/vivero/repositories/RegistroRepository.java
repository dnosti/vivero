package com.vivero.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vivero.modelos.Registro;

@Repository
public interface RegistroRepository extends JpaRepository<Registro, Integer>{

}