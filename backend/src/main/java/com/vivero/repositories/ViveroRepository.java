package com.vivero.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vivero.modelos.Sensores;


@Repository
public interface ViveroRepository extends JpaRepository<Sensores, Integer>{

}
