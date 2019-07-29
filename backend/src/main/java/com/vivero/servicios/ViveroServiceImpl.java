package com.vivero.servicios;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Service;
import org.springframework.scheduling.annotation.Async;

import com.vivero.modelos.Configuracion;
import com.vivero.modelos.Sensores;
import com.vivero.repositories.ConfigRepository;
import com.vivero.repositories.ViveroRepository;

@Service
public class ViveroServiceImpl implements ViveroService{

	@Autowired
	private ViveroRepository repo;
	@Autowired
	private ConfigRepository repConf;
	private ResourceLoader resourceLoader;
	
	@Override
	public List<Sensores> obtenerDatos() {
		return repo.findAll();
	}
	
	@Override
	public void modificarConf(Configuracion conf) {
		repConf.save(conf);
	}
	
	@Async
	@Override
	public void sensorRefresh() {
		Resource resource;
		Sensores sens = new Sensores();
		while(true) {
			resource = resourceLoader.getResource("classpath:static/sensores.txt");
			try {
				sens.setTemperatura(Float.parseFloat( new BufferedReader(new InputStreamReader(resource.getInputStream())).readLine()));
				sens.setHumedad(Integer.parseInt(new BufferedReader(new InputStreamReader(resource.getInputStream())).readLine()));
				sens.setLuz(Integer.parseInt(new BufferedReader(new InputStreamReader(resource.getInputStream())).readLine()));
				sens.setCo2(Integer.parseInt(new BufferedReader(new InputStreamReader(resource.getInputStream())).readLine()));
			} catch (IOException e) {
				e.printStackTrace();
			}
			
		}
	}

	@Override
	public Configuracion obtenerConf() {
		return repConf.findById(1).orElse(null);
	}
	
	
}
