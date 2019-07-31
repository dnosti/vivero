package com.vivero.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vivero.modelos.Estados;

@Repository
public interface EstadosRepository extends JpaRepository<Estados, Integer>{
	

}
