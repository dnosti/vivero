package com.vivero.servicios;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vivero.modelos.Configuracion;
import com.vivero.modelos.Sensores;
import com.vivero.repositories.ViveroRepository;

@Service
public class ViveroServiceImpl implements ViveroService{

	@Autowired
	private ViveroRepository repo;
	
	public List<Sensores> obtenerDatos() {
		return repo.findAll();
	}

	public void modificarConf(Configuracion conf) {
		
	}
	
	
}
