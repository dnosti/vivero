package com.vivero.servicios;

import java.util.List;

import org.springframework.scheduling.annotation.Async;

import com.vivero.modelos.Configuracion;
import com.vivero.modelos.Sensores;

public interface ViveroService {
	public List<Sensores> obtenerDatos();
	public void modificarConf(Configuracion conf);
	public Configuracion obtenerConf();
	@Async
	public void sensorRefresh ();
	

}
