package com.vivero.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.vivero.modelos.Configuracion;
import com.vivero.modelos.Sensores;
import com.vivero.servicios.ViveroService;;

@RestController
public class ViveroRestControllers {
	@Autowired
	private ViveroService service;

	public ViveroRestControllers() {}
	
	@CrossOrigin
	@GetMapping("/vivero")
	public List<Sensores> obtenerDatos() {
		return service.obtenerDatos();
	}
	
	@CrossOrigin
	@GetMapping("/conf")
	public Configuracion obtenerConf() {
		return service.obtenerConf();
	}
	
	@CrossOrigin
	@PutMapping("/conf")
	public void modificarConf(@RequestBody Configuracion conf) {
		service.modificarConf(conf);
	}
}
