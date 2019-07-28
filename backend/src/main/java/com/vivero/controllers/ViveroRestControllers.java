package com.vivero.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.vivero.modelos.Configuracion;
import com.vivero.modelos.Sensores;
import com.vivero.servicios.ViveroService;;

public class ViveroRestControllers {
	@Autowired
	private ViveroService service;

	public ViveroRestControllers() {}
	
	@CrossOrigin
	@GetMapping("/usuarios")
	public List<Sensores> obtenerDatos() {
		return service.obtenerDatos();
	}

	@CrossOrigin
	@PutMapping("/vivero")
	public void modificarConf(@RequestBody Configuracion conf) {
		service.modificarConf(conf);
	}
}
