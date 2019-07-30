package com.vivero.servicios;

import java.util.List;

import org.springframework.scheduling.annotation.Async;

import com.vivero.modelos.Configuracion;
import com.vivero.modelos.Estados;
import com.vivero.modelos.Registro;
import com.vivero.modelos.Sensores;

public interface ViveroService {
	public List<Sensores> obtenerDatos();
	public void setSensores(Sensores sensores); //Modifica el valor de los sensores, para simular lectura de los mismos.
	public void modificarConf(Configuracion conf);
	public Configuracion obtenerConf();
	@Async
	public void sensorRefresh () throws InterruptedException;
	
	public List<Registro> getInfoRecords();
	public Estados getStatus();
	public void setStatus(Configuracion conf, Sensores sensor);
}
