package com.vivero;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import com.vivero.servicios.ViveroService;

@Component
public class AppRunner implements CommandLineRunner {
	private ViveroService service;
	
	public AppRunner (ViveroService service) {
		this.service = service;
	}
	@Override
	public void run(String... args) throws Exception {
		service.sensorRefresh();
	}

}
