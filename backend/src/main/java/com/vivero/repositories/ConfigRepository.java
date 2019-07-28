package com.vivero.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vivero.modelos.Configuracion;

@Repository
public interface ConfigRepository extends JpaRepository<Configuracion, Integer>{

}
