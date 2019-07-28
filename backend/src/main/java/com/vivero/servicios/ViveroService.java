package com.vivero.servicios;

import java.util.List;

import com.vivero.modelos.Configuracion;
import com.vivero.modelos.Sensores;

public interface ViveroService {
	public List<Sensores> obtenerDatos();
	public void modificarConf(Configuracion conf);
	

}
